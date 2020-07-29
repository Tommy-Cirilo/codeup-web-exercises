
let inputlong = 75;
let inputlat = 75;



mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3,
    center: [inputlong,inputlat]
});


/*-------------geocoder search bar ---------------*/

let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: "Want to check the weather somewhere?",
    // marker: false,
    mapboxgl: mapboxgl
});

/*------------------------------------For loop to update each card------------------------------------------*/
// using the data from the other function parameter

let updatecard = function(data){
    for (let i =0; i < 5; i++) {
        console.log(data.daily[i]);
        /*Card Updates plus the number string + i*/
        $("#weather-date" + i).html(new Date(data.daily[i].dt * 1000).toDateString());
        $("#high-low" + i).html("max temp: " + data.daily[i].temp.max + "° / min: " + data.daily[i].temp.min + "°");
        $("#feelsLike" + i).html("Feels like: " + data.daily[i].feels_like.day + "°");
        $("#weather-humidity" + i).html("Humidity: " + data.daily[i].humidity + "%");
        $("#weather-condition" + i).html(data.daily[i].weather[0].description);



    }
}



<!----------------------Updating Weather Cards----------------------------->
//grabbing data as a function parameter

let forecast = function (lon, lat){

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: weatherMapKey,
        lon: lon,
        lat: lat,
        // q:     "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data);

        //updates cards
    updatecard(data);

    });
}

forecast(inputlong, inputlat);
/*--------------Map Box Functionality------------------*/

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Adds navigation controls
map.addControl(new mapboxgl.NavigationControl());



// converting input from geocoder

geocoder.on("result", function (location) {
    console.log(location);
    inputlong= location.result.center[0];
    inputlat=location.result.center[1];
    forecast(inputlong,inputlat);
})