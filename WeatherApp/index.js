let weather = {
  apikey : '19cd842e40d8bbd44aac807970dd29fd',
fetchWeather: function(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" 
     + city + 
    "&units=metric&appid="
     + this.apikey
     )
.then((Response) => Response.json())
.then((data) => this.displayWeather(data));
 },
displayWeather: function(data){
  console.log(data)
 const { name } = data;
 const { icon, description } = data.weather[0];
 const { lon, lat } = data.coord;
 const { temp, humidity } = data.main;
 const { speed } = data.wind;
 document.querySelector(".city").innerText = "Weather in " + name; 
 document.querySelector(".icons").src = 
 "https://openweathermap.org/img/wn/" + icon + "@2x.png" ; 
 document.querySelector(".desc").innerText = description;
 document.querySelector(".temp").innerText = temp + "ºC";
 document.querySelector(".lat").innerText = lat + "º";
 document.querySelector(".long").innerText = lon + "º";
 document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
 document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
 document.querySelector(".weather").classList.remove("loading");
 document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600×900/?" + name + "')";
},
search: function () {
 this.fetchWeather(document.querySelector(".bar").value);
}

};

document
  .querySelector(".find button")
  .addEventListener("click", function() {
    weather.search();
  });

  document.querySelector(".bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {

        weather.search(); 
    }
  })

  weather.fetchWeather("Dubai");

  const Locat = () => {

      const suc = (pos) => {

        const longitude = pos.coords.longitude;
        const latitude = pos.coords.latitude;

        const apiurl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(apiurl).then(res => res.json()).then(locationdata => {
          weather.fetchWeather(locationdata.city);
        })


      }

      const eror = null;
      navigator.geolocation.getCurrentPosition(suc , eror)


  }

  document.querySelector('.getl').addEventListener('click', Locat);
