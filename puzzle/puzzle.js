let bravo = document.querySelector(".bravo");

// puzzle

function start(e) {
  e.dataTransfer.effecAllowed = "move";
  e.dataTransfer.setData("Text", e.target.id);
  e.target.style.opacity = "0.4";
}

function end(e) {
  e.target.style.opacity = "";
  e.dataTransfer.clearData("Data");
}

function enter(e) {
  return true;
}

function over(e) {
  if (
    e.target.className == "piece-container" ||
    e.target.id == "piece-containers"
  )
    return false;
  else return true;
}

function drop(e) {
  e.preventDefault();
  let draggedElement = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(draggedElement));
  checkPuzzle();
}

function checkPuzzle() {
  if (
    (document.getElementById("piece1").parentNode.id == "01" ||
      document.getElementById("piece1").parentNode.id == "02" ||
      document.getElementById("piece1").parentNode.id == "03" ||
      document.getElementById("piece1").parentNode.id == "06" ||
      document.getElementById("piece1").parentNode.id == "23" ||
      document.getElementById("piece1").parentNode.id == "26" ||
      document.getElementById("piece1").parentNode.id == "27" ||
      document.getElementById("piece1").parentNode.id == "28") &&
    (document.getElementById("piece2").parentNode.id == "01" ||
      document.getElementById("piece2").parentNode.id == "02" ||
      document.getElementById("piece2").parentNode.id == "03" ||
      document.getElementById("piece2").parentNode.id == "06" ||
      document.getElementById("piece2").parentNode.id == "23" ||
      document.getElementById("piece2").parentNode.id == "26" ||
      document.getElementById("piece2").parentNode.id == "27" ||
      document.getElementById("piece2").parentNode.id == "28") &&
    (document.getElementById("piece3").parentNode.id == "01" ||
      document.getElementById("piece3").parentNode.id == "02" ||
      document.getElementById("piece3").parentNode.id == "03" ||
      document.getElementById("piece3").parentNode.id == "06" ||
      document.getElementById("piece3").parentNode.id == "23" ||
      document.getElementById("piece3").parentNode.id == "26" ||
      document.getElementById("piece3").parentNode.id == "27" ||
      document.getElementById("piece3").parentNode.id == "28") &&
    document.getElementById("piece4").parentNode.id == "04" &&
    document.getElementById("piece5").parentNode.id == "05" &&
    (document.getElementById("piece6").parentNode.id == "01" ||
      document.getElementById("piece6").parentNode.id == "02" ||
      document.getElementById("piece6").parentNode.id == "03" ||
      document.getElementById("piece6").parentNode.id == "06" ||
      document.getElementById("piece6").parentNode.id == "23" ||
      document.getElementById("piece6").parentNode.id == "26" ||
      document.getElementById("piece6").parentNode.id == "27" ||
      document.getElementById("piece6").parentNode.id == "28") &&
    document.getElementById("piece7").parentNode.id == "07" &&
    document.getElementById("piece8").parentNode.id == "08" &&
    document.getElementById("piece9").parentNode.id == "09" &&
    document.getElementById("piece10").parentNode.id == "10" &&
    document.getElementById("piece11").parentNode.id == "11" &&
    document.getElementById("piece12").parentNode.id == "12" &&
    document.getElementById("piece13").parentNode.id == "13" &&
    document.getElementById("piece14").parentNode.id == "14" &&
    document.getElementById("piece15").parentNode.id == "15" &&
    document.getElementById("piece16").parentNode.id == "16" &&
    document.getElementById("piece17").parentNode.id == "17" &&
    document.getElementById("piece18").parentNode.id == "18" &&
    document.getElementById("piece19").parentNode.id == "19" &&
    document.getElementById("piece20").parentNode.id == "20" &&
    document.getElementById("piece21").parentNode.id == "21" &&
    document.getElementById("piece22").parentNode.id == "22" &&
    (document.getElementById("piece23").parentNode.id == "01" ||
      document.getElementById("piece23").parentNode.id == "02" ||
      document.getElementById("piece23").parentNode.id == "03" ||
      document.getElementById("piece23").parentNode.id == "06" ||
      document.getElementById("piece23").parentNode.id == "23" ||
      document.getElementById("piece23").parentNode.id == "26" ||
      document.getElementById("piece23").parentNode.id == "27" ||
      document.getElementById("piece23").parentNode.id == "28") &&
    document.getElementById("piece24").parentNode.id == "24" &&
    document.getElementById("piece25").parentNode.id == "25" &&
    (document.getElementById("piece26").parentNode.id == "01" ||
      document.getElementById("piece26").parentNode.id == "02" ||
      document.getElementById("piece26").parentNode.id == "03" ||
      document.getElementById("piece26").parentNode.id == "06" ||
      document.getElementById("piece26").parentNode.id == "23" ||
      document.getElementById("piece26").parentNode.id == "26" ||
      document.getElementById("piece26").parentNode.id == "27" ||
      document.getElementById("piece26").parentNode.id == "28") &&
    (document.getElementById("piece27").parentNode.id == "01" ||
      document.getElementById("piece27").parentNode.id == "02" ||
      document.getElementById("piece27").parentNode.id == "03" ||
      document.getElementById("piece27").parentNode.id == "06" ||
      document.getElementById("piece27").parentNode.id == "23" ||
      document.getElementById("piece27").parentNode.id == "26" ||
      document.getElementById("piece27").parentNode.id == "27" ||
      document.getElementById("piece27").parentNode.id == "28") &&
    (document.getElementById("piece28").parentNode.id == "01" ||
      document.getElementById("piece28").parentNode.id == "02" ||
      document.getElementById("piece28").parentNode.id == "03" ||
      document.getElementById("piece28").parentNode.id == "06" ||
      document.getElementById("piece28").parentNode.id == "23" ||
      document.getElementById("piece28").parentNode.id == "26" ||
      document.getElementById("piece28").parentNode.id == "27" ||
      document.getElementById("piece28").parentNode.id == "28") &&
    document.getElementById("piece29").parentNode.id == "29" &&
    document.getElementById("piece30").parentNode.id == "30"
  ) {
    bravo.classList.add("visible");
  }
}

function checkNavigator() {
  if (
    navigator.userAgent.toLowerCase().indexOf("msie ") > -1 ||
    (navigator.userAgent.toLowerCase().indexOf("safari") > -1 &&
      navigator.userAgent.toLowerCase().indexOf("chrome") == -1)
  ) {
    alert("Votre navigateur ne permet pas de jouer à ce jeu.");
  }
}

// nav
const reset = document.getElementById("reload");
let home = document.getElementById("home");

home.addEventListener("click", back);
reset.addEventListener("click", reload);

function back() {
  document.location.href = "/";
}
function reload() {
  window.location.reload();
}

// drag event
let images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("dragstart", start);
});
images.forEach((image) => {
  image.addEventListener("dragend", end);
});
