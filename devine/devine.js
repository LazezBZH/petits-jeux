const form = document.getElementById("form");
const message = document.getElementById("message");
const home = document.querySelector("#home");
const submitBtn = document.getElementById("form-btn");
const playAgain = document.getElementById("play-again");
const numberInput = document.getElementById("number");
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let attempts = 0;
let found = false;

playAgain.addEventListener("click", resetGame);
home.addEventListener("click", back);

function back() {
  document.location.href = "/";
}

function checkNumber(number) {
  console.log(randomNumber);

  if (number === randomNumber) {
    found = true;
    numberInput.value = "";
    submitBtn.disabled = true;
    playAgain.disabled = false;
    if (attempts === 1) {
      return `Félicitations, vous avez trouvé le nombre ${randomNumber} du premier coup!!! `;
    } else
      return `Félicitations, vous avez trouvé le nombre ${randomNumber} en ${attempts} tentatives! `;
  } else if (number > randomNumber) {
    return "Le nombre est plus petit";
  } else {
    return "Le nombre est plus grand";
  }
}

function resetGame() {
  submitBtn.disabled = true;
  playAgain.disabled = true;
  attempts = 0;
  found = false;
  message.innerHTML = "Bonne chance!";
  form.reset();
  randomNumber = Math.floor(Math.random() * 1000) + 1;
}

numberInput.addEventListener("keyup", checkValidity);
function checkValidity(e) {
  e.preventDefault;
  console.log(numberInput.value);
  if (numberInput.value < 1 || numberInput.value > 1000)
    submitBtn.disabled = true;
  else submitBtn.disabled = false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  attempts++;

  const number = parseInt(document.getElementById("number").value);
  checkNumber();
  message.textContent = checkNumber(number);
});
