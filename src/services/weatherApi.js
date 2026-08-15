import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

console.log("Environment API Key loaded:", API_KEY);
console.log("API Key is defined?", !!API_KEY);

export const getWeather = async (city) => {
  console.log("Fetching weather for:", city);
  console.log("Using API Key:", API_KEY);

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      },
    );
    console.log("Success! Weather data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Full Error Object:", error);
    console.error("Error Status:", error.response?.status);
    console.error("Error Message:", error.response?.data);
    throw error;
  }
};
