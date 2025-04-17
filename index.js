import { cardSets } from "./quest.js";

let cardStack = [];
let totalCards = 0;
let answeredCorrect = 0;
let showingAnswer = false;

const gameDiv = document.getElementById("game");
const counterDiv = document.getElementById("counter");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

document.getElementById("btn-yes").addEventListener("click", () => markAnswer(true));
document.getElementById("btn-no").addEventListener("click", () => markAnswer(false));

document.addEventListener("DOMContentLoaded", showSetSelection);

function showSetSelection() {
  const allSetNames = Object.keys(cardSets);

  allSetNames.forEach((setName) => {
    const btn = document.createElement("button");
    btn.textContent = setName;
    btn.className = "set-btn";
    btn.addEventListener("click", () => startGame(setName));
    gameDiv.appendChild(btn);
  });

  const allBtn = document.createElement("button");
  allBtn.textContent = "Alle";
  allBtn.className = "set-btn";
  allBtn.addEventListener("click", () => startGame("ALL"));
  gameDiv.appendChild(allBtn);
}

function startGame(setName) {
  if (setName === "ALL") {
    cardStack = Object.values(cardSets).flat();
  } else {
    cardStack = [...cardSets[setName]];
  }

  cardStack = cardStack.sort(() => Math.random() - 0.5);
  totalCards = cardStack.length;
  answeredCorrect = 0;
  nextCard();
}

function nextCard() {
  showingAnswer = false;
  updateCounter();

  btnYes.style.display = "none";
  btnNo.style.display = "none";

  if (cardStack.length === 0) {
    gameDiv.innerHTML = `<h2>Alle Fragen korrekt beantwortet!</h2><button id="startGame">Neu starten</button>`;
    document.getElementById("startGame").addEventListener("click", () => location.reload());
    return;
  }

  displayQuestion(cardStack[0]);
}

function displayQuestion(card) {
  gameDiv.innerHTML = `
    <div id="game-content">
      <div class="half-container question">
        <div class="text-bottom">
          <h2>Frage:</h2>
          <p>${card.question}</p>
        </div>
      </div>
      <div class="half-container answer">
        <div class="text-top">
          <p id="answer" style="display:none;">${card.answer}</p>
        </div>
      </div>
      <button id="show-answer">Antwort anzeigen</button>
    </div>
  `;
  document.getElementById("show-answer").addEventListener("click", showAnswer);
}

function showAnswer() {
  if (showingAnswer) return;
  showingAnswer = true;
  document.querySelector("#show-answer")?.remove();
  document.getElementById("answer").style.display = "block";
  btnYes.style.display = "inline-block";
  btnNo.style.display = "inline-block";
}

function markAnswer(correct) {
  if (!showingAnswer) return;

  const card = cardStack.shift();
  if (!correct) {
    cardStack.push(card); // Hinten wieder einreihen
  } else {
    answeredCorrect++;
  }

  nextCard();
}

function updateCounter() {
  counterDiv.textContent = `${answeredCorrect} / ${totalCards}`;
}
