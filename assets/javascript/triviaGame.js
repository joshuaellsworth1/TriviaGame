var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");
var numCorrect = 0;
var output = [];

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
        question: "Who is Woody's best friend?",
        answers: {
            a: "Buzz Lightyear",
            b: "Toymaker",
            c: "Santa Clause"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is Buzz Lightyear's arch nemesis?",
        answers: {
            a: "Zurg",
            b: "Zadar",
            c: "Zorp"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of Jessie's previous owner?",
        answers: {
            a: "Emily",
            b: "Grace",
            c: "Sabrina",
        },
        correctAnswer: "a"
    }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();