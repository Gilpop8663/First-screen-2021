const weather = document.querySelector(".js-weather");


const API_KEY ="0db106f17f347fd5d0c8aa5eb69deb43";

const COORDS = 'coords';

const CITY = "json.city.id";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`)

    .then(function(response){
      return response.json();
    })
    .then(function(json){
        const temperatre = json.main.temp;
        const place = json.name;
        const sky1 = json.sys.country;
        weather.innerText = `${temperatre}℃ @ ${place} ${sky1}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS , JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess , handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
};


function init(){
    loadCoords();
}

init();
