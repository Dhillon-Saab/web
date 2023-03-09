﻿const container = document.querySelector('.containers');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error = document.querySelector('.not-found');
const input = document.querySelector('.search-box input');

search.addEventListener('click', () => {

    const apikey = '19cd842e40d8bbd44aac807970dd29fd';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(json =>  {

                console.log(json)
                
            if (json.cod == '404') {
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

        switch (json.weather[0].main) {
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

        tempertaure.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
        desc.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '605px';
    });


});