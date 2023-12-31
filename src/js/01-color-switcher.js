const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

let timerId = null;

onPageStart();

function onPageStart() {
  btnStop.disabled = true;
}

function onBtnStartClick() {
  body.style.backgroundColor = getRandomHexColor();
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}