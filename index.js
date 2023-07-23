const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const newYears = "1 Jan 2024";
function countDown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML=formatTime(days);
  hoursEl.innerHTML=formatTime(hours);
  minsEl.innerHTML=formatTime(minutes);
  secsEl.innerHTML=formatTime(seconds);

}

function formatTime(time) {
    return time< 10 ? "0"+time : time
}



countDown();
setInterval(countDown, 1000);
