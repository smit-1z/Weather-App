//Init Storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

//Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);

  //Get & display Weather
  getWeather();
  //Close Weather
  $('#locModal').modal('hide');

  storage.setLocationData(city);
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
