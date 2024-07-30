const categoryList = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${categoryList.length}\n`);

categoryList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}\n`);
});
