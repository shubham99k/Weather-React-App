# SkyCast Weather Studio

A modern weather dashboard built with React and Vite. Search any city and view a richer weather snapshot with planning insights, detailed metrics, and a polished responsive UI.

## Features

- City weather search using OpenWeather API
- Quick city shortcuts for faster lookup
- Loading state and API error handling
- Detailed weather metrics:
  - Temperature and feels-like
  - Humidity, wind speed, pressure
  - Visibility, min/max temperature
  - Sunrise and sunset (local city time)
- Insight panel with comfort and commute guidance
- Lucide React weather icons (no emoji UI)
- Minimal footer with attribution and profile links

## Tech Stack

- React 19
- Vite 7
- Material UI (MUI)
- Lucide React
- OpenWeather API

## Getting Started

### Prerequisites

- Node.js 18+
- OpenWeather API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/shubham99k/Weather-React-App.git
cd Weather-React-App
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the project root

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Run the development server

```bash
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Production files are generated in `dist/`.

## Project Structure

```text
Weather-React-App/
├── public/
│   └── weather-icon.svg
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── WeatherApp.css
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── DisplayCard.jsx
│   ├── DisplayCard.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Environment Variable

| Variable                   | Description         |
| -------------------------- | ------------------- |
| `VITE_OPENWEATHER_API_KEY` | OpenWeather API key |

## Links

- GitHub: https://github.com/shubham99k/Weather-React-App.git
- Portfolio: https://portfolio-azure-eta-61.vercel.app/
