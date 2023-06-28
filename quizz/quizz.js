// let progression = Math.floor(50 * Math.random());
// console.log(progression);
let score = 0;
let pp = 0; //compte le nombre de questions
let sec = 300;
let points = document.getElementById("points");
let prog = document.getElementById("prog");
let reloadBtn = document.querySelector(".reload");
let reloadBtnHeader = document.querySelector(".reload-header");
let home1 = document.querySelector(".home");
let home2 = document.querySelector(".home-header");
let end = document.querySelector(".end");
let endTxt = document.getElementById("end-txt");
let timeLeft = document.getElementById("time");
let question = document.getElementById("question");
let propositions = document.getElementById("propositions");
let startBtn = document.querySelector(".start-btn");
let startEl = document.querySelector(".start");
let correction = document.getElementById("correction");
let nextQuestion = document.getElementById("next-question");
let answerBtn = document.querySelectorAll(".input");

let questions = [
  " En quelle année le Titanic a-t-il coulé?",
  "Combien de respirations le corps humain prend-il quotidiennement?",
  "Quelle est la durée de vie d'une libellule?",
  "Qui a inventé la boîte de conserve pour conserver les aliments en 1810?",
  "Qui était la «personnalité sportive de l'année» de la BBC en 2001?", //5
  "Le Canadien Connor McDavid est une étoile montante dans quel sport?",
  "Combien de cœurs a une pieuvre?",
  "Qui a inventé les boissons gazeuses artificielles?",
  "Quelle est la température de surface moyenne sur Vénus?",
  "Quel chanteur était connu entre autres comme «The King of Pop» et «The Gloved One»?", //10
  "Quel artiste a peint «l'étang aux nénuphars» en 1899?",
  "De quelle nationalité était l'artiste Henri Matisse?",
  "Dans quel pays se trouve la Juche Tower?",
  "Dans quel pays se trouve la Tours d'eau?",
  "En quelle année Gengis Khan entame sa conquête de l'Asie?", //15
  "Quelle est la taille de la grille sur un jeu de Scrabble?",
  "Quel célèbre dictateur dirigea l'URSS du milieu des années 1920 à 1953?",
  "Qui a dit 'alea jacta est'?",
  "Quel pays a remporté la coupe du monde de foot en 2014?",
  "Dans quelle ville se situe l'action de 'Roméo et Juliette' de Shakespeare", //20
  "Le Suriname est situé sur quel continent ?",
  "Au tennis, quel fruit trouve-t-on en haut du trophée masculin de Wimbledon ?",
  " Quel pays a l'espérance de vie la plus élevée ?",
  "En quelle année l'ONU a-t-elle été créée ?",
  "Combien y a-t-il d'éléments dans le tableau périodique ?", //25
  "Quel pays boit le plus de café par habitant ?",
  " Quelle ville est connue sous le nom de “La ville éternelle” ?",
  "Combien d'os avons-nous dans une oreille ?",
  "Dans quel pays est né Elon Musk ?",
  "Quel est le type d'arbre le plus haut ?", //30
  "Combien y a-t-il d'étoiles sur le drapeau chinois ?",
  "D'où viennent les sushis ?",
  "Quelle est la bière stout la plus vendue au monde ?",
  "En quelle année la catastrophe de Tchernobyl s'est-elle produite ?",
  " Le prince Hamlet était le roi de quel pays ?", //35
  "Quel est le continent sur lequel se trouve l'état de Palestine?",
  "Combien de pays arabes y a-t-il sur le continent africain?",
  "Combien de muscles dans le corps humain?",
  " Quelle est la durée de la grossesse de l'éléphant?",
  "Quel est le pays le plus grand du monde ?", //40
  "Quel est le fleuve le plus long d'Europe ?",
  "Quelle est la plus grande île de la Méditerranée ?",
  "Qui fut le quarantième président des USA ?",
  "Quelle ville a construit le premier métro ?",
  "Quel fleuve a le plus gros débit au monde ?", //45
  "En quelle année, la Vème République est entrée en vigueur ? ",
  "Quel arbre produit le liège?",
  "Qui a composé l'opéra le barbier de Séville?",
  "De quel pays la ville de Stockholm est la capitale?",
  "Quel animal grisolle ou turlute?", //50
];

