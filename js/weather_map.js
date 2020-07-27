
<!----------------------Updating Weather Cards----------------------------->

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: weatherMapKey,
    lon: -98.49,
    lat: 29.419,
    // q:     "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);

    /*------------------------------------For loop to update each card------------------------------------------*/

    for (let i =0; i < 5; i++) {
        console.log(data.daily[i]);
        /*Card Updates plus the number string + i*/
        $("#weather-date" + i).html(new Date(data.daily[i].dt * 1000).toDateString());
        $("#high-low" + i).html("max temp: " + data.daily[i].temp.max + "° / min: " + data.daily[i].temp.min + "°");
        $("#feelsLike" + i).html("Feels like: " + data.daily[i].feels_like.day + "°");
        $("#weather-humidity" + i).html("Humidity: " + data.daily[i].humidity + "%");
        $("#weather-condition" + i).html(data.daily[i].weather[0].description);
    }



    //search box functionality
    /*    function getData (url, cityName, appId, units) {
            let request = $.ajax({
                url: url,
                dataType: "jsonp",
                data: {q: cityName, appId: appId, units: units},
                jsonpCallback: "fetchData",
                type: "GET"
            }).fail(function (error) {
                console.error(error)
                alert("Some Data has been misplaced...")
            })
        }

        function fetchData (forecast) {
            console.log(forecast);
            let html = " ",
                cityName = forecast.city.name,
                country = forecast.city.country


            html += "<h3> Weather Forecast for " + cityName + ", " + country + "</h3>"

            forecast.list.forEach(function (forecastEntry, index, list) {
                html += "<p>" + forecastEntry.dt_txt + ": " + forecastEntry.main.temp + "</p>"
            })
        }*/

    //end of searches
});


/*--------------Map Box Functionality------------------*/

mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 10,
    center: [-98.4936,29.4241]
});





// let city = new mapboxgl.Marker()
//     .setLngLat([lon, lat])
//     .addTo(map);

// $("input").keypress(enter, function () {
//     if (input == data.timezone)
// })

