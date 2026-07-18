// =====================================
// THE INTERVIEW
// ENDINGS
// =====================================

const ENDINGS = [

{
    id: "perfect_candidate",

    title: "The Perfect Candidate",

    description:
    "Every answer fit neatly into a box someone else had prepared long before you arrived. When the interview ended, the interviewer smiled as though he'd finally found what he was looking for. The door opened... but only for one of you.",

    history: [
        "You answered calmly.",
        "You showed mercy when questioned.",
        "You noticed what others ignored."
    ],

    requires: [
        "calm",
        "mercy",
        "aware"
    ]
},

{
    id: "hollow_crown",

    title: "The Hollow Crown",

    description:
    "Power came naturally to you, but every answer left the room a little colder. By the time the final question was asked, there was nothing left to rule except silence. Some victories echo longer than kingdoms.",

    history: [
        "You judged others harshly.",
        "You embraced difficult choices.",
        "You valued control over compassion."
    ],

    requires: [
        "judgment",
        "erase",
        "cold"
    ]
},

{
    id: "unknown",

    title: "The Unknown Applicant",

    description:
    "The interview ended without certainty. Your answers contradicted one another until even the interviewer hesitated. For the first time, the file on the table remained unfinished.",

    history: [
        "Your choices never settled into one path.",
        "You remained unpredictable.",
        "Even the interviewer couldn't define you."
    ],

    requires: []
}

];

// =====================================
// PICK ENDING
// =====================================

function getEnding(player){

    let bestEnding = ENDINGS[ENDINGS.length - 1];
    let bestScore = -1;

    ENDINGS.forEach(ending => {

        let score = 0;

        ending.requires.forEach(requirement => {

            if(player.effects.includes(requirement)){
                score++;
            }

        });

        if(score > bestScore){

            bestScore = score;
            bestEnding = ending;

        }

    });

    showEnding(bestEnding);

}

// =====================================
// DISPLAY ENDING
// =====================================

function showEnding(ending){

    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");
    const choices = document.getElementById("choices");

    speaker.textContent = "ENDING";

    dialogue.innerHTML = `
        <h2 style="margin-bottom:15px;">${ending.title}</h2>

        <p style="line-height:1.7;">
            ${ending.description}
        </p>

        <br>

        <h3>History Will Remember</h3>

        <ul style="margin-top:10px; line-height:1.8;">

            ${ending.history.map(item => `<li>${item}</li>`).join("")}

        </ul>
    `;

    choices.innerHTML = "";

}
