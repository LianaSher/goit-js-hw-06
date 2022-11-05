const entryForm = document.querySelector("form.login-form");

entryForm.addEventListener("submit", onFormSubmit);

let user = {};

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  user.email = formElements.email.value;
  user.password = formElements.password.value;

  if (user.email === "" || user.password === "") {
    alert("Please, fill all the fields!");
  } else {
    console.log(user);
  }
  event.currentTarget.reset();
}
