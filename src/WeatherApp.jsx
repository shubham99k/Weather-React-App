import SearchBox from "./SearchBox";
import DisplayCard from "./DisplayCard";
import { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const insightList = weatherData
    ? [
        {
          title: "Outdoor Comfort",
          value:
            weatherData.temperature >= 18 && weatherData.temperature <= 30
              ? "Great"
              : "Moderate",
          note:
            weatherData.temperature >= 18 && weatherData.temperature <= 30
              ? "Comfortable weather for walks and light activity."
              : "Plan layers and check the feels-like temperature.",
        },
        {
          title: "Hydration Alert",
          value: weatherData.humidity >= 70 ? "High" : "Normal",
          note:
            weatherData.humidity >= 70
              ? "Humid air can feel warmer than expected."
              : "Humidity is in a comfortable range.",
        },
        {
          title: "Wind Readiness",
          value: weatherData.windSpeed >= 8 ? "Breezy" : "Calm",
          note:
            weatherData.windSpeed >= 8
              ? "Secure light outdoor items and carry a light jacket."
              : "Light wind conditions across the city.",
        },
      ]
    : [
        {
          title: "Morning Plan",
          value: "Check",
          note: "Search your city before stepping out to avoid surprises.",
        },
        {
          title: "Commute Tip",
          value: "Ready",
          note: "Use wind and humidity values to choose your outfit better.",
        },
        {
          title: "Travel Smart",
          value: "On",
          note: "High humidity and rain can change road visibility fast.",
        },
      ];

  return (
    <div className='weather-layout'>
      <header className='hero-panel'>
        <p className='hero-kicker'>Live local forecast</p>
        <h1>SkyCast Weather Studio</h1>
        <p className='hero-subtext'>
          Search any city and get a richer weather snapshot with comfort
          insights, commute guidance, and day planning cues.
        </p>
      </header>

      <div className='weather-grid'>
        <section className='main-stack'>
          <SearchBox
            setWeatherData={setWeatherData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <DisplayCard info={weatherData} isLoading={isLoading} />
        </section>

        <aside className='insights-panel'>
          <h2>Today at a glance</h2>
          <p>
            {weatherData
              ? `Actionable weather guidance for ${weatherData.city}.`
              : "Useful guidance appears here after you search for a city."}
          </p>
          <div className='insight-list'>
            {insightList.map((item) => (
              <article key={item.title} className='insight-card'>
                <div className='insight-top'>
                  <h3>{item.title}</h3>
                  <span>{item.value}</span>
                </div>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <section className='feature-strip'>
        <article>
          <h3>Plan Better</h3>
          <p>
            Track feels-like temperature and humidity together for more accurate
            comfort planning.
          </p>
        </article>
        <article>
          <h3>Commute Safer</h3>
          <p>
            Visibility and wind speed help you make better travel decisions,
            especially during changing conditions.
          </p>
        </article>
        <article>
          <h3>Daylight Aware</h3>
          <p>
            Sunrise and sunset times make it easier to schedule workouts, walks,
            and outdoor tasks.
          </p>
        </article>
      </section>

      <footer className='app-footer'>
        <p>build by Openweather api</p>
        <div className='footer-links'>
          <a
            href='https://github.com/shubham99k/Weather-React-App.git'
            target='_blank'
            rel='noreferrer'>
            GitHub
          </a>
          <span>|</span>
          <a
            href='https://portfolio-azure-eta-61.vercel.app/'
            target='_blank'
            rel='noreferrer'>
            Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WeatherApp;
