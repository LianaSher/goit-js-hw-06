function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector("input[type = 'number']"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  firstDivElement: document.querySelector("#boxes"),
};

refs.inputNumber.addEventListener("input", onInputNumber);
refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);

let amount = 0;

function onInputNumber(event) {
  amount = refs.inputNumber.value;
}

function onBtnCreateClick(event) {
  createBoxes(amount);
}
let n = 20;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    n += 10;
    let oneDiv = document.createElement("div");
    refs.firstDivElement.append(oneDiv);
    oneDiv.setAttribute("height", n);
    oneDiv.setAttribute("width", n);
    oneDiv.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes(event) {
  refs.firstDivElement.innerHTML = "";
}
