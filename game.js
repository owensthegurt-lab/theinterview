// =====================================
// THE INTERVIEW
// GAME
// =====================================

// Elements
const titleScreen = document.getElementById("titleScreen");
const game = document.getElementById("game");

const startBtn = document.getElementById("startBtn");

const speaker = document.getElementById("speaker");
const dialogue = document.getElementById("dialogue");
const choices = document.getElementById("choices");

// Progress
let currentQuestion = 0;

// Player history
const player = {

    answers: [],
    effects: []

};

// ================================
// START GAME
// ================================

startBtn.addEventListener("click", () => {

    titleScreen.classList.add("hidden");

    game.classList.remove("hidden");

    showQuestion();

});

// ================================
// SHOW QUESTION
// ================================

function showQuestion() {

    if (currentQuestion >= QUESTIONS.length) {

        finishInterview();

        return;

    }

    const q = QUESTIONS[currentQuestion];

    speaker.textContent = q.speaker;

    dialogue.textContent = q.text;

    choices.innerHTML = "";

    q.choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "choice";

        button.textContent = choice.text;

        button.onclick = () => {

            player.answers.push(choice.text);
            player.effects.push(choice.effect);

            currentQuestion++;

            showQuestion();

        };

        choices.appendChild(button);

    });

}

// ================================
// FINISH
// ================================

function finishInterview() {

    if (typeof getEnding === "function") {

        getEnding(player);

    } else {

        dialogue.textContent =
            "The interview has ended.";

        choices.innerHTML = "";

    }

}
