// Додавання бібліотеки Axios
import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org';
const API_KEY = '117bcd5592950f9f701a11f5ab982de0';

// Запит до OpenWeather API
export async function getWeather(city) {
  const response = await axios.get('/data/2.5/weather', {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'ua',
    },
  });
  return response.data;
}