let suggestions = [
  "<p> 1925</p><p> 1912</p><p> 1932</p><p> 1908</p>", //1
  "<p> 100.000</p><p> 7800</p><p> 20.000</p><p> 220.000</p>",
  "<p> 2 mois</p><p> 1 an</p><p> 6 jours</p><p> 24 heures</p>",
  "<p> Pierre Durand</p><p> Nicolas Appert</p><p> Louis Pasteur</p><p> Charles Ingalls</p>",
  "<p> Elisabeth 2</p><p> John Major</p><p> David Beckham</p><p> Jessica Rowling</p>", //5
  "<p> Hockey sur glace</p><p> Twirling</p><p> Saut en hauteur</p><p> Équitation</p>",
  "<p> 1</p><p> 0</p><p> 3</p><p> 2</p>",
  "<p> Eddy Rajter</p><p> Joseph Priestley</p><p> Dan Kaert</p><p> Fanny Delours</p>",
  "<p> 250°C</p><p> 510°C</p><p> 100°C</p><p> 460°C</p>",
  "<p> Michael Jackson</p><p> Prince</p><p> Eddy Mitchell</p><p> Daniel Balavoine</p>", //10
  "<p> Vincent van Gogh</p><p> Édouard Manet</p><p> Claude Monet</p><p> Léonard de Vinci</p>",
  "<p> Italienne</p><p> Belge</p><p> Portugaise</p><p> Française</p>",
  "<p> Corée du Nord</p><p> Japon</p><p> Chine</p><p> Inde</p>",
  "<p> Liban</p><p> Serbie</p><p> Koweït</p><p> France</p>",
  "<p> 1206</p><p> 1503</p><p> 805</p><p> 1714</p>", //15
  "<p> 16 x 16</p><p> 20 x 20</p><p>  15 x 15</p><p> 12 x12</p>",
  "<p> Lénine</p><p> Staline</p><p> Troski</p><p> Molotov</p>",
  "<p> Attila</p><p> Auguste</p><p> Vercingétorix</p><p> César</p>",
  "<p> L'Allemangne</p><p> L'Argentine</p><p> La France</p><p> Le Portugal</p>",
  "<p> Venise</p><p> Vérone</p><p> Milan</p><p> Rome</p>", //20
  "<p>Asie </p><p>Europe</p><p>Afrique</p><p>Amérique du Sud </p>",
  "<p>Pomme </p><p>Ananas </p><p>Fraise </p><p>Kiwi </p>",
  "<p>Inde </p><p>Bolivie </p><p>Hong Kong </p><p>Japon </p>",
  "<p>1973 </p><p>1945 </p><p>1954 </p><p>1960 </p>",
  "<p>118 </p><p>123 </p><p>131 </p><p>125 </p>", //25
  "<p>Brésil </p><p>Finlande </p><p>France </p><p>Colombie </p>",
  "<p>Berlin </p><p>Barcelone </p><p>Paris </p><p>Rome </p>",
  "<p>0 </p><p>2 </p><p>3 </p><p>1 </p>",
  "<p>USA </p><p>Japon </p><p>Belgique </p><p>Afrique du Sud </p>",
  "<p>Séquoias </p><p>Chêne </p><p>Orme </p><p>Bouleau </p>", //30
  "<p>3 </p><p>5 </p><p>0 </p><p>8 </p>",
  "<p>Japon </p><p>Cambodge </p><p>Chine </p><p>Inde </p>",
  "<p>Leffe </p><p>Guinness </p><p>Heineken </p><p>Paulaner </p>",
  "<p>1986 </p><p>1983 </p><p>1985 </p><p>1984 </p>",
  "<p>Angleterre </p><p>Danemark </p><p>Belgique </p><p>Suède </p>", //35
  "<p>Océanie </p><p>Afrique </p><p>Europe </p><p>Asie </p>",
  "<p>8 </p><p>10 </p><p>9 </p><p>7 </p>",
  "<p>540 </p><p>650 </p><p>580 </p><p>620 </p>",
  "<p>22 mois </p><p>24 mois </p><p>20 mois </p><p>26 mois </p>",
  "<p>Islande </p><p>Canada </p><p>Chine </p><p>Russie </p>", //40
  "<p>La Volga </p><p>Le Danube </p><p>Le Rhin </p><p>La Seine </p>",
  "<p>Sicile </p><p>Sardaigne </p><p>Corse </p><p>Capri </p>",
  "<p>Jimmy Carter </p><p>Barack Obama </p><p>George W Bush </p><p>Ronald Reagan </p>",
  "<p>Paris </p><p>Berlin </p><p>Rome </p><p>Londres </p>",
  "<p>La Volga </p><p>L'Amazone </p><p>Le Nil </p><p>Le Rhin </p>", //45
  "<p>1958 </p><p>1878 </p><p>1905 </p><p>1962 </p>",
  "<p>Le chêne </p><p>Le cèdre </p><p>L'eucalyptus </p><p>Le charme </p>",
  "<p>Mozart </p><p>Haydn </p><p>Rossini </p><p>Paganini </p>",
  "<p>Finlande </p><p>Norvège </p><p>Suède </p><p>Danemark </p>",
  "<p>L'alouette </p><p>Le chevreuil </p><p>La chouette </p><p>La cigogne  </p>", //50
];

