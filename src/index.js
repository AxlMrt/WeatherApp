/* eslint-disable brace-style */
async function fetchAPI() {
  const cityName = document.querySelector('.meteo > h3');
  const cityDegree = document.querySelector('.description > h2');
  const skyDescr = document.querySelector('.description > p');
  try {
    const weatherAPI = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.1192&lon=6.1768&appid=061d725856afac33f9b3d4fe6746dc51');
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
    console.log('Données introuvables', err);
  }
}

fetchAPI();
