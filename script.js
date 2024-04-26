// API- Open weather Map

//Capturar elementos del DOM para usarlos en el script

let container = document.getElementById('container');
let search_form = document.getElementById('search_submit');
let search_input = document.getElementById('search_input');
let temperatureDegrees = document.getElementById('degreeNumber');
let weatherIcon = document.getElementById('weatherIcon');
let temperatureDescription = document.getElementById('description');
let timeZone = document.getElementById('timezone');
let date = document.getElementById('date');
let min = document.getElementById('min');
let max = document.getElementById('max');

//Declarar funciones secundarias
const displayBackgroundImage = (obj) => {
    console.log(obj.dt);
    // extraer y dar formato a la fecha
    let dateSpanish = new Date(obj.dt * 1000).toLocaleString("es-ES", {
        timeStyle: "short",
        dateStyle: "long"
    });
    console.log(dateSpanish);
    //Manipular el DOM para añadir la hora
    date.textContent = `Actualizado el: ${dateSpanish}`;//actualizaciondateSpanish;
    //extraer la hora
    const dayHour = new Date(obj.dt * 1000).getHours();
    console.log(dayHour);

    if (dayHour > 6 && dayHour < 19) {
        container.classList.remove("night");
        container.classList.add("day");
    } else {
        container.classList.remove("day");
        container.classList.add("night");
    }
};

//Capturo los datos del objeto del API y los muestro en el DOM
const displayData = (obj) => {
    temperatureDegrees.textContent = Math.floor(obj.main.temp);
    timeZone.textContent = obj.name;
    const icon = obj.weather[0].icon;
    weatherIcon.innerHTML = `<img src='icons/${icon}.png'> </img>`;
    min.textContent = Math.floor(obj.main.temp_min);
    max.textContent = Math.floor(obj.main.temp_max);
    temperatureDescription.textContent = obj.weather[0].description;
}

//Declarar getWeatherData como una función (principal)

const getWeatherData = async (city) => {

    //Llamada a la API y obtener datos
    //Fetch nos permite hacer peticiones HTTP
    const res = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/ES`, {
        headers: {
            'X-RapidAPI-Key': 'e5eda50b2bmshc43223fb83f4215p153748jsna802f1eace80',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    });
    const data = await res.json();
    //Cambiar fondo pantalla de noche o de diá
    displayBackgroundImage(data);
    //Mostrar datos en el DOM
    displayData(data);
}

search_form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(search_input.value);
})

//Al cargar página nos cargue una localización predeterminada
window.onload = () => {
    getWeatherData(search_input.value);
}



