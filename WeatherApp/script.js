const apiKey = "96532fd791e0063b932fe73840417290";


const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(url + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = data.main.temp + "° C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

}

console.log(checkWeather());