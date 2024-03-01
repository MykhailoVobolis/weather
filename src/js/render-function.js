export function markupWeather(params) {
  const description = params.weather[0].description;
  const iconWeather = params.weather[0].icon;
  const temperature = Math.round(params.main.temp);
  const feelsLikeTemperature = Math.round(params.main.feels_like);
  const windSpeed = Math.round((params.wind.speed * 1000) / 3600);
  const name = params.name;
  const humidity = params.main.humidity;
  // markup
  return `<div>
              <img src="https://openweathermap.org/img/wn/${iconWeather}@2x.png" alt="weather" class="weather" />
              <p class="description">${description}</p>
            </div>
            <div class="temperature">
              <h2>${temperature}°с</h2>
              <div class="feels-like">
                <p class="feels-like-value">${feelsLikeTemperature}°с</p>
                <p>Відчувається як</p>
              </div>
            </div>
            <h1>${name}</h1>
            <div>
              <ul class="params-weather">
                <li class="params-weather-item">
                  <img src="/img/humidity.png" alt="humidity" />
                  <div class="params-weather-value">
                    <p class="humidity">${humidity}%</p>
                    <p>Вологість</p>
                  </div>
                </li>
                <li class="params-weather-item">
                  <img src="/img/wind.png" alt="wind" />
                  <div class="params-weather-value">
                    <p class="wind">${windSpeed} м/с</p>
                    <p>Швидкість вітру</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>`;
}
