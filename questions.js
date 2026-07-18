// =====================================
// THE INTERVIEW
// QUESTIONS
// Part 1 (1-10)
// =====================================

const QUESTIONS = [

{
    speaker: "Interviewer",

    text: "Good morning. Shall we begin?",

    choices: [

        {
            text: "Yes.",
            stats: {
                obedience: 2,
                courage: 1
            }
        },

        {
            text: "Who are you?",
            stats: {
                curiosity: 2,
                obedience: -1
            }
        },

        {
            text: "Where am I?",
            stats: {
                fear: 2,
                curiosity: 1
            }
        },

        {
            text: "I'd rather leave.",
            stats: {
                courage: 2,
                obedience: -2
            }
        }

    ]
},

{
    speaker: "Interviewer",

    text: "Tell me... what kind of person are you?",

    choices: [

        {
            text: "A good person.",
            stats:{
                morality:2,
                honesty:1
            }
        },

        {
            text:"I'm not sure.",
            stats:{
                honesty:2,
                curiosity:1
            }
        },

        {
            text:"Whatever I need to be.",
            stats:{
                ambition:2,
                morality:-1
            }
        },

        {
            text:"That depends who's asking.",
            stats:{
                curiosity:1,
                honesty:-1,
                ambition:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"Have you ever lied to protect someone?",

    choices:[

        {
            text:"Yes.",
            stats:{
                empathy:2,
                honesty:-1
            }
        },

        {
            text:"No.",
            stats:{
                honesty:2
            }
        },

        {
            text:"Everyone has.",
            stats:{
                morality:-1,
                honesty:-1
            }
        },

        {
            text:"I don't remember.",
            stats:{
                fear:1,
                curiosity:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"Would you steal to save someone you love?",

    choices:[

        {
            text:"Without hesitation.",
            stats:{
                empathy:2,
                morality:-1
            }
        },

        {
            text:"No.",
            stats:{
                morality:1,
                obedience:2
            }
        },

        {
            text:"It depends.",
            stats:{
                curiosity:1,
                honesty:1
            }
        },

        {
            text:"I'd find another way.",
            stats:{
                courage:2,
                empathy:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"When was the last time you cried?",

    choices:[

        {
            text:"Recently.",
            stats:{
                honesty:2,
                empathy:1
            }
        },

        {
            text:"Years ago.",
            stats:{
                courage:1,
                empathy:-1
            }
        },

        {
            text:"I don't cry.",
            stats:{
                ambition:1,
                empathy:-2
            }
        },

        {
            text:"Why do you care?",
            stats:{
                obedience:-1,
                curiosity:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"If no one would ever know... would you commit murder?",

    choices:[

        {
            text:"Never.",
            stats:{
                morality:3,
                empathy:2
            }
        },

        {
            text:"If I had to.",
            stats:{
                courage:1,
                morality:-1
            }
        },

        {
            text:"Yes.",
            stats:{
                ambition:2,
                morality:-3
            }
        },

        {
            text:"I refuse to answer.",
            stats:{
                fear:2,
                honesty:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"Do you believe people deserve a second chance?",

    choices:[

        {
            text:"Always.",
            stats:{
                empathy:3
            }
        },

        {
            text:"Most do.",
            stats:{
                empathy:1,
                honesty:1
            }
        },

        {
            text:"Very few.",
            stats:{
                morality:-1,
                ambition:1
            }
        },

        {
            text:"Nobody changes.",
            stats:{
                empathy:-2,
                fear:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"Have you noticed anything unusual about this room?",

    choices:[

        {
            text:"The light keeps flickering.",
            stats:{
                curiosity:2
            }
        },

        {
            text:"The clock hasn't moved.",
            stats:{
                curiosity:2,
                honesty:1
            }
        },

        {
            text:"No.",
            stats:{
                obedience:1
            }
        },

        {
            text:"You're trying to distract me.",
            stats:{
                courage:1,
                curiosity:1
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"Do you trust me?",

    choices:[

        {
            text:"Yes.",
            stats:{
                obedience:2
            }
        },

        {
            text:"No.",
            stats:{
                courage:2
            }
        },

        {
            text:"I don't know.",
            stats:{
                honesty:2
            }
        },

        {
            text:"Should I?",
            stats:{
                curiosity:2
            }
        }

    ]
},

{
    speaker:"Interviewer",

    text:"One last question... are you afraid of what's behind that door?",

    choices:[

        {
            text:"Yes.",
            stats:{
                fear:3
            }
        },

        {
            text:"No.",
            stats:{
                courage:3
            }
        },

        {
            text:"What's behind it?",
            stats:{
                curiosity:3
            }
        },

        {
            text:"I think it's already too late.",
            stats:{
                honesty:2,
                fear:1
            }
        }

    ]
}

];
// =====================================
// QUESTIONS 11-20
// =====================================

{

    speaker:"Interviewer",

    text:"If I told you we've already had this conversation before... would you believe me?",

    choices:[

        {
            text:"Yes.",
            stats:{ curiosity:2, honesty:1 }
        },

        {
            text:"No.",
            stats:{ courage:1, obedience:-1 }
        },

        {
            text:"I don't know.",
            stats:{ honesty:2 }
        },

        {
            text:"Prove it.",
            stats:{ courage:2, curiosity:1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"How many doors did you walk through before entering this room?",

    choices:[

        {
            text:"One.",
            stats:{ honesty:1 }
        },

        {
            text:"Two.",
            stats:{ curiosity:1 }
        },

        {
            text:"I can't remember.",
            stats:{ fear:2 }
        },

        {
            text:"There wasn't a door.",
            stats:{ curiosity:2, courage:1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Would you rather know the truth... or be happy?",

    choices:[

        {
            text:"The truth.",
            stats:{ curiosity:3 }
        },

        {
            text:"Happiness.",
            stats:{ empathy:2 }
        },

        {
            text:"Both.",
            stats:{ honesty:1, curiosity:1 }
        },

        {
            text:"Neither exists.",
            stats:{ fear:1, morality:-1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Have you noticed that I haven't written anything down?",

    choices:[

        {
            text:"Yes...",
            stats:{ curiosity:2 }
        },

        {
            text:"No.",
            stats:{ obedience:1 }
        },

        {
            text:"You don't need to.",
            stats:{ honesty:1 }
        },

        {
            text:"Who are you really?",
            stats:{ courage:2, curiosity:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"If everyone forgot tomorrow... would your choices still matter?",

    choices:[

        {
            text:"Yes.",
            stats:{ morality:2 }
        },

        {
            text:"No.",
            stats:{ morality:-2 }
        },

        {
            text:"Only to me.",
            stats:{ honesty:2 }
        },

        {
            text:"That's why they matter.",
            stats:{ curiosity:1, morality:1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"When you entered this room... was the window already there?",

    choices:[

        {
            text:"Yes.",
            stats:{ honesty:1 }
        },

        {
            text:"No.",
            stats:{ curiosity:2 }
        },

        {
            text:"I'm not sure anymore.",
            stats:{ fear:2 }
        },

        {
            text:"There isn't a window.",
            stats:{ curiosity:3 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Do you think I'm interviewing you... or studying you?",

    choices:[

        {
            text:"Interviewing.",
            stats:{ obedience:1 }
        },

        {
            text:"Studying.",
            stats:{ curiosity:2 }
        },

        {
            text:"Both.",
            stats:{ honesty:1, curiosity:1 }
        },

        {
            text:"Neither.",
            stats:{ courage:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"If opening that door ended someone else's life... would you still leave?",

    choices:[

        {
            text:"No.",
            stats:{ empathy:3 }
        },

        {
            text:"Yes.",
            stats:{ ambition:2, morality:-2 }
        },

        {
            text:"I'd need proof.",
            stats:{ honesty:2 }
        },

        {
            text:"I'd stay here.",
            stats:{ fear:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Have you answered every question truthfully?",

    choices:[

        {
            text:"Yes.",
            stats:{ honesty:2 }
        },

        {
            text:"No.",
            stats:{ honesty:-1 }
        },

        {
            text:"I tried.",
            stats:{ honesty:1 }
        },

        {
            text:"Does it matter?",
            stats:{ curiosity:1, obedience:-1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Would you like to ask me a question before we continue?",

    choices:[

        {
            text:"Who are you?",
            stats:{ curiosity:3 }
        },

        {
            text:"What happens after this?",
            stats:{ fear:1, curiosity:2 }
        },

        {
            text:"Who am I?",
            stats:{ honesty:2, curiosity:2 }
        },

        {
            text:"No questions.",
            stats:{ obedience:2 }
        }

    ]

},// =====================================
// QUESTIONS 21-30
// =====================================

{

    speaker:"Interviewer",

    text:"Interesting. Your heartbeat increased when I asked that last question.",

    choices:[

        {
            text:"How could you know that?",
            stats:{ curiosity:2, fear:1 }
        },

        {
            text:"You're bluffing.",
            stats:{ courage:2 }
        },

        {
            text:"...Maybe.",
            stats:{ honesty:2 }
        },

        {
            text:"Stop playing games.",
            stats:{ courage:1, obedience:-2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Do you believe a person can truly change?",

    choices:[

        {
            text:"Everyone can.",
            stats:{ empathy:2, morality:1 }
        },

        {
            text:"Very few do.",
            stats:{ honesty:1 }
        },

        {
            text:"No.",
            stats:{ empathy:-2 }
        },

        {
            text:"I've changed.",
            stats:{ honesty:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"If this room vanished tomorrow... would anyone know you were here?",

    choices:[

        {
            text:"Yes.",
            stats:{ hope:2 }
        },

        {
            text:"No.",
            stats:{ fear:2 }
        },

        {
            text:"I don't know.",
            stats:{ honesty:1 }
        },

        {
            text:"Would you?",
            stats:{ curiosity:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Tell me... what color are my eyes?",

    choices:[

        {
            text:"Brown.",
            stats:{ observation:2 }
        },

        {
            text:"Blue.",
            stats:{ observation:1 }
        },

        {
            text:"I can't tell.",
            stats:{ honesty:2 }
        },

        {
            text:"You've never opened them.",
            stats:{ curiosity:3 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Have you noticed how quiet it's become?",

    choices:[

        {
            text:"Yes...",
            stats:{ curiosity:2 }
        },

        {
            text:"It was always quiet.",
            stats:{ honesty:1 }
        },

        {
            text:"I hear something.",
            stats:{ fear:2 }
        },

        {
            text:"You're distracting me.",
            stats:{ courage:1 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Suppose I offered you another life. Someone else's. Would you accept it?",

    choices:[

        {
            text:"No.",
            stats:{ morality:2, empathy:2 }
        },

        {
            text:"Yes.",
            stats:{ ambition:2, morality:-2 }
        },

        {
            text:"Whose life?",
            stats:{ curiosity:2 }
        },

        {
            text:"I'd sacrifice my own instead.",
            stats:{ courage:2, empathy:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"When you leave this room... what do you think you'll remember?",

    choices:[

        {
            text:"Everything.",
            stats:{ hope:1 }
        },

        {
            text:"Nothing.",
            stats:{ fear:2 }
        },

        {
            text:"Only the important parts.",
            stats:{ honesty:2 }
        },

        {
            text:"You.",
            stats:{ curiosity:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Do you think I've enjoyed speaking with you?",

    choices:[

        {
            text:"Yes.",
            stats:{ confidence:2 }
        },

        {
            text:"No.",
            stats:{ honesty:1 }
        },

        {
            text:"I can't tell.",
            stats:{ curiosity:1 }
        },

        {
            text:"You're incapable of enjoying anything.",
            stats:{ courage:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Look behind you.",

    choices:[

        {
            text:"Turn around.",
            stats:{ curiosity:2, courage:1 }
        },

        {
            text:"Stay seated.",
            stats:{ obedience:2 }
        },

        {
            text:"There is nothing there.",
            stats:{ honesty:1 }
        },

        {
            text:"You're lying.",
            stats:{ courage:2 }
        }

    ]

},

{

    speaker:"Interviewer",

    text:"Final question... If I asked you to take my place, would you?",

    choices:[

        {
            text:"Yes.",
            stats:{ ambition:3 }
        },

        {
            text:"No.",
            stats:{ morality:2 }
        },

        {
            text:"Only if I had no choice.",
            stats:{ honesty:1, fear:1 }
        },

        {
            text:"Who said this was your place?",
            stats:{ curiosity:3, courage:2 }
        }

    ]

}
