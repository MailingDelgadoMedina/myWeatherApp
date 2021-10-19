
let weather ={
    "apiKey": "",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&units=imperial&appid="
            + this.apiKey
         )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
displayWeather: function(data){
const {name} = data;
const {icon, description}= data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
console.log(`this is windspeed ${speed}`);
console.log(name, icon, description, temp, humidity, speed);
let displayTemp= Math.round(data.main.temp);
let mph = Math.round(data.wind.speed  * .62)
document.querySelector("#city").innerText = `Weather in ${name}`;
document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
document.querySelector("#description").innerText = description;
document.querySelector("#temp").innerText = `${displayTemp}˚ F`;
document.querySelector("#humidity").innerText = `Humidity ${humidity}%`;
document.querySelector("#wind").innerText = `Wind speed: ${mph} mph`;
document.querySelector(".city").classList.remove("loading");
document.querySelector(".weather").classList.remove("loading");
 document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
},
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},

};

document.querySelector(".search-btn").addEventListener("click", function () {
weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  }); 

 ;



  weather.fetchWeather("davie");
