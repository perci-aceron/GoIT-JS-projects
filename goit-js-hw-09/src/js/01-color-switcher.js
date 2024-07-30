function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function start() {
  if (intervalId) {
    return;
  }

  document.querySelector('[data-start]').disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  document.querySelector('[data-start]').click();
}

function stop() {
  clearInterval(intervalId);
  document.querySelector('[data-start]').disabled = false;
  intervalId = null;
}

document.querySelector('[data-start]').addEventListener('click', start);
document.querySelector('[data-stop]').addEventListener('click', stop);