const inputSymbolsElement = document.querySelector("#validation-input");

inputSymbolsElement.addEventListener("blur", onInputSymbolsValidation);
inputSymbolsElement.addEventListener("focus", onFocusInput);

let validationClass = "";

function onInputSymbolsValidation(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputSymbolsElement.getAttribute("data-length"))
  ) {
    validationClass = "valid";
  } else {
    validationClass = "invalid";
  }
  inputSymbolsElement.classList.add(validationClass);
}

function onFocusInput(event) {
  if (inputSymbolsElement.classList.contains(validationClass)) {
    inputSymbolsElement.classList.remove(validationClass);
  }
}
