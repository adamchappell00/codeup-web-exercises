"use strict";

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    lat: 29.423017,
    lon: -98.48527,
    exclude: "minutely,hourly",
    units: "imperial",
    appid: OPEN_WEATHER_KEY
}).done(function(data){
    console.log(data);
    var fiveDayHtml= '';
    for(var i=0 ; i < 5; i++){
        fiveDayHtml += '<div class="day"><div class="date">' + new Date(data.daily[i].dt * 1000)+ '</div>' +
            '<div class="weather-desc">' + data.daily[i].weather[0].main + '<div class="weather-subtype-desc">' +
            data.daily[i].weather[0].description + '</div></div>' +
            '<div class="temp">High: '+ data.daily[i].temp.max +'<br>Low: '+ data.daily[i].temp.min +'</div>'
        fiveDayHtml += '</div>'
    }
    $('#five-day').html(fiveDayHtml);
    console.log(new Date(data.daily[0].dt * 1000));
});