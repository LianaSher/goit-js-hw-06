const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (event.currentTarget.value === "") {
    refs.nameOutput.textContent = "Anonimus";
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
}
