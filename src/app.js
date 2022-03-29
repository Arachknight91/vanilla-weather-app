function weatherTemp(response){
  console.log(response.data)
  let temperature = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let windSpeed = document.querySelector("#wind");
  let description = document.querySelector("#description");
  temperature.innerHTML=Math.round(response.data.main.temp);
  city.innerHtml = response.data.main.name;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  description.innerHTML = response.data.weather[0].description;
}





let apiKey="ae4795bee3633c2c1a492c868000b9fd";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(weatherTemp);