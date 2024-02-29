export function markupWeather(params) {
  let description = params.weather[0].description;
  //   let iconWeather = params.weather[0].icon;
  let temperature = Math.round(params.main.temp);
  let feelsLikeTemperature = Math.round(params.main.feels_like);
  let windSpeed = Math.round((params.wind.speed * 1000) / 3600);
  let name = params.name;
  let humidity = params.main.humidity;

  return `<div>
              <img src="src/img/clouds.png" alt="weather" class="weather" />
              <p class="description">${description}</p>
            </div>
            <div class="temperature">
              <h2>${temperature}°c</h2>
              <div class="feels-like">
                <p class="feels-like-value">${feelsLikeTemperature}°c</p>
                <p>Відчувається як</p>
              </div>
            </div>
            <h1>${name}</h1>
            <div>
              <ul class="params-weather">
                <li class="params-weather-item">
                  <img src="./img/humidity.png" alt="humidity" />
                  <div class="params-weather-value">
                    <p class="humidity">${humidity}%</p>
                    <p>Вологість</p>
                  </div>
                </li>
                <li class="params-weather-item">
                  <img src="./img/wind.png" alt="wind" />
                  <div class="params-weather-value">
                    <p class="wind">${windSpeed} m/s</p>
                    <p>Швидкість вітру</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>`;
}
