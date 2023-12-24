function clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let hour = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  document.getElementById("hours-circle").style.strokeDashoffset =
    156 - (156 * h) / 24;
  document.getElementById("minutes-circle").style.strokeDashoffset =
    156 - (156 * m) / 60;
  document.getElementById("seconds-circle").style.strokeDashoffset =
    156 - (156 * s) / 60;
  hour.style.fontSize = "1.5rem";
  minutes.style.fontSize = "1.5rem";
  seconds.style.fontSize = "1.5rem";
  ampm.style.fontSize = "1.5rem";
  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = h < 12 ? "AM" : "PM";

  let hours_dot = document.querySelector(".hours_dot");
  let minutes_dot = document.querySelector(".minutes_dot");
  let seconds_dot = document.querySelector(".seconds_dot");

  hours_dot.style.transform = `rotate(${h * 15}deg)`;
  minutes_dot.style.transform = `rotate(${m * 6}deg)`;
  seconds_dot.style.transform = `rotate(${s * 6}deg)`;
}
setInterval(() => {
  clock(), date();
}, 1000);

function date() {
  let currentDate = new Date();
  let dayOfWeek = currentDate.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let colorDays = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let dayName = days[dayOfWeek];
  let color = colorDays[dayOfWeek];
  let d = currentDate.getDate();

  let m = currentDate.getMonth();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = monthNames[m];

  let y = currentDate.getFullYear();
  let dayOWeek = document.getElementById("dayofWeek");
  let day = document.getElementById("date");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  dayOWeek.style.color = color;
  dayOWeek.innerHTML = dayName;
  day.innerHTML = d;
  month.innerHTML = monthName;
  year.innerHTML = y;
}
