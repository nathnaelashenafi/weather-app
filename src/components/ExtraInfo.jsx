export function ExtraInfo({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div id="extraInfo">
      <div className="cols">
        <h5>Highs</h5>
        <p>{Math.round(weather.main.temp_max)}</p>
      </div>
      <div className="cols">
        <h5>Lows</h5>
        <p>{Math.round(weather.main.temp_min)}</p>
      </div>
    </div>
  );
}
