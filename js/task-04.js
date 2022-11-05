const refs = {
  counterEl: document.querySelector("#value"),
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener("click", onBtnDecrementClick);
refs.btnIncrement.addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick(event) {
  counterValue -= 1;
  refs.counterEl.textContent = counterValue;
}

function onBtnIncrementClick(event) {
  counterValue += 1;
  refs.counterEl.textContent = counterValue;
}
