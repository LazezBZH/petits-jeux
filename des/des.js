let launchBtn = document.getElementById("launch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let launched = document.getElementById("launched");
let computLaunched = document.getElementById("computLaunched");
let computMsg = document.getElementById("comput-msg");
let yourScore = document.getElementById("your-score");
let resultScore = document.getElementById("result-score");
let finalScore = document.getElementById("final-score");
let score = document.getElementById("score");
let partScore = document.getElementById("part-score");
let computScore = document.getElementById("comput-score");
let computCount = document.getElementById("comput-count");
let tieCount = document.getElementById("tie-count");
let yourCount = document.getElementById("your-count");
let title = document.getElementById("title");

let resultat = 0;
let total = 0;
let comput1 = 0;
let comput2 = 0;
let computTotal = 0;
let computCountNum = 0;
let yourCountNum = 0;
let tieCountNum = 0;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
launchBtn.addEventListener("click", launch);
resetBtn.addEventListener("click", reset);

function start() {
  resetBtn.style.display = "block";
  computLaunched.style.opacity = 0;
  computMsg.style.opacity = 1;
  launchBtn.style.opacity = 1;
  resetBtn.disabled = true;
  startBtn.style.display = "none";
  comput1 = Math.floor(Math.random() * 6 + 1);
  comput2 = Math.floor(Math.random() * 6 + 1);
  computTotal = comput1 + comput2;
  computLaunched.innerHTML += `<li><img src="/assets/des/${comput1}.png" /></li><li><img src="/assets/des/${comput2}.png" /></li>`;
}

function stop() {
  finalScore.style.opacity = 1;
  launchBtn.style.opacity = 0;
  stopBtn.style.opacity = 0;
  resetBtn.disabled = false;
  computLaunched.style.opacity = 1;
  resultScore.style.opacity = 1;
  computMsg.innerHTML = `<h2>Les dés de l'ordinateur:</h2>`;
  computScore.innerHTML = computTotal;
  partScore.innerHTML = total;
  yourScore.innerHTML = "";

  if (total < computTotal || total > 12) {
    computCountNum++;
    yourScore.innerHTML = `Votre score est de: ${total} vous avez perdu!`;
  } else if (total > computTotal) {
    yourCountNum++;
    yourScore.innerHTML = `Votre score est de: ${total} vous avez gagné!`;
  } else {
    yourScore.innerHTML = `Votre score est de: ${total} égalité!`;
  }
  computCount.innerHTML = computCountNum;
  yourCount.innerHTML = yourCountNum;
  tieCount.innerHTML = tieCountNum;
}
function reset() {
  title.style.opacity = 0;
  computMsg.innerHTML = `<h2>L'ordinateur a lancé 2 dés, à votre tour!</h2>`;
  resultat = 0;
  total = 0;
  comput1 = 0;
  comput2 = 0;
  computTotal = 0;
  resultScore.style.opacity = 0;
  yourScore.style.opacity = 0;
  resetBtn.disabled = true;
  computLaunched.innerHTML = "";
  launched.innerHTML = "";
  computScore.innerHTML = "";
  partScore.innerHTML = "";
  start();
}

function launch() {
  title.style.opacity = 1;

  setTimeout(() => {
    yourScore.style.opacity = 1;

    if (total > 12) {
      yourScore.innerHTML = `Votre score est de: ${total} vous avez perdu!`;
      stopBtn.style.opacity = 0;
    } else {
      yourScore.innerHTML = `Votre score est de: ${total} à vous de décider si vous souhaitez arrêter là ou lancer à nouveau les dés.`;
      stopBtn.style.opacity = 1;
    }
  }, 1000);
  resultat = Math.floor(Math.random() * 6 + 1);
  console.log(resultat);
  total += resultat;
  launched.innerHTML += `<li><img src="/assets/des/${resultat}.png" /></li>`;
  if (total > 12) {
    alert(
      "votre total est de " + total + " vous avez dépassé 12 et donc perdu!"
    );
    // stopBtn.style.opacity = 0;
    stop();
  }
}

// header
let reloadBtn = document.querySelector(".reload-header");
let homeBtn = document.querySelector(".home-header");

reloadBtn.addEventListener("click", reload);
homeBtn.addEventListener("click", back);

function reload() {
  window.location.reload();
}
function back() {
  document.location.href = "/";
}
