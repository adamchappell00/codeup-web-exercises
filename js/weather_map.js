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
    // Using a for loop to iterate through the first 5 days in the array after using a single call, which includes the next 8 days
    for(var i=0 ; i < 5; i++){
        // Define the Current UTC Date and Get the Day, Date, Month
        var date = new Date(data.daily[i].dt * 1000);
        var currentDay = date.getDay();
        var currentDate = date.getDate();
        var currentMonth = date.getMonth();
        // Initialize the parent div for each "Day", with additional divs inside for each piece of weather data
        fiveDayHtml += '<div class="day">'+
            // Date information passed to functions to convert them from numeric values to names of days and months
            '<div class="date">' + convertDay(currentDay) + '<br>' + currentDate + " " + convertMonth(currentMonth) + '</div>' +
            // Temperature: High and Low
            '<div class="temp">High: '+ data.daily[i].temp.max.toFixed() +'   /   Low: '+ data.daily[i].temp.min.toFixed() +'</div>' +
            // Main Weather: type and description , currently set to [0] which describes the beginning of the day
            '<div class="weather-desc">' + data.daily[i].weather[0].main + '</div>' +
            '<img class="weather-icon" src="http://openweathermap.org/img/w/'+ data.daily[i].weather[0].icon +'.png">' +
            //'<div class="weather-subtype-desc">' + data.daily[i].weather[0].description + '</div>' +
            // Conditions: Precipitation, Humidity
            '<div class="conditions"> Precipitation Chance: '+ (data.daily[i].pop * 100)+ '%' + '</div>' +
            '<div class="conditions"> Humidity: '+ data.daily[i].humidity + '%</div>' +
            // Closing the div for each day
            '</div>'
    }
    // Closing out the parent div for all Five Days
    fiveDayHtml += '</div>'
    // Setting the parent container to display the string built for all 5 days
    $('#five-day').html(fiveDayHtml);
    console.log(new Date(data.daily[0].dt * 1000));
});

mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.48527, 29.423017], // starting position [lng, lat] 31.766961711918697, -106.36485834041702
    zoom: 10 // starting zoom
});

// convertDay() and convertMonth() will return the Day of the Week and Month as a string, respectively
function convertDay(num){
    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
};
function convertMonth(num){
    switch(num){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}