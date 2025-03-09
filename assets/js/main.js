let timerInterval; // Stores the interval for the timer
let currentQuestionIndex = 0; //Tracks current question number
let score = 0; //Tracks the user's score
let timePerQuestion; // Stores time limit per question
let timeLeft; // Remaining time for the current question

//Fades in the page title and welcome screen
document.addEventListener("DOMContentLoaded", function () {
    const pageTitleNav = document.querySelector(".page-title");
    const welcomeScreen = document.getElementById("welcome-screen");
    const startButton = document.getElementById("start-button");

    //fades in the elements
    function fadeInNav() {
        pageTitleNav.style.opacity = "1";
    }

    //Timeout 
    setTimeout(fadeInNav, 3000);

    //Start button event listener
    startButton.addEventListener("click", function() {
        fadeOut(pageTitleNav, function() {
            fadeIn(welcomeScreen);
        });
    });
});

// Toggles the visibility of the rules section when the rules button is clicked.
document.getElementById("rules-toggle").addEventListener("click", (e) => {
    e.preventDefault();
    const rulesElement = document.getElementById("rules");

    if (rulesElement.style.display === "none" || rulesElement.classList.contains("fade-out")) {
        fadeIn(rulesElement);
    } else {
        fadeOut(rulesElement);
    }
});

// Fades out the element and then sets its display to none
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

// Fades in the element and then sets its display to block
function fadeIn(element) {
    element.style.display = "block";
    setTimeout(() => {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
    }, 10);
}

//Starts quiz and sets time limit per question, updates timer and fades in quiz container
function startQuiz(selectedTime) {
    timePerQuestion = selectedTime;
    timeLeft = timePerQuestion;
    document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;

    fadeOut(document.querySelector(".page-title"));

    fadeOut(document.getElementById("welcome-screen"), () => {
        fadeIn(document.querySelector(".quiz-container"));
        currentQuestionIndex = 0;
        showQuestion();
    });
}

//Starts quiz with selected time limit (10s for easy, 5s for hard)
document.getElementById("easy-mode").addEventListener("click", function() {
    startQuiz(10);
});

document.getElementById("hard-mode").addEventListener("click", function() {
    startQuiz(5);
});

const retryButton = document.getElementById("retry-button");

//Displays the current question and options, resets button styles and states
//Starts the timer for the question
function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.options[index];
        button.classList.remove("correct", "incorrect"); 
        button.style.backgroundColor = ""; 
        button.style.color = "";
        button.onclick = () => checkAnswer(index);  
    });

    //Clears focus from answer buttons after click - mobile issue - test this
    setTimeout(() => {
        answerButtons.forEach(button => {
            button.blur();
            button.classList.remove("hover", "focus"); //Remove any lingering states
            button.style.pointerEvents = "auto"; //Re-enable pointer events
        });
    }, 10);

    document.getElementById("quiz-progress").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    startTimer();   
}

//Starts the timer and counts. When time runs out it clears the interval and moves to the next question
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

//Checks whether answer is right or wrong and moves to next question
function checkAnswer(selectedIndex) {
    if (currentQuestionIndex >= questions.length) return; 

    const questionData = questions[currentQuestionIndex];
    if (!questionData) return; 

    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach(button => button.disabled = true);

    if (selectedIndex === questionData.correctAnswer) {
        answerButtons[selectedIndex].classList.add("correct");
        score++;
    } else {
        answerButtons[selectedIndex].classList.add("incorrect");
    }

    setTimeout(() => {
        nextQuestion(); 
        // Re-enabled buttons after moving to the next question - spamming bug
        answerButtons.forEach(button => button.disabled = false);
    }, 1000);
} 

//Moves to the next question after time runs out after user input
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

//If triggered above, moves to the next question when time runs out
function handleTimeout() {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    }
}

//Displays the results screen and message based on user score
function showResults() {
    document.querySelector(".quiz-container").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".quiz-container").style.display = "none";
        document.getElementById("results-screen").classList.remove("fade-out");
        document.getElementById("results-screen").classList.add("fade-in");
        document.getElementById("results-screen").style.display = "block";

        //Score display 
        document.getElementById("score-text").textContent = `You scored ${score} out of ${questions.length}!`;

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

        const messageElement = document.getElementById("results-message");
        messageElement.textContent = message;
        messageElement.style.display = "block";
    }, 500); //matching duration of CSS transition
}

// Allows user to share their result
document.getElementById("share-score").addEventListener("click", () => {
    const score = document.getElementById("score-text").textContent;
    const shareText = `I scored ${score} in the Quickfire NFL Divisions Quiz! Can you beat me?`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: "NFL Quiz Score",
            text: shareText,
            url: shareUrl
        }).catch(err => {
    });
 } else {
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        alert("Link copied! Share it with your friends!");
    }
});

//Resets quiz and fades in welcome screen when pressed
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

retryButton.addEventListener("click", retryQuiz);

//All questions for the quiz

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
        question: "What division are the Washington Commanders and New York Giants in?",
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

];