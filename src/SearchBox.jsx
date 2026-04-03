import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

const QUICK_CITIES = ["Vadodara", "Ahmedabad", "Surat", "Delhi", "Mumbai"];

const SearchBox = ({ setWeatherData, isLoading, setIsLoading }) => {
  let [city, setCity] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  let getWeather = async (city) => {
    if (!API_KEY) {
      setErrorMsg(
        "API key missing. Add VITE_OPENWEATHER_API_KEY in your .env file.",
      );
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "City not found");
      }

      let result = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        visibility: data.visibility,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        timezone: data.timezone,
        observedAt: data.dt,
      };

      setWeatherData(result);
    } catch (error) {
      setWeatherData(null);
      setErrorMsg(error.message || "Unable to fetch weather right now.");
    } finally {
      setIsLoading(false);
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const query = city.trim();
    if (!query) {
      return;
    }
    setCity("");
    getWeather(query);
  };

  let handleQuickPick = (pickedCity) => {
    setCity(pickedCity);
    getWeather(pickedCity);
  };

  return (
    <div className='searchbox'>
      <h2>Search Live Weather</h2>
      <p className='search-caption'>
        Enter a city to view detailed conditions and quick day-planning
        insights.
      </p>
      <hr />
      <form onSubmit={handleSubmit}>
        <TextField
          id='outlined-basic'
          label='City Name'
          variant='outlined'
          required
          value={city}
          onChange={handleChange}
        />
        <Button
          className='search-button'
          variant='contained'
          type='submit'
          disabled={isLoading}
          endIcon={<SendIcon />}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>

      <div className='quick-city-wrap'>
        <h3>Try quick picks</h3>
        <div className='quick-city-list'>
          {QUICK_CITIES.map((name) => (
            <button
              key={name}
              type='button'
              className='quick-city-btn'
              onClick={() => handleQuickPick(name)}
              disabled={isLoading}>
              {name}
            </button>
          ))}
        </div>
      </div>

      {errorMsg ? <p className='error-msg'>{errorMsg}</p> : null}
    </div>
  );
};

export default SearchBox;
