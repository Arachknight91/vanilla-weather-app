function formatDate(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10){
    minutes = `0${minutes}`;
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[date.getDay()];
  return `Last updated ${day} ${hours}:${minutes}`;
}



function weatherTemp(response){
  console.log(response.data)
  let temperature = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let windSpeed = document.querySelector("#wind");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperature.innerHTML=Math.round(response.data.main.temp);
  cityElement.innerHtml = response.data.name;
  windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} k`;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}`;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(){
  let apiKey="ae4795bee3633c2c1a492c868000b9fd";
  let city = "New York";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherTemp);

}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}


search("New York")

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit )