const container = document.querySelector('.containers');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error = document.querySelector('.not-found');
const input = document.querySelector('.search-box input');

let we = {
    apikey : '19cd842e40d8bbd44aac807970dd29fd',

    fetchwe: function (city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey)
            .then(Response => Response.json())
            .then((data) => this.diswe(data));

    },
    diswe: function (data) {


        if (data.cod == '404') {
            container.style.height = '425px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error.style.display = 'block';
            error.classList.add('fadeIn');
            return;
        }

        error.style.display = 'none';
        error.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const tempertaure = document.querySelector('.weather-box .temperature');
        const desc = document.querySelector('.weather-box .dep');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (data.weather[0].main) {
            case 'Clear':
                image.src = 'img/clear.png';
                break;

            case 'Rain':
                image.src = 'img/rain.png';
                break;

            case 'Mist':
                image.src = 'img/mist.png';
                break;

            case 'Snow':
                image.src = 'img/snow.png';
                break;

            case 'Clouds':
                image.src = 'img/cloud.png';
                break;

            case 'Haze':
                image.src = 'img/haze.png';
                break;

            default:
                image.src = '';

        }

        tempertaure.innerHTML = `${parseInt(data.main.temp)}<span>ºC</span>`;
        desc.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '605px';

    },
    comand: function(){
        this.fetchwe(document.querySelector(".bar").value);
    }

}

search.addEventListener('click', function() {
    we.comand();    
})

document.querySelector(".bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {

        we.comand(); 
    }
  })