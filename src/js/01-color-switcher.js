function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

console.log();

const changeColor = event => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor(event);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
};

const stopChangeColor = event => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};
refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);
