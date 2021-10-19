

"use strict"

/*This is the call 
 */


const url = "https://api.openweathermap.org/data/2.5/weather?q=Davie,fl,840&APPID=";

//This is the Ajax call

$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name);

        let f= Math.round(result.main.temp * (9/5) - 459.67);
        let displayTemp= `${f}&#176;F `;
        $("#temperature").html(displayTemp);


        let windSp = Math.round(result.wind.speed / .44704);
        let windSpeed = windSp.toString();
        $("#windspeed").text(windSpeed);

        let humid = result.main.humidity;
        let humidity = `${humid}%`;
    $("#humidity").text(humidity);
    


    let skyIcon = result.weather[0].icon;
    let skyDescription = result.weather[0].description;
       $("#sky").text(`${skyIcon} ${skyDescription}`);//this one is taking an item from an array


    }
});


