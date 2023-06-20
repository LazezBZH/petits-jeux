const helpBtn = document.getElementById("help");
const reset = document.getElementById("reset");
const myButtons = document.getElementById("buttons");
const wordHolder = document.getElementById("hold");
const helpInvit = document.getElementById("help-invit");
const myDraw = document.querySelector("canvas");

window.onload = function () {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //   let categories; // Array of topics
  let chosenCategory; // Selected catagory

  let word = ""; // Selected word
  let guess = ""; // Guess
  let guesses = []; // Stored guesses
  let lives = 10; // Lives
  let counter = 0; // Count correct guesses
  let space = 0; // Number of spaces in word '-'

  // Get elements
  let showLives = document.getElementById("mylives");

  // create alphabet ul
  function buttons() {
    letters = document.createElement("ul");

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  // Select Catagory
  helpBtn.addEventListener("click", help);
  function help() {
    helpBtn.style.filter = "blur(0)";
    helpInvit.style.opacity = "0";
    helpBtn.style.border = "none";
    if (chosenCategory === categories[0]) {
      helpBtn.innerHTML = "Vous devez trouver un fruit";
    } else if (chosenCategory === categories[1]) {
      helpBtn.innerHTML = "Vous devez trouver un objet";
    } else if (chosenCategory === categories[2]) {
      helpBtn.innerHTML = "Vous devez trouver un pays";
    }
  }

  // Create guesses ul
  function result() {
    correct = document.createElement("ul");

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  function comments() {
    if (lives === 1) {
      showLives.innerHTML = "Il vous reste " + lives + " vie";
    } else if (lives > 1) {
      showLives.innerHTML = "Il vous reste " + lives + " vies";
    }
    if (lives < 1) {
      showLives.innerHTML = "Perdu!!!! PENDU!!!";

      myDraw.style.backgroundImage = "url('/assets/pendu/bg3.png')";
      myDraw.style.border = "none";
    }
    for (let i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "C'est gagné,  BRAVO!";
        context.clearRect(0, 0, 400, 400);
        myDraw.style.backgroundImage = "url('/assets/pendu/bg2.jpg')";
        myDraw.style.border = "none";
      }
    }
  }

  // Animate man
  let animate = function () {
    let drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
  };

  function head() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  function frame1() {
    draw(0, 150, 150, 150);
  }

  function frame2() {
    draw(10, 0, 10, 600);
  }

  function frame3() {
    draw(0, 5, 70, 5);
  }

  function frame4() {
    draw(60, 5, 60, 15);
  }

  function torso() {
    draw(60, 36, 60, 70);
  }

  function rightArm() {
    draw(60, 46, 100, 50);
  }

  function leftArm() {
    draw(60, 46, 20, 50);
  }

  function rightLeg() {
    draw(60, 70, 100, 100);
  }

  function leftLeg() {
    draw(60, 70, 20, 100);
  }

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  function check() {
    list.addEventListener("click", checkList);
    function checkList() {
      let geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.removeEventListener("click", checkList);
      for (let i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      let j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

  // Play
  play = function () {
    categories = [
      [
        "poire",
        "banane",
        "citron",
        "kiwi",
        "avocat",
        "cerise",
        "ananas",
        "olive",
        "pomme",
        "fraise",
        "tomate",
        "grenade",
        "raisin",
        "abricot",
        "mangue",
        "melon",
        "myrtille",
      ],
      [
        "porte",
        "valise",
        "bureau",
        "clef",
        "ordinateur",
        "assiette",
        "collier",
        "tasse",
        "chapeau",
        "voiture",
        "robe",
        "glace",
        "pain",
        "radiateur",
        "horloge",
        "calendrier",
        "pantalon",
        "xylophone",
        "yaourt",
      ],
      [
        "france",
        "italie",
        "belgique",
        "suisse",
        "iran",
        "chine",
        "turquie",
        "japon",
        "uruguay",
        "allemagne",
        "bhoutan",
        "cambodge",
        "croatie",
        "danemark",
        "espagne",
        "finlande",
        "gabon",
        "honduras",
        "inde",
        "irlande",
        "kenya",
        "liban",
        "lettonie",
        "malaisie",
        "mexique",
        "niger",
        "ouganda",
        "pologne",
        "roumanie",
        "serbie",
        "tadjikistan",
        "tunisie",
        "zimbabwe",
      ],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  };

  play();
  reset.addEventListener("click", resetAll);
  function resetAll() {
    helpBtn.innerHTML = "";
    helpBtn.style.filter = "blur(5px)";
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    myDraw.style.backgroundImage = "url('/assets/pendu/bg.jpg')";
    myDraw.style.border = "ar(--white) dashed 2px";
    context.clearRect(0, 0, 400, 400);
    document.getElementById("help-invit").style.opacity = "1";
    document.getElementById("help-btn").style.border = "2px solid black";
    myDraw.style.border = "var(--white) dashed 2px";
    play();
  }
};
