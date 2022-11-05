function displayClimate(response) {
  console.log(response.data);
  let temperatureEvent = document.querySelector("#temperature");
  let cityNameEvent = document.querySelector("#cityName");
  let humidityEvent = document.querySelector("#humidity");
  let windEvent = document.querySelector("#wind");
  let descriptionEvent = document.querySelector("#description");

  temperatureEvent.innerHTML = Math.round(response.data.temperature.current);
  cityNameEvent.innerHTML = response.data.city;
  humidityEvent.innerHTML = response.data.temperature.humidity;
  windEvent.innerHTML = Math.round(response.data.wind.speed);
  descriptionEvent.innerHTML = response.data.condition.description;
}

let apiKey = "453efefad2a2c05ta857fb9cb92548o9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=helsingborg&key=${apiKey}`;
axios.get(apiUrl).then(displayClimate);
