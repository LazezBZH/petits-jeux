const resetBtn = document.getElementById("reset");
const swappBtn = document.getElementById("swapping");
const bravo = document.querySelector(".bravo");

resetBtn.addEventListener("click", reset);
swappBtn.addEventListener("click", swapIt);

let box = [];
function start() {
  for (let n = 1; n <= 9; n++) box[n] = document.getElementById("box" + n);
}
function change(i, j) {
  if (i == j) return;
  let intial = box[i].className;
  box[i].className = box[j].className;
  box[j].className = intial;
}
function check() {
  for (let n = 1; n <= 9; n++)
    if (box[n].id.charAt(3) != box[n].className.charAt(3)) return false;
  return true;
}
function reset() {
  for (let n = 1; n <= 9; n++) box[n].className = "img" + n;
  bravo.classList.remove("visible");
}
function swap(i, b = true) {
  let x = "";
  switch (i) {
    case 1:
      x = "123456";
      break;
    case 2:
      x = "123789";
      break;
    case 3:
      x = "456789";
      break;
    case 4:
      x = "147258";
      break;
    case 5:
      x = "147369";
      break;
    case 6:
      x = "258369";
      break;
    case 7:
      x = "478236";
      break; //1
    case 8:
      x = "000000";
      break; //2
    case 9:
      x = "214698";
      break; //3
    case 10:
      x = "000000";
      break; //4
    case 11:
      x = "130970";
      break; //5
    case 12:
      x = "000000";
      break; //6
    case 13:
      x = "214698";
      break; //7
    case 14:
      x = "000000";
      break; //8
    case 15:
      x = "478236";
      break; //9
    default:
      return;
  }
  x = x.split("");
  for (let n = 0; n < 3; n++) change(x[n], x[n + 3]);
  if (b && check()) bravo.classList.add("visible");
}
function swapIt() {
  for (let n = 0; n < 20; n++) swap(1 + Math.floor(15 * Math.random()), false);
  bravo.classList.remove("visible");
  if (check()) setTimeout(swapIt, 100);
}
setTimeout(start, 50);

// home

let home = document.getElementById("home");

home.addEventListener("click", back);

function back() {
  document.location.href = "/";
}
