// buttons
let reloadBtn = document.querySelector(".reload");
let home1 = document.querySelector(".home");
let home2 = document.querySelector(".home-header");
reloadBtn.addEventListener("click", reload);
home1.addEventListener("click", back);
home2.addEventListener("click", back);
function reload() {
  window.location.reload();
}
function back() {
  document.location.href = "/";
}

// create img array and randomize
let images = [];
for (let i = 1; i < 9; i++) {
  let img = "/assets/memory/" + i + ".png";
  images.push(img);
  images.push(img);
}
randomizeImages();
function randomizeImages() {
  Array.prototype.randomize = function () {
    let i = this.length,
      j,
      temp;
    while (--i) {
      j = Math.floor(Math.random() * (i - 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  images.randomize();
}

//set img in the puzzle
let puzzle = "<ul>";
for (let i = 0; i < 16; i++) {
  puzzle += "<li><img src = '" + images[i] + "'/></li>";
}
puzzle += "</ul>";
document.getElementById("container").innerHTML = puzzle;
let imgElements = document.querySelectorAll("img");
imgElements.forEach(function (img) {
  img.style.display = "none";
});

//play
let choice1 = "";
let choice2 = "";
let count = 0;
let good = 0;

let choices = document.querySelectorAll("li");
choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    if (count < 2 && !choice.querySelector("img").classList.contains("shown")) {
      count++;
      choice.querySelector("img").style.display = "block";
      choice.querySelector("img").classList.add("shown");

      if (count === 1) {
        choice1 = choice.querySelector("img").getAttribute("src");
      } else {
        choice2 = choice.querySelector("img").getAttribute("src");

        // win
        if (choice1 === choice2) {
          document
            .querySelectorAll("li img[src='" + choice2 + "']")
            .forEach(function (matched) {
              matched.classList.add("match");
            });
          good++;
        }
        if (good === 8) {
          document.querySelector(".bravo").style.zIndex = "3";
          document.querySelector("#container").style.opacity = "0.5";
        }
        if (good === 8 && screen.width >= 801) {
          document.querySelector(".bravo-txt").style.transform =
            "rotate(-20deg) translateX(-120px) translateY(-70px)";
        }
        // lost
        else {
          setTimeout(function () {
            document
              .querySelectorAll("img:not(.match)")
              .forEach(function (hiddenImg) {
                hiddenImg.style.display = "none";
                hiddenImg.classList.remove("shown");
              });
          }, 500);
        }

        // reset
        count = 0;
      }
    }
  });
});
