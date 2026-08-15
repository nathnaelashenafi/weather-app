export function WeatherInfo({ weather }) {
  if (!weather) {
    return (
      <div id="Info">
        <p id="date">Search for a city</p>
        <h3 id="city">Location</h3>
      </div>
    );
  }

  const dateObj = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return (
    <>
      <div id="Info">
        <p id="date">
          {month} {day}, {year}
        </p>

        <h3 id="city">{weather.name}</h3>
      </div>

      <div id="tempImg">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      </div>

      <div id="description">{weather.weather[0].main}</div>
    </>
  );
}
