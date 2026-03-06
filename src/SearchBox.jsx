import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a1eb0b95e055114f18e4d6dcead894c3";

  let getWeather = async (city) => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    // console.log(data);

    let result = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      weather: data.weather[0].description,
    };

    console.log(result);
    props.setWeatherData(result);
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(city);
    setCity("");
    getWeather(city);
  };

  return (
    <div className="searchbox">
      <h2>Search For the Weather</h2>
      <hr />
      <form onSubmit={handleSubmit} action="">
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button
          className="search-button"
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
