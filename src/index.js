const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('form');
const loader = document.querySelector('.loading');
/* eslint-disable brace-style */

function displayLoading() {
  loader.classList.add('display');
  setTimeout(() => {
    loader.classList.remove('display');
  }, 5000);
}

function hideLoading() {
  loader.classList.remove('display');
}

async function fetchAPI() {
  const cityName = document.querySelector('.city');
  const cityDegree = document.querySelector('.degree');
  const skyDescr = document.querySelector('.sky');
  const inputVal = document.getElementById('cityInput').value;
  try {
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=061d725856afac33f9b3d4fe6746dc51`, { mode: 'cors' });
    const weatherData = await weatherAPI.json();
    const weatherMain = weatherData.main;
    const weatherSys = weatherData.sys;
    const weatherWeather = weatherData.weather;
    const weatherArrey = weatherWeather[0];
    // eslint-disable-next-line no-console
    console.log(weatherData);
    cityName.textContent = `${weatherData.name} - ${weatherSys.country}`;
    cityDegree.textContent = `${Math.round(weatherMain.temp - 273.15)}°C`;
    skyDescr.textContent = weatherArrey.main;
  }
  // eslint-disable-next-line no-empty
  catch (err) {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    cityDegree.textContent = 'Search for an existing city', err;
    cityName.textContent = '';
    skyDescr.textContent = '';
  }
  hideLoading();
}

function resetHandler(e) {
  e.preventDefault();
}

fetchAPI();

submitBtn.addEventListener('click', () => {
  displayLoading();
  fetchAPI();
});
form.addEventListener('submit', resetHandler);
