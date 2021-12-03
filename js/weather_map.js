"use strict";

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    lat: 29.423017,
    lon: -98.48527,
    exclude: "minutely,hourly",
    units: "imperial",
    appid: OPEN_WEATHER_KEY
}).done(function(data){
    console.log(data);
    console.log(new Date(data.daily[0].dt * 1000));
});