document.addEventListener("DOMContentLoaded", () => {
  const ingredientsList = document.getElementById("ingredients");

  const ingredientsArray = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
  ];

  ingredientsArray.forEach((ingredient) => {
    const listItem = document.createElement("li");

    listItem.textContent = ingredient;
    listItem.classList.add("item");

    ingredientsList.appendChild(listItem);
  });
});
