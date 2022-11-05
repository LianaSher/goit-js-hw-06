const refs = {
  inputRange: document.querySelector("#font-size-control"),
  textForAnimation: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", onInputRangeChange);

function onInputRangeChange(event) {
  let value = Number(event.currentTarget.value);
  refs.textForAnimation.style.fontSize = `${value}px`;
}
