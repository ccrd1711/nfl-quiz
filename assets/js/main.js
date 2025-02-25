let timerInterval; 
let currentQuestionIndex = 0; 
let score = 0;

function startQuiz(selectedTime) {
    timePerQuestion = selectedTime;
    timeLeft = timePerQuestion;
    document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;

    fadeOut(document.querySelector(".page-title"));

    fadeOut(document.getElementById("welcome-screen"), () => {
        fadeIn(document.querySelector(".quiz-container"));
        currentQuestionIndex = 0;
        showQuestion();
        console.log("Quiz started", timePerQuestion);
    });
}

document.getElementById("rules-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    const rulesElement = document.getElementById("rules");

    if (rulesElement.style.display === "none" || rulesElement.classList.contains("fade-out")) {
        fadeIn(rulesElement);
    } else {
        fadeOut(rulesElement);
    }
});

function fadeOut(element, callback) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
    setTimeout(() => {
        element.style.display = "none";
        if (callback) {
            callback();
        }
    }, 500);
}

function fadeIn(element) {
    element.style.display = "block";
    setTimeout(() => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
    }, 10);
}

//All questions 

const questions = [
    {
        question: "What division are the Detroit Lions and Minnesota Vikings in?",
        options: ["AFC North", "NFC North", "AFC West", "NFC South"],
        correctAnswer: 1
    },

    { 
        question: "What division are the New England Patriots and Miami Dolphins in?",
        options: ["AFC East", "NFC East", "AFC West", "NFC South"],
        correctAnswer: 0
    }, 

    { 
        question: "What division are the Dallas Cowboys and Philadelphia Eagles in?",
        options: ["AFC South", "NFC East", "AFC West", "NFC North"],
        correctAnswer: 1
    }, 

    { 
        question: "What division are the San Francisco 49ers and Seattle Seahawks in?",
        options: ["NFC South", "NFC East", "AFC North", "NFC West"],  
        correctAnswer: 3
    }, 

    { 
        question: "What division are the Kansas City Chiefs and Los Angeles Chargers in?",
        options: ["AFC East", "AFC North", "AFC West", "NFC West"],
        correctAnswer: 2
    }, 

    {
        question: "What division are the New Orleans Saints and Tampa Bay Buccaneers in?",
        options: ["AFC South", "NFC North", "AFC East", "NFC South"],
        correctAnswer: 3
    }, 

    {
        question: "What division are the Baltimore Ravens and Pittsburgh Steelers in?",
        options: ["AFC North", "NFC East", "AFC South", "NFC North"],
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
        options: ["AFC East", "NFC East", "AFC South", "NFC North"],
        correctAnswer: 0
    },

    {
        question: "What division are the Green Bay Packers and Chicago Bears in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC South"],
        correctAnswer: 1
    },

    {
        question: "What division are the Tennessee Titans and Jacksonville Jaguars in?",
        options: ["AFC North", "NFC West", "AFC South", "NFC East"],
        correctAnswer: 2
    },

    {
        question: "What division are the Denver Broncos and Las Vegas Raiders in?",
        options: ["AFC East", "NFC North", "AFC West", "NFC East"],
        correctAnswer: 2
    },

    {
        question: "What division are the Washington Football Team and New York Giants in?",
        options: ["AFC East", "NFC East", "NFC West", "NFC South"],
        correctAnswer: 1
    },

    {
        question: "What division are the Atlanta Falcons and Carolina Panthers in?",
        options: ["AFC North", "AFC East", "NFC North", "NFC South"],
        correctAnswer: 3
    },

    {
        question: "What division are the Cincinnati Bengals and Cleveland Browns in?",
        options: ["AFC North", "NFC North", "AFC South", "NFC East"],
        correctAnswer: 0
    },

    //Bonus question here??
];

function showQuestion() {
    console.log("showing question", currentQuestionIndex);
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.options[index];
        button.classList.remove("correct", "incorrect"); 
        button.style.backgroundColor = ""; //Reset background colour - mobile bug fix
        button.style.color = ""; //Reset text colour - mobile bug fix - both needed to clear previous answer styling
        button.onclick = () => checkAnswer(index);  
    });

    document.getElementById("quiz-progress").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    startTimer();   
}

//Checks whether answer is right or wrong 

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");

    if (selectedIndex === questionData.correctAnswer) {
        answerButtons[selectedIndex].classList.add("correct");
        score++;
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");
    }
    setTimeout(nextQuestion, 1000);
} 

//Moves to the next question after time runs out
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

//Resets timer and displays message when oot 
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = timePerQuestion;
    timerInterval = setInterval(() => {
        if (document.querySelector(".quiz-container").style.display !== "block") {
            return;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
            return; 
        }
        document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;
        timeLeft--;
    }, 1000);
}

function handleTimeout() {
    nextQuestion();
}

//Results and restart quiz
function showResults() {
    console.log("showResults function called");
    document.querySelector(".quiz-container").classList.add("fade-out");
    setTimeout(() => {
        console.log("Fading out quiz cont");
        document.querySelector(".quiz-container").style.display = "none";
        document.getElementById("results-screen").classList.remove("fade-out");
        document.getElementById("results-screen").classList.add("fade-in");
        document.getElementById("results-screen").style.display = "block";

        //Score display 
        document.getElementById("score-text").textContent = `You scored ${score} out of ${questions.length}!`;
        console.log("Score text", score);

        //Determines message based on user score 
        let message;
        if (score >= 0 && score <=4) {
            message = "Flatter than those balls Tom & co. deflated in 2015. Study, then try again!";
        } else if (score >= 5 && score <= 9) {
            message = "You embody the NFC South with this performance. Or the Giants. Either way, not great.";
        } else if (score >= 10 && score <= 13) {
            message = "You're a wildcard! Like the Raiders, you could be a contender, but you're not quite there yet.";
        } else if (score >= 14 && score <= 15) {
            message = "You're like Pete and Russ in Glendale - almost!";
        } else if (score === 16) {
            message = "You're a Super Bowl champ! You know your stuff!";
        }
        console.log("Message determined:", message);

        const messageElement = document.getElementById("results-message");
        messageElement.textContent = message;
        messageElement.style.display = "block";
        console.log("Message displayed", messageElement.textContent);
    }, 500); //matching duration of CSS transition
}

function retryQuiz() {
    document.getElementById("results-screen").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("results-screen").style.display = "none";
        document.getElementById("welcome-screen").classList.remove("fade-out");
        document.getElementById("welcome-screen").classList.add("fade-in");
        document.getElementById("welcome-screen").style.display = "block";
        score = 0;
        currentQuestionIndex = 0;
    }, 500);
}