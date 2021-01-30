class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = `${weather.name}  ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} C`;
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like : ${weather.main.feels_like} C`;
    this.pressure.textContent = `Pressure : ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}
