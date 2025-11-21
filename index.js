// weather app

const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "33f796d95e38b689849850c8ae2f5e65";

weatherform.addEventListener("submit", async event => {
    
    event.preventDefault();

    const city = cityinput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
            
        }

    }
    else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);

    //console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

          return await response.json();

    
}
function displayWeatherInfo(data){
   const {name: city, 
    main: {temp, humidity}, 
   weather: [{description, id}]} = data;

   card.textContent = "";
   card.style.display = "flex";

   const citydisplay = document.createElement("h1");
   const tempdisplay = document.createElement("p");
   const humidisplay = document.createElement("p");
   const decdisplay = document.createElement("p");
   const weatheremoji = document.createElement("p");

   citydisplay.textContent = city;
   tempdisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
   humidisplay.textContent = `Humidity: ${humidity}%`;
   decdisplay.textContent = description;
   weatheremoji.textContent = getWeatheremoji(id);

   citydisplay.classList.add("citydisplay");
   tempdisplay.classList.add("tempdisplay");
   humidisplay.classList.add("humidisplay");
   decdisplay.classList.add("descdisplay");
   weatheremoji.classList.add("weatheremoji");

   card.appendChild(citydisplay);
   card.appendChild(tempdisplay);
   card.appendChild(humidisplay);
   card.appendChild(decdisplay);
   card.appendChild(weatheremoji);

}

function getWeatheremoji(weatherid){
    switch(true){
        case(weatherid >= 200 && weatherid < 300):
              return "⛈";
        case(weatherid >= 300 && weatherid < 400):
              return "🌧";
        case(weatherid >= 500 && weatherid < 600):
              return "🌧";
        case(weatherid >= 600 && weatherid < 700):
              return "❄";
        case(weatherid >= 700 && weatherid < 800):
              return "🌫";
        case(weatherid === 800):
              return "🌞";
        case(weatherid >= 801 && weatherid < 810):
              return "☁";
        default:
            return "❓";
    }

}
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}