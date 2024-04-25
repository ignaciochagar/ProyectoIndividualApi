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

const displayBackgroundImage = (data) => {

}

const displayData = (data) => {

}

//Declarar getWeatherData como una función (principal)

const getWeatherData = async (city) => {

    //Llamada a la API y obtener datos
    //Fetch nos permite hacer peticiones HTTP
    const res = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/ES`,{
        headers: {
            'X-RapidAPI-Key': '3d561cfc05msh604560a7aa6e29dp1283e8jsnb38d7646aebe',
		    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    }


);
    const data = await res.json();
    console.log(data);
    //Cambiar fondo pantalla de noche o de diá
    // displayBackgroundImage(data);
    //Mostrar datos en el DOM
    // displayData(data);

}


//Al cargar página nos cargue una localización predeterminada

window.onload = () => {
    getWeatherData('vitoria-gasteiz');

}



