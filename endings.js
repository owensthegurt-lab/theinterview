// =====================================
// THE INTERVIEW
// ENDINGS
// =====================================

const ENDINGS = [

{

    id: "perfect_candidate",

    title: "The Perfect Candidate",

    description:
    "You answered with calm certainty and compassion. The interviewer closes the folder, stands, and quietly thanks you for your honesty. The door unlocks, but as you leave, someone else is already waiting outside to take your seat.",

    history:[
        "You valued honesty.",
        "You showed empathy.",
        "You remained composed."
    ],

    requirements:{
        honesty:6,
        empathy:5,
        courage:2
    }

},

{

    id:"hollow_crown",

    title:"The Hollow Crown",

    description:
    "Every answer pushed you toward power over people. By the end of the interview there is no applause, only silence. You leave with everything you wanted, but nothing worth keeping.",

    history:[
        "Ambition guided your choices.",
        "Mercy was rarely considered.",
        "Power mattered most."
    ],

    requirements:{
        ambition:6,
        morality:-2
    }

},

{

    id:"curious_mind",

    title:"The Door Left Open",

    description:
    "You never stopped asking questions. Eventually the interviewer stopped answering them. When the lights returned, the room was empty... except for the chair waiting for someone else.",

    history:[
        "Curiosity defined your interview.",
        "You questioned everything.",
        "Nothing satisfied you."
    ],

    requirements:{
        curiosity:7
    }

},

{

    id:"fearful",

    title:"The Quiet Prison",

    description:
    "Fear answered before you did. Long after the interview ended, you remained seated, convinced the safest choice was never to move again.",

    history:[
        "Fear shaped your decisions.",
        "You avoided unnecessary risks.",
        "The room became your world."
    ],

    requirements:{
        fear:7
    }

},

{

    id:"unknown",

    title:"Unknown Applicant",

    description:
    "No pattern ever truly emerged. Your answers contradicted one another until even the interviewer abandoned the report. For the first time in years, the file remained unfinished.",

    history:[
        "You defied categorization.",
        "Your personality stayed unpredictable.",
        "No single ending fit perfectly."
    ],

    requirements:{}

}

];

// =====================================
// SCORE AN ENDING
// =====================================

function scoreEnding(player, ending){

    let score = 0;

    for(const stat in ending.requirements){

        const required = ending.requirements[stat];
        const value = player.stats[stat] || 0;

        if(required >= 0){

            if(value >= required){

                score++;

            }

        }else{

            if(value <= required){

                score++;

            }

        }

    }

    return score;

}

// =====================================
// PICK BEST ENDING
// =====================================

function getEnding(player){

    let winner = ENDINGS[ENDINGS.length-1];

    let highestScore = -1;

    ENDINGS.forEach(ending=>{

        const score = scoreEnding(player, ending);

        if(score > highestScore){

            highestScore = score;
            winner = ending;

        }

    });

    showEnding(winner);

}

// =====================================
// SHOW ENDING
// =====================================

function showEnding(ending){

    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");
    const choices = document.getElementById("choices");

    speaker.textContent = "FINAL REPORT";

    dialogue.innerHTML = `

        <h2>${ending.title}</h2>

        <br>

        <p>${ending.description}</p>

        <br>

        <h3>History Will Remember...</h3>

        <ul>

            ${ending.history.map(item=>`<li>${item}</li>`).join("")}

        </ul>

    `;

    choices.innerHTML = "";

    // Save progress

    if(typeof saveData !== "undefined"){

        if(!saveData.endingsUnlocked.includes(ending.id)){

            saveData.endingsUnlocked.push(ending.id);

        }

        saveData.lastEnding = ending.id;

        saveData.playthroughs++;

        localStorage.setItem(

            "interviewSave",

            JSON.stringify(saveData)

        );

    }

    // Restart button

    const restart = document.createElement("button");

    restart.className = "choice";

    restart.textContent = "Play Again";

    restart.onclick = ()=>{

        location.reload();

    };

    choices.appendChild(restart);

}
