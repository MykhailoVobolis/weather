import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    iziToast.warning({
      message: `Пошуковий запит не може бути порожнім`,
      transitionIn: 'bounceInDown',
      theme: 'dark',
      messageColor: '#ffffff',
      messageSize: 16,
      messageLineHeight: 24,
      color: '#FF8C00',
      progressBar: false,
      position: 'topRight',
      maxWidth: 410,
    });
    return;
  }

  try {
    const data = await getWeather(searchQuery);
    const markup = markupWeather(data);
    markupContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    if (error.response.data.message) {
      iziToast.error({
        message: `На жаль, немає міст, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз!`,
        transitionIn: 'bounceInDown',
        theme: 'dark',
        messageColor: '#ffffff',
        messageSize: 16,
        messageLineHeight: 24,
        color: '#ef4040',
        progressBar: false,
        position: 'topRight',
        maxWidth: 410,
      });
      return;
    }
    iziToast.error({
      message: `${error}`,
      transitionIn: 'bounceInDown',
      theme: 'dark',
      messageColor: '#ffffff',
      messageSize: 16,
      messageLineHeight: 24,
      color: '#ef4040',
      progressBar: false,
      position: 'topRight',
      maxWidth: 410,
    });
  } finally {
    event.target.reset();
  }
}
