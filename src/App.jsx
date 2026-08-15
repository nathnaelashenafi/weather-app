import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { Temperature } from "./components/Temprature";
import { ExtraInfo } from "./components/ExtraInfo";
import { getWeather } from "./services/weatherApi";
import "./App.css";

export default function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const weatherApi = async () => {
    if (!cityName.trim()) {
      setError("Please enter a city");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(cityName);

      setWeather(data);
    } catch {
      setWeather(null);
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="app">
      <SearchBar
        cityName={cityName}
        setCityName={setCityName}
        onSearch={weatherApi}
      />

      {loading && <p className="message">Loading...</p>}

      {error && <p className="message error">{error}</p>}

      {!loading && !error && (
        <>
          <WeatherInfo weather={weather} />
          <Temperature weather={weather} />
          <ExtraInfo weather={weather} />
        </>
      )}
    </div>
  );
}
