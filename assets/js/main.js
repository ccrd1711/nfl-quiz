const questions = [
    {
        question: "What division are the Detroit Lions and Minnesota Vikings in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 1
    },

    { 
        question: "What division are the New England Patriots and Miami Dolphins in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 0
    }, 

    { 
        question: "What division are the Dallas Cowboys and Philadelphia Eagles in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 1
    }, 

    { 
        question: "What division are the San Francisco 49ers and Seattle Seahawks in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],  
        correctAnswer: 3
    }, 

    { 
        question: "What division are the Kansas City Chiefs and Los Angeles Chargers in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 2
    }, 

    {
        question: "What division are the New Orleans Saints and Tampa Bay Buccaneers in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 3
    }, 

    {
        question: "What division are the Baltimore Ravens and Pittsburgh Steelers in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 0
    }, 

    {   
        question: "What division are the Los Angeles Rams and Arizona Cardinals in?",
        options: ["AFC North", "NFC North", "AFC West", "NFC West"],
        correctAnswer: 3
    },

    {
        question: "What division are the Indianapolis Colts and Houston Texans in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 2
    },

    {
        question: "What division are the Buffalo Bills and New York Jets in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 0
    },

    {
        question: "What division are the Green Bay Packers and Chicago Bears in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 1
    },

    {
        question: "What division are the Tennessee Titans and Jacksonville Jaguars in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 2
    },

    {
        question: "What division are the Denver Broncos and Las Vegas Raiders in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 2
    },

    {
        question: "What division are the Washington Football Team and New York Giants in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC West"],
        correctAnswer: 1
    },

    {
        question: "What division are the Atlanta Falcons and Carolina Panthers in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 3
    },

    {
        question: "What division are the Cincinnati Bengals and Cleveland Browns in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 0
    },

];

let currentQuestionIndex = 0; // Index of the current question

function showQuestion() {
    const questionData = questions[currentQuestionIndex];

    document.getElementById("question").textContent = questionData.question;

    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.options[index];
        button.classList.remove("correct", "incorrect"); //to reset the colors
        button.onclick = () => checkAnswer(index);  
    });

    document.getElementById("quiz-progress").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

showQuestion();

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    if (selectedIndex === questionData.correctAnswer) {
        answerButtons[selectedIndex].classList.add("correct");
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert("This is the end of the quiz!");
        }
    }, 1000);
} 

