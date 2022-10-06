var start = document.getElementById("start");

var stop = document.getElementById("stop");

var reset = document.getElementById("reset");

var timer = document.getElementById("timer");

var timeInSec = 0;

start.addEventListener("click", start_time);
stop.addEventListener("click", stop_time);
reset.addEventListener("click", reset_time);

var timer_interval;

function start_time() {
  if (timer_interval) {
    clearInterval(timer_interval);
  }
  timer_interval = setInterval(function () {
    timeInSec += 1;

    convertSecondsToTime();
  }, 10);

  timer.classList.add("shadow");
}

function convertSecondsToTime() {
  given_seconds = timeInSec;

  dateObj = new Date(given_seconds * 10);
  minutes = dateObj.getUTCMinutes();
  seconds = dateObj.getSeconds();
  miliSeconds = dateObj.getMilliseconds();

  timeString =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    (miliSeconds/10).toString().padStart(2, "0");

  timer.textContent = timeString;
}

function stop_time() {
  clearInterval(timer_interval);
  timer.classList.remove("shadow");
}

function reset_time() {
  clearInterval(timer_interval);
  timer.classList.remove("shadow");
  timeInSec = 0;
  timer.textContent = "00:00:00";
}
