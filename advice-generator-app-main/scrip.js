let advice = document.querySelector(".advice");
let adviceNum = document.querySelector(".adviceN");
let dice = document.querySelector(".dice");

dice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      adviceNum.textContent = data.slip.id;
    });
});
