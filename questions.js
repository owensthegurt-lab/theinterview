// ======================================
// THE INTERVIEW
// QUESTIONS
// ======================================

const QUESTIONS = [

{
    speaker: "Interviewer",

    text: "Good morning. Thank you for coming. Shall we begin?",

    choices: [
        { text: "Yes.", effect: "calm" },
        { text: "Who are you?", effect: "curious" },
        { text: "Where am I?", effect: "fear" },
        { text: "I want to leave.", effect: "defiant" }
    ]
},

{
    speaker: "Interviewer",

    text: "Tell me... what kind of person do you believe you are?",

    choices: [
        { text: "A good person.", effect: "good" },
        { text: "A bad person.", effect: "evil" },
        { text: "Just a person.", effect: "neutral" },
        { text: "I'm still figuring that out.", effect: "honest" }
    ]
},

{
    speaker: "Interviewer",

    text: "If nobody would ever know, would you steal to save someone you love?",

    choices: [
        { text: "Yes.", effect: "sacrifice" },
        { text: "No.", effect: "lawful" },
        { text: "It depends.", effect: "pragmatic" },
        { text: "I don't know.", effect: "uncertain" }
    ]
},

{
    speaker: "Interviewer",

    text: "When was the last time you lied?",

    choices: [
        { text: "Recently.", effect: "honest" },
        { text: "Never.", effect: "liar" },
        { text: "I don't remember.", effect: "memory" },
        { text: "Why does that matter?", effect: "defiant" }
    ]
},

{
    speaker: "Interviewer",

    text: "Would you rather lose every memory you've ever made... or never make another one?",

    choices: [
        { text: "Lose my memories.", effect: "past" },
        { text: "Never make another.", effect: "future" },
        { text: "Neither.", effect: "hope" },
        { text: "I can't answer that.", effect: "fear" }
    ]
},

{
    speaker: "Interviewer",

    text: "Have you ever hurt someone and convinced yourself it was for the right reason?",

    choices: [
        { text: "Yes.", effect: "guilt" },
        { text: "No.", effect: "pure" },
        { text: "Maybe.", effect: "gray" },
        { text: "Everyone has.", effect: "cold" }
    ]
},

{
    speaker: "Interviewer",

    text: "If you could erase one person from history, would you?",

    choices: [
        { text: "Yes.", effect: "erase" },
        { text: "No.", effect: "mercy" },
        { text: "Only if I had to.", effect: "justice" },
        { text: "Maybe myself.", effect: "self" }
    ]
},

{
    speaker: "Interviewer",

    text: "Do you think people deserve second chances?",

    choices: [
        { text: "Always.", effect: "mercy" },
        { text: "Rarely.", effect: "judgment" },
        { text: "They have to earn them.", effect: "balance" },
        { text: "Some don't.", effect: "grim" }
    ]
},

{
    speaker: "Interviewer",

    text: "Have you noticed anything... different about this room?",

    choices: [
        { text: "Yes.", effect: "aware" },
        { text: "No.", effect: "blind" },
        { text: "What do you mean?", effect: "confused" },
        { text: "You're trying to scare me.", effect: "fearless" }
    ]
},

{
    speaker: "Interviewer",

    text: "Final question... Why do you think you're here?",

    choices: [
        { text: "A job interview.", effect: "job" },
        { text: "To be judged.", effect: "judged" },
        { text: "To judge you.", effect: "judge" },
        { text: "I honestly don't know.", effect: "unknown" }
    ]
}

];
