# Weather React App

A simple and clean weather application built with **React** and **Vite**. Search for any city and get real-time weather data including temperature, humidity, and weather conditions.

## Features

- Search weather by city name
- Displays temperature, feels like, humidity, and weather description
- Clean UI built with Material UI (MUI)
- Powered by [OpenWeatherMap API](https://openweathermap.org/api)

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool & dev server
- **Material UI (MUI)** — Component library
- **OpenWeatherMap API** — Weather data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- An [OpenWeatherMap](https://openweathermap.org/api) API key (free tier works)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shubham99k/Weather-React-App.git
   cd Weather-React-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual OpenWeatherMap API key.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

## Project Structure

```
Weather-React-App/
├── public/
├── src/
│   ├── App.jsx          # Root component
│   ├── WeatherApp.jsx   # Main weather app layout
│   ├── SearchBox.jsx    # City search input & API call
│   ├── DisplayCard.jsx  # Weather data display card
│   ├── main.jsx         # App entry point
│   └── *.css            # Component styles
├── .env                 # Environment variables (not tracked)
├── index.html
├── package.json
└── vite.config.js
```

## Environment Variables

| Variable                   | Description                 |
| -------------------------- | --------------------------- |
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key |

> **Note:** Never commit your `.env` file. It is already listed in `.gitignore`.

## License

This project is open source and available under the [MIT License](LICENSE).
