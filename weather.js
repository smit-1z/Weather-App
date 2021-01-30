class Weather {
  constructor(city) {
    this.apiKey = 'd3ae7f363b8af002d371795b76d00d2b';
    this.city = city;
  }

  // Fetch Weather from Api

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //Change Weather Location

  changeLocation(city) {
    this.city = city;
  }
}
