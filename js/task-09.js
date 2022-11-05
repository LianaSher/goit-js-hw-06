function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  screen: document.querySelector("body"),
  btn: document.querySelector("button.change-color"),
  text: document.querySelector("span.color"),
};

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  let numberOfColor = getRandomHexColor();
  refs.screen.style.backgroundColor = numberOfColor;
  refs.text.textContent = numberOfColor;
}
