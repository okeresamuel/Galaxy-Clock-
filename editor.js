let timeContainer = document.getElementById("time");
let theYear = document.getElementById("year");
let theDay = document.getElementById("day");
let theMonth = document.getElementById("month");
let audio = new Audio("https://www.soundjay.com/clock/clock-ticking-2.mp3");
const startTime = () => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let year = time.getFullYear();
  let day = time.getDay();
  let month = time.getMonth();
  let date = time.getDate();
  let meridian = "Am";
  if (hr > 12) {
    hr = hr - 12;
    meridian = "Pm";
  }
  if (hr === 0){
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  // days starts from 0 in js
  if (day === 0) {
    day = "sunday";
  } else if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  }
  // months starts from 0 in js
  if (month === 0) {
    month = "Jan";
  } else if (month === 1) {
    month = "Feb";
  } else if (month === 2) {
    month = "March";
  } else if (month === 3) {
    month = "April";
  } else if (month === 4) {
    month = "May";
  } else if (month === 5) {
    month = "June";
  } else if (month === 6) {
    month = "July";
  } else if (month === 7) {
    month = "Aug";
  } else if (month === 8) {
    month = "Sep";
  } else if (month === 9) {
    month = "Oct";
  } else if (month === 10) {
    month = "Nov";
  } else if (month === 11) {
    month = "Dec";
  }
  timeContainer.innerText = `${hr} : ${min} : ${sec} : ${meridian}`;
  theYear.innerText = year;
  theDay.innerHTML = day;
  theMonth.innerHTML = `${date}, ${month}`;
  audio.play();
};
setInterval(startTime, 1000);
