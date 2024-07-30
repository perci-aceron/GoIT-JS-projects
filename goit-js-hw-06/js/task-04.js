document.addEventListener("DOMContentLoaded", () => {
  let counterValue = 0;

  const counter = document.getElementById("counter");
  const valueSpan = document.getElementById("value");

  counter.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (action === "increment") {
      counterValue += 1;
    } else if (action === "decrement") {
      counterValue -= 1;
    }

    valueSpan.textContent = counterValue;
  });
});
