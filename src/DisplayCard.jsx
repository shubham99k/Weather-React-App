import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./DisplayCard.css";

const getWeatherEmoji = (description) => {
  if (!description) return "🌤️";
  const d = description.toLowerCase();
  if (d.includes("clear")) return "☀️";
  if (d.includes("cloud")) return "☁️";
  if (d.includes("rain") || d.includes("drizzle")) return "🌧️";
  if (d.includes("thunder")) return "⛈️";
  if (d.includes("snow")) return "❄️";
  if (d.includes("mist") || d.includes("fog") || d.includes("haze"))
    return "🌫️";
  return "🌤️";
};

const DisplayCard = ({ info }) => {
  if (!info || !info.city) {
    return (
      <div className="dc">
        <div className="dc-placeholder">
          <span className="weather-icon">🌍</span>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Search for a city to see the weather
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="dc">
      <Card className="weather-card">
        <div className="weather-card-header">
          <span className="weather-emoji">{getWeatherEmoji(info.weather)}</span>
        </div>
        <CardContent>
          <Typography
            className="city-name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {info.city}, {info.country}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Poppins', sans-serif",
              textTransform: "capitalize",
              marginBottom: "1rem",
              fontSize: "0.9rem",
            }}
          >
            {info.weather}
          </Typography>
          <div className="weather-details">
            <div className="weather-detail-item">
              <div className="detail-icon">🌡️</div>
              <Typography className="detail-value">
                {Math.round(info.temperature)}°C
              </Typography>
              <Typography className="detail-label">Temperature</Typography>
            </div>
            <div className="weather-detail-item">
              <div className="detail-icon">🤔</div>
              <Typography className="detail-value">
                {Math.round(info.feelsLike)}°C
              </Typography>
              <Typography className="detail-label">Feels Like</Typography>
            </div>
            <div className="weather-detail-item">
              <div className="detail-icon">💧</div>
              <Typography className="detail-value">{info.humidity}%</Typography>
              <Typography className="detail-label">Humidity</Typography>
            </div>
            <div className="weather-detail-item">
              <div className="detail-icon">🌤️</div>
              <Typography
                className="detail-value"
                sx={{ fontSize: "0.85rem !important" }}
              >
                {info.weather}
              </Typography>
              <Typography className="detail-label">Condition</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayCard;
