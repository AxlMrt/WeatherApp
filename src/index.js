/* eslint-disable brace-style */
async function fetchAPI() {
  try {
    const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.1192&lon=6.1768&appid=061d725856afac33f9b3d4fe6746dc51');
    const weatherData = await weather.json();
    console.log(weatherData);
  }
  // eslint-disable-next-line no-empty
  catch (err) {
    console.log('Données introuvables', err);
  }
}

fetchAPI();
