//1
let newWindow = window.open("", "", "width=410,height=410");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(function () {
  newWindow.close();
}, 6000);


//2
let time = document.createElement('div');

document.body.append(time);
function updateClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  time.textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(updateClock, 1000);