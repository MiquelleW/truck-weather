const url =
  "https://api.open-meteo.com/v1/forecast?latitude=35.22709&longitude=-80.84313&current=temperature_2m,wind_speed_10m,precipitation&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
  weatherArea.textContent = "";
  weatherArea.className = "card bg-dark text-light shadow-sm p-4 w-50 m-auto";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const icon = document.createElement("p");
  icon.className = "fs-4";
  icon.textContent = getIcon(data.current.weather_code);
  weatherArea.appendChild(icon);

  // Temp
  const temp = document.createElement("p");
  temp.className = "fs-4";
  temp.textContent =
    "Temperature: " +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m;

  weatherArea.appendChild(temp);

  // Wind Speed
  const wind = document.createElement("p");
  wind.className = "fs-4";
  wind.textContent =
    "Wind Speed: " +
    data.current.wind_speed_10m +
    " " +
    data.current_units.wind_speed_10m;

  weatherArea.appendChild(wind);

  // Precipitation
  const rain = document.createElement("p");
  rain.className = "fs-4";
  rain.textContent =
    "Precipitation: " +
    data.current.precipitation +
    " " +
    data.current_units.precipitation;

  weatherArea.appendChild(rain);

  // Time
  const time = document.createElement("p");
  time.className = "fs-4";
  time.textContent =
    "Time: " +
    new Date(data.current.time).toLocaleString() +
    " " +
    data.timezone;
  weatherArea.appendChild(time);
}

button.addEventListener("click", getWeather);

function getIcon(code) {
  if (code === 0) return "☀️ Clear";
  if (code <= 2) return "🌤️ Partly Cloudy";
  if (code === 3) return "☁️ Cloudy";
  if (code <= 48) return "🌧️ Rain";
}
