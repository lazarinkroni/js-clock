// Selection the class "second-hand" in the html div
const secondHand = document.querySelector(".second-hand");
// Selection the class "min-hand" in the html div
const minsHand = document.querySelector(".min-hand");
// Selection the class "hour-hand" in the html div
const hourHand = document.querySelector(".hour-hand");

// I am going to create a function that runs every second
function setDate() {
  const now = new Date();
  // Running every Second
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // Running every Minute
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  // Running every Hour
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
