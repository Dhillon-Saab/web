setInterval(() =>{
const time = document.querySelector('#time');
let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let dayn = "AM" ;
if(hrs > 12){
    dayn = "PM";
    hrs = hrs - 12 ;
}
if(hrs < 10){
    hrs = "0" + hrs;
}
if(min < 10){
    min = "0" + min;
}
if(sec < 10){
    sec = "0" + sec;
}
time.textContent = hrs + ":" + min + ":" + sec + " " + dayn;
}
);