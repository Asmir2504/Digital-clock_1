const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const am_pmEl = document.getElementById("ampm");

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let am_pm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    amam_pmpm = "PM";
  }

  hours = hours< 10 ? "0" + hours : hours;
  minutes = minutes< 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
  am_pmEl.innerText = am_pm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();