let responses = [
  "b", //1
  "c", //2
  "d", //3
  "a", //4
  "c", //5
  "a", //6
  "c", //7
  "b", //8
  "d", //9
  "a", //10
  "c", //11
  "d", //12
  "a", //13
  "c", //14
  "a", //15
  "c", //16
  "b", //17
  "d", //18
  "a", //19
  "b", //20
  "d",
  "b",
  "c",
  "b",
  "a", //25
  "b",
  "d",
  "c",
  "d",
  "a", //30
  "b",
  "c",
  "b",
  "a",
  "b", //35
  "d",
  "c",
  "d",
  "a",
  "c", //40
  "a",
  "a",
  "d",
  "d",
  "b", //45
  "a",
  "a",
  "c",
  "c",
  "a", //50
];

let indexUsed = [];

startBtn.addEventListener("click", start);
reloadBtn.addEventListener("click", reload);
reloadBtnHeader.addEventListener("click", reload);
home1.addEventListener("click", back);
home2.addEventListener("click", back);
nextQuestion.addEventListener("click", displayQuestions);

function reload() {
  window.location.reload();
}
function back() {
  document.location.href = "/";
}

function start() {
  startEl.style.zIndex = "1";
  displayQuestions();
  time();
}

function displayQuestions() {
  let pP = pp + 1;
  if (pp < 9) {
    prog.innerHTML = "0" + pP;
  } else {
    prog.innerHTML = pP;
  }
  correction.innerHTML = "";
  answerBtn.forEach((answerButton) => (answerButton.disabled = false));
  nextQuestion.disabled = true;
  let index = Math.floor(Math.random() * 49);
  console.log("index choisi", index + 1);
  if (indexUsed.includes(index)) {
    displayQuestions();
  } else {
    indexUsed.push(index);
    question.innerHTML = questions[index];
    propositions.innerHTML = suggestions[index];
    return (ind = index);
  }
}

