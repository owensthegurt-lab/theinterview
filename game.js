// =====================================
// THE INTERVIEW
// GAME
// =====================================

// ==========================
// ELEMENTS
// ==========================

const titleScreen = document.getElementById("titleScreen");
const game = document.getElementById("game");

const startBtn = document.getElementById("startBtn");

const speaker = document.getElementById("speaker");
const dialogue = document.getElementById("dialogue");
const choices = document.getElementById("choices");

// ==========================
// SAVE DATA
// ==========================

let saveData = JSON.parse(localStorage.getItem("interviewSave")) || {

    playthroughs: 0,
    endingsUnlocked: [],
    achievements: [],
    lastEnding: null

};

// Change title based on previous playthroughs

const subtitle = document.getElementById("subtitle");

if (saveData.playthroughs >= 10) {

    subtitle.textContent = "I knew you'd return.";

}
else if (saveData.playthroughs >= 5) {

    subtitle.textContent = "You keep coming back.";

}
else if (saveData.playthroughs >= 1) {

    subtitle.textContent = "Welcome back.";

}

// ==========================
// GAME STATE
// ==========================

let currentQuestion = 0;

// ==========================
// PLAYER PROFILE
// ==========================

const player = {

    answers: [],

    stats: {

        honesty: 0,
        empathy: 0,
        courage: 0,
        fear: 0,
        curiosity: 0,
        obedience: 0,
        ambition: 0,
        morality: 0,

        hope: 0,
        observation: 0,
        confidence: 0

    }

};

// ==========================
// START GAME
// ==========================

startBtn.addEventListener("click", () => {

    titleScreen.classList.add("hidden");

    game.classList.remove("hidden");

    showQuestion();

});

// ==========================
// ROOM CHANGES
// ==========================

function updateRoom() {

    const clock = document.getElementById("clock");
    const windowRoom = document.getElementById("window");
    const portrait = document.getElementById("portrait");
    const light = document.getElementById("light");
    const shadow = document.getElementById("shadow");

    // Curious players notice changes.

    if (player.stats.curiosity >= 5) {

        windowRoom.style.opacity = ".35";

        portrait.style.transform = "rotate(6deg)";

    }

    // Fear darkens the room.

    if (player.stats.fear >= 5) {

        shadow.style.opacity = ".20";

    }

    // Defiant players anger the room.

    if (player.stats.obedience <= -3) {

        light.classList.add("fastFlicker");

    }

    // Time begins to fail.

    if (currentQuestion >= 15) {

        clock.textContent = "--:--";

    }

}

// ==========================
// SHOW QUESTION
// ==========================

function showQuestion() {

    if (currentQuestion >= QUESTIONS.length) {

        finishInterview();

        return;

    }

    updateRoom();

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

            // Apply stat changes

            for (const stat in choice.stats) {

                if (player.stats.hasOwnProperty(stat)) {

                    player.stats[stat] += choice.stats[stat];

                }

            }

            currentQuestion++;

            showQuestion();

        };

        choices.appendChild(button);

    });

}

// ==========================
// FINISH
// ==========================

function finishInterview() {

    if (typeof getEnding === "function") {

        getEnding(player);

    }
    else {

        speaker.textContent = "Interviewer";

        dialogue.textContent = "The interview has ended.";

        choices.innerHTML = "";

    }

}
