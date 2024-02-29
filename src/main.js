import { getWeather } from './js/openweather-api';
import { markupWeather } from './js/render-function';

const fetchWeatherForm = document.querySelector('form');
const markupContainer = document.querySelector('.marcup-container');

let searchQuery = null;

fetchWeatherForm.addEventListener('submit', fetchWeather);

async function fetchWeather(event) {
  event.preventDefault();
  markupContainer.innerHTML = '';

  searchQuery = event.target.elements.search.value.trim();

  if (searchQuery === '') {
    console.log('The search query cannot be empty');
    return;
  }

  try {
    const data = await getWeather(searchQuery);

    if (!data.name.length) {
      console.log(
        'Sorry, there are no city matching your search query. Please try again!'
      );
      return;
    }
    const markup = markupWeather(data);
    markupContainer.insertAdjacentHTML('beforeend', markup);

    // console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.main.feels_like);
    // console.log(data.weather[0].description);
    // console.log(data.weather[0].icon);
    // console.log(Math.round((data.wind.speed * 1000) / 3600));
    // console.log(data.main.humidity);
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
  }
}
