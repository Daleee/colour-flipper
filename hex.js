const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomHex = getRandomHexCode();
  console.log(randomHex);
  document.body.style.backgroundColor = randomHex;
  colour.textContent = randomHex;
});

//The below function generates a random integer between 0 and 16777215, which represents all possible combinations of 6 hexadecimal digits. It then converts this integer to a hex string and pads it with leading zeros if necessary to ensure that it is exactly 6 digits long. Finally, it returns the hex string with a '#' prefix to make it a valid hex code.

function getRandomHexCode() {
  // Generate a random integer between 0 and 16777215 (0xffffff in decimal)
  const randomInt = Math.floor(Math.random() * 16777215);
  // Convert the integer to a hex string and pad with leading zeros if necessary
  const hexString = randomInt.toString(16).padStart(6, "0");
  // Return the hex string with a '#' prefix
  return `#${hexString}`;
}
