const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) =>
  console.log(
    `Category: ${element.querySelector("h2").textContent} 
     Elements: ${element.querySelectorAll("li").length}`
  )
);
