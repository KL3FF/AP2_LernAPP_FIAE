import { cardSets } from "./quest.js";

const state = {
  cardStack: [],
  totalCards: 0,
  answeredCorrect: 0,
  showingAnswer: false,
}

document.addEventListener("DOMContentLoaded", () => {


  const gameDiv = document.getElementById("game");
  const counterDiv = document.getElementById("counter");
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");



  document.getElementById("btn-yes").addEventListener("click", () => markAnswer(true));
  document.getElementById("btn-no").addEventListener("click", () => markAnswer(false));
  showSetSelection();

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
      state.cardStack = Object.values(cardSets).flat();
    } else {
      state.cardStack = [...cardSets[setName]];
    }

    state.cardStack = state.cardStack.sort(() => Math.random() - 0.5);
    state.totalCards = state.cardStack.length;
    state.answeredCorrect = 0;
    nextCard();
  }

  function nextCard() {
    state.showingAnswer = false;
    updateCounter();

    btnYes.style.display = "none";
    btnNo.style.display = "none";

    if (state.cardStack.length === 0) {
      gameDiv.innerHTML = `<h2>Alle Fragen korrekt beantwortet!</h2><button id="startGame">Neu starten</button>`;
      document.getElementById("startGame").addEventListener("click", () => location.reload());
      return;
    }

    displayQuestion(state.cardStack[0]);
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
          <pre id="answer" style="display:none;">${card.answer}</pre>
        </div>
      </div>
      <button id="show-answer">Lösung anzeigen</button>
    </div>
  `;
    document.getElementById("show-answer").addEventListener("click", showAnswer);
  }

  function showAnswer() {
    if (state.showingAnswer) return;
    state.showingAnswer = true;
    document.querySelector("#show-answer")?.remove();
    document.getElementById("answer").style.display = "block";
    btnYes.style.display = "inline-block";
    btnNo.style.display = "inline-block";
  }

  function markAnswer(correct) {
    if (!state.showingAnswer) return;

    const card = state.cardStack.shift();
    if (!correct) {
      state.cardStack.push(card); // Hinten wieder einreihen
    } else {
      state.answeredCorrect++;
    }

    nextCard();
  }

  function updateCounter() {
    counterDiv.textContent = `${state.answeredCorrect} / ${state.totalCards}`;
  }

}





);