function tester(answer) {
  answerBtn.forEach((answerButton) => (answerButton.disabled = true));
  nextQuestion.disabled = false;
  let answ = answer;
  console.log("index", ind, "réponse", answ, responses[ind], "bonne réponse");

  console.log(pp);

  function showResult() {
    if (pp == 24) {
      nextQuestion.disabled = true;
      if (answ === responses[ind]) {
        score += 25;
        pp++;
        points.innerHTML = score;
        correction.innerHTML +=
          "Bravo! '" +
          responses[ind].toUpperCase() +
          "' était la bonne réponse.";
      }
      if (answ != responses[ind]) {
        score -= 25;
        pp++;
        points.innerHTML = score;
        console.log(responses[ind]);
        switch (responses[ind]) {
          case "a":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          case "b":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          case "c":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          default:
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
        }
      }
      function showGlobalResult() {
        if (answ === responses[ind]) {
          score += 25;
          pp++;
          points.innerHTML = score;
        }
        if (answ != responses[ind]) {
          console.log("non");
          score -= 25;
          pp++;
          points.innerHTML = score;
        }
        end.style.zIndex = "99";
        if (score <= 50 && score != -625) {
          endTxt.innerHTML +=
            "Votre score est de " +
            score +
            " . Pas terrible, ça ira mieux la prochaine fois!";
        }
        if (score > 50 && score < 300) {
          endTxt.innerHTML +=
            "Votre score est de " + score + " . Presque la moyenne, continuez!";
        }
        if (score >= 300 && score < 500) {
          endTxt.innerHTML +=
            "Votre score est de " +
            score +
            " . Pas mauvais, mais je suis sûre que vous pouvez mieux faire!";
        }
        if (score >= 500 && score != 625) {
          endTxt.innerHTML +=
            "Votre score est de " +
            score +
            " . Pas mal du tout, envie d'une autre partie?";
        }
        if (score == 625) {
          endTxt.innerHTML +=
            "Votre score est de " +
            score +
            " . Excellent, c'est un sans fautes! BRAVO!";
        }
        if (score == -625) {
          endTxt.innerHTML +=
            "Votre score est de " +
            score +
            " . Outch, aucune bonne réponse! Perséverez!";
        }
      }
      setTimeout(showGlobalResult, 1200);
    } else {
      if (answ === responses[ind]) {
        score += 25;
        pp++;
        points.innerHTML = score;
        correction.innerHTML +=
          "Bravo! '" +
          responses[ind].toUpperCase() +
          "' était la bonne réponse.";
      }
      if (answ != responses[ind]) {
        score -= 25;
        pp++;
        points.innerHTML = score;
        console.log(responses[ind]);
        switch (responses[ind]) {
          case "a":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          case "b":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          case "c":
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
            break;
          default:
            correction.innerHTML +=
              "La bonne réponse était: '" + responses[ind].toUpperCase() + "'";
        }
      }
    }
  }
  setTimeout(showResult, 100);
}
function time() {
  sec--;
  if (sec % 60 < 10) {
    timeLeft.innerHTML = Math.floor(sec / 60) + "min0" + (sec % 60) + "s";
  } else {
    timeLeft.innerHTML = Math.floor(sec / 60) + "min" + (sec % 60) + "s";
  }
  if (sec == 0) {
    end.style.zIndex = "99";
    if (score <= 50 && score != -625) {
      endTxt.innerHTML +=
        "Votre score est de " +
        score +
        " . Pas terrible, ça ira mieux la prochaine fois!";
    }
    if (score > 50 && score < 300) {
      endTxt.innerHTML +=
        "Votre score est de " + score + " . Presque la moyenne, continuez!";
    }
    if (score >= 300 && score < 500) {
      endTxt.innerHTML +=
        "Votre score est de " +
        score +
        " . Pas mauvais, mais je suis sûre que vous pouvez mieux faire!";
    }
    if (score >= 500 && score != 625) {
      endTxt.innerHTML +=
        "Votre score est de " +
        score +
        " . Pas mal du tout, envie d'une autre partie?";
    }
    if (score == 625) {
      endTxt.innerHTML +=
        "Votre score est de " +
        score +
        " . Excellent, c'est un sans fautes! BRAVO!";
    }
    if (score == -625) {
      endTxt.innerHTML +=
        "Votre score est de " +
        score +
        " . Outch, aucune bonne réponse! Perséverez!";
    }
  } else {
    setTimeout("time()", 1000);
  }
}
