let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let result = document.querySelector(".result");

spinBtn.onclick = function () {
  result.style.opacity = "0";
  let random1 = Math.ceil(Math.random() * (80 - 38) + 38);
  console.log(random1);
  let arr = [45, 90, 135, 180, 225, 270, 315, 360];
  let random2 = arr[Math.floor(Math.random() * arr.length)];
  console.log("Random:", random2);
  let value = random1 * 360 + random2;
  wheel.style.transform = "rotate(" + value + "deg)";
  value += random1 * 360 + random2;
  console.log(random1);
  console.log("Random:", random2);
  displayResult();

  function displayResult() {
    setTimeout(showResult, 5500);
  }

  function showResult() {
    switch (random2) {
      case 45:
        result.innerHTML = `<a href="/des">Cliquez pour jouer aux dés ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 90:
        result.innerHTML = `<a href="/devine">Cliquez pour être devinez un nombre ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 135:
        result.innerHTML = `<a href="/quizz">Cliquez pour être redirigé vers le quizz ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 180:
        result.innerHTML = `<a href="/swap">Cliquez pour faire connaissance avec Saturnin ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 225:
        result.innerHTML = `<a href="/puzzle">Cliquez pour faire un puzzle ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 270:
        result.innerHTML = `<a href="/moustiques">Cliquez pour aller chasser les Moustiques ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      case 315:
        result.innerHTML = `<a href="/pendu">Cliquez pour être redirigé vers le Pendu ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";

        break;
      default:
        result.innerHTML = `<a href="/memory">Cliquez pour être redirigé vers le Memory ou faites tourner à nouveau la roue pour sélectionner un autre jeu.</a>`;
        result.style.opacity = "1";
    }
  }
};

// random2
// 360: A
// 45: H
// 90: G
// 135: F
// 180: E
// 225: D
// 270: C
// 315: B

// menu burger

const menuLinks = document.querySelectorAll(".menu a");
const trigger = document.querySelector(".trigger");
const menu = document.querySelector(".menu");
const dropDown = document.querySelector(".drop-down");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.toggle("round");
    dropDown.classList.toggle("down");
  });
});
document.addEventListener("mouseup", function (event) {
  if (!dropDown.contains(event.target) && !trigger.contains(event.target)) {
    menu.classList.remove("round");
    dropDown.classList.remove("down");
  }
});
