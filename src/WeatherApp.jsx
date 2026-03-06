import SearchBox from "./SearchBox";
import DisplayCard from "./DisplayCard";
import { useState } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        width: "100%",
        maxWidth: "500px",
        padding: "1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          background: "linear-gradient(135deg, #f5f7fa, #7c4dff, #536dfe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        Weather App
      </h1>
      <SearchBox setWeatherData={setWeatherData} />
      <DisplayCard info={weatherData} />
    </div>
  );
};

export default WeatherApp;
