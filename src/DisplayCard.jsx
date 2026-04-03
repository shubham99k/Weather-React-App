import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Globe,
  LoaderCircle,
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  CloudSun,
  Thermometer,
  ThermometerSun,
  Droplets,
  Wind,
  Gauge,
  Eye,
  TrendingUp,
  Sunrise,
  Sunset,
} from "lucide-react";
import "./DisplayCard.css";

const getWeatherIcon = (description) => {
  if (!description) return <CloudSun size={64} strokeWidth={1.8} />;
  const d = description.toLowerCase();
  if (d.includes("clear")) return <Sun size={64} strokeWidth={1.8} />;
  if (d.includes("cloud")) return <Cloud size={64} strokeWidth={1.8} />;
  if (d.includes("rain") || d.includes("drizzle")) {
    return <CloudRain size={64} strokeWidth={1.8} />;
  }
  if (d.includes("thunder")) {
    return <CloudLightning size={64} strokeWidth={1.8} />;
  }
  if (d.includes("snow")) return <Snowflake size={64} strokeWidth={1.8} />;
  if (d.includes("mist") || d.includes("fog") || d.includes("haze"))
    return <CloudFog size={64} strokeWidth={1.8} />;
  return <CloudSun size={64} strokeWidth={1.8} />;
};

const formatLocalTime = (unixSeconds, timezoneOffsetSeconds) => {
  const date = new Date((unixSeconds + timezoneOffsetSeconds) * 1000);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const formatVisibilityKm = (meters) => {
  if (!meters && meters !== 0) return "N/A";
  return `${(meters / 1000).toFixed(1)} km`;
};

const DisplayCard = ({ info, isLoading }) => {
  if (isLoading) {
    return (
      <div className='dc'>
        <div className='dc-placeholder'>
          <span className='weather-icon'>
            <LoaderCircle size={48} strokeWidth={1.8} className='spin-icon' />
          </span>
          <Typography
            variant='body1'
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'Poppins', sans-serif",
            }}>
            Fetching the latest weather update...
          </Typography>
        </div>
      </div>
    );
  }

  if (!info || !info.city) {
    return (
      <div className='dc'>
        <div className='dc-placeholder'>
          <span className='weather-icon'>
            <Globe size={48} strokeWidth={1.8} />
          </span>
          <Typography
            variant='body1'
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Poppins', sans-serif",
            }}>
            Search for a city to see the weather
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className='dc'>
      <Card className='weather-card'>
        <div className='weather-card-header'>
          <span className='weather-emoji'>{getWeatherIcon(info.weather)}</span>
        </div>
        <CardContent>
          <Typography
            className='city-name'
            gutterBottom
            variant='h5'
            component='div'>
            {info.city}, {info.country}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Poppins', sans-serif",
              textTransform: "capitalize",
              marginBottom: "0.4rem",
              fontSize: "0.9rem",
            }}>
            {info.weather}
          </Typography>
          <Typography className='observation-time'>
            Updated {formatLocalTime(info.observedAt, info.timezone)} local time
          </Typography>
          <div className='weather-details'>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Thermometer size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {Math.round(info.temperature)}°C
              </Typography>
              <Typography className='detail-label'>Temperature</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <ThermometerSun size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {Math.round(info.feelsLike)}°C
              </Typography>
              <Typography className='detail-label'>Feels Like</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Droplets size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>{info.humidity}%</Typography>
              <Typography className='detail-label'>Humidity</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Wind size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {info.windSpeed} m/s
              </Typography>
              <Typography className='detail-label'>Wind</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Gauge size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {info.pressure} hPa
              </Typography>
              <Typography className='detail-label'>Pressure</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Eye size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {formatVisibilityKm(info.visibility)}
              </Typography>
              <Typography className='detail-label'>Visibility</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <TrendingUp size={20} strokeWidth={2} />
              </div>
              <Typography
                className='detail-value'
                sx={{ fontSize: "0.85rem !important" }}>
                {Math.round(info.tempMax)}° / {Math.round(info.tempMin)}°
              </Typography>
              <Typography className='detail-label'>High / Low</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Sunrise size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {formatLocalTime(info.sunrise, info.timezone)}
              </Typography>
              <Typography className='detail-label'>Sunrise</Typography>
            </div>
            <div className='weather-detail-item'>
              <div className='detail-icon'>
                <Sunset size={20} strokeWidth={2} />
              </div>
              <Typography className='detail-value'>
                {formatLocalTime(info.sunset, info.timezone)}
              </Typography>
              <Typography className='detail-label'>Sunset</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayCard;
