function formateDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function displayClimate(response) {
  console.log(response.data);
  let temperatureEvent = document.querySelector("#temperature");
  let cityNameEvent = document.querySelector("#cityName");
  let humidityEvent = document.querySelector("#humidity");
  let windEvent = document.querySelector("#wind");
  let descriptionEvent = document.querySelector("#description");
  let dateElement = document.querySelector("#date");

  const { city, temperature, condition, wind, time } = response.data;

  temperatureEvent.innerHTML = Math.round(temperature.current);
  cityNameEvent.innerHTML = city;
  humidityEvent.innerHTML = temperature.humidity;
  windEvent.innerHTML = Math.round(wind.speed);
  descriptionEvent.innerHTML = condition.description;
  dateElement.innerHTML = formateDate(time * 1000);
}

let apiKey = "453efefad2a2c05ta857fb9cb92548o9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=helsingborg&key=${apiKey}`;
axios.get(apiUrl).then(displayClimate);
