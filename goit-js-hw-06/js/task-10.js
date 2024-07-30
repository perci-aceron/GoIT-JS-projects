document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }

  createButton.addEventListener("click", () => createBoxes(input.value));
  destroyButton.addEventListener("click", destroyBoxes);
});
