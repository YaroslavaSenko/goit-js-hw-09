const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let intervalId  = null;

startBtn.addEventListener("click", startBtnChange );

function startBtnChange () {
    intervalId = setInterval(() => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
}, 1000);

  startBtn.setAttribute('disabled', true)
  stopBtn.removeAttribute('disabled')
}

stopBtn.addEventListener("click", stopBtnChange );

function stopBtnChange () {
    clearInterval(intervalId), 4
    startBtn.removeAttribute('disabled')
    stopBtn.setAttribute('disabled',true)};

  



