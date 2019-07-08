var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");
var numCorrect = 0;
var output = [];


var myQuestions = [{
    question: "What bear is best?",
    answers: {
        a: "Polar Bear",
        b: "Black Bear",
        c: "Care Bear"
    },
    correctAnswer: "b"
},
{
    question: "What is the best site ever created?",
    answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
},
{
    question: "Where is Waldo really?",
    answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
}
];

(function () {
    function buildQuiz() {
        myQuestions.forEach((currentQuestion, questionNumber) => {
            var answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            output.push(
                `<div class = "question" > ${currentQuestion.question} </div>
          <div class = "answers" > ${
                answers.join("")
                } </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        var answerContainers = quizContainer.querySelectorAll(".answers");

        myQuestions.forEach((currentQuestion, questionNumber) => {

            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var myQuestions = [{
        question: "What bear is best?",
        answers: {
            a: "Polar Bear",
            b: "Black Bear",
            c: "Care Bear"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the best site ever created?",
        answers: {
            a: "SitePoint",
            b: "Simple Steps Code",
            c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is Waldo really?",
        answers: {
            a: "Antarctica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
    }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();