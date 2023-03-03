const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = generateRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 4);
}
