const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElements = ingredients.map((ingredient, i) => {
  const liElement = document.createElement("li");

  liElement.textContent = ingredients[i];
  liElement.classList.add("item");
  return liElement;
});

const listElement = document.querySelector("#ingredients");

listElement.append(...liElements);

console.log(listElement);
