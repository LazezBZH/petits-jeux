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
        result.innerHTML = `<a href="/H.html">Cliquez pour être redirigé vers le jeu H ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 90:
        result.innerHTML = `<a href="/G.html">Cliquez pour être redirigé vers le jeu G ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 135:
        result.innerHTML = `<a href="/F.html">Cliquez pour être redirigé vers le jeu F ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 180:
        result.innerHTML = `<a href="/E.html">Cliquez pour être redirigé vers le jeu E ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 225:
        result.innerHTML = `<a href="/D.html">Cliquez pour être redirigé vers le jeu D ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 270:
        result.innerHTML = `<a href="/C.html">Cliquez pour être redirigé vers le jeu C ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      case 315:
        result.innerHTML = `<a href="/B.html">Cliquez pour être redirigé vers le jeu B ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
        result.style.opacity = "1";

        break;
      default:
        result.innerHTML = `<a href="/memory">Cliquez pour être redirigé vers le Memory ou faites tourner à nouveau la roue. pour sélectionner un autre jeu</a>`;
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
