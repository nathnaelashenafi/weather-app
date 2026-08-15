export function Temperature({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div id="temp">
      <h2>{Math.round(weather.main.temp)} °C</h2>
    </div>
  );
}
