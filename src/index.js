const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('form');

/* eslint-disable brace-style */
async function fetchAPI() {
  const cityName = document.querySelector('.meteo > h2');
  const cityDegree = document.querySelector('.description > h1');
  const skyDescr = document.querySelector('.description > p');
  const inputVal = document.getElementById('cityInput').value;

  try {
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=061d725856afac33f9b3d4fe6746dc51`);
    const weatherData = await weatherAPI.json();
    const weatherMain = weatherData.main;
    const weatherSys = weatherData.sys;
    const weatherWeather = weatherData.weather;
    const weatherArrey = weatherWeather[0];
    console.log(weatherData);
    cityName.textContent = `${weatherData.name} - ${weatherSys.country}`;
    cityDegree.textContent = `${Math.round(weatherMain.temp - 273.15)}°C`;
    skyDescr.textContent = weatherArrey.main;
  }
  // eslint-disable-next-line no-empty
  catch (err) {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    cityDegree.textContent = 'Please, enter a valid city', err;
    cityName.textContent = '';
    skyDescr.textContent = '';
  }
}

function resetHandler(e) {
  e.preventDefault();
}

fetchAPI();

submitBtn.addEventListener('click', fetchAPI);
form.addEventListener('submit', resetHandler);
