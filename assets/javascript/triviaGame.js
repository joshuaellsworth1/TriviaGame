// $(document).ready(function() {

//     function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
//     }
//     console.log(Question);

//     Question.prototype.correctAnswer = function (choice) {
//     return choice === this.answer;

//     }

//     function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
//     }

//     Quiz.prototype.getQuestionIndex = function () {
//     return this.questions[this.questionIndex];
//     }

//     Quiz.prototype.isEnded = function () {
//     return this.questions.length === this.questionIndex;
//     }

//     Quiz.prototype.guess = function (answer) {
//     this.questionIndex++;

//     if (this.getQuestionIndex().correctAnswer(answer)) {
//         this.score++;
//     }
//     this.question++;
//     }

//     function populate() {
//     if (quiz.isEnded()) {
//         showScore();
//     }
//     else {
//         //show question
//         var element = document.getElementById("question");
//         element.innerHTML = quiz.getQuestionIndex().text;

//         //show choices
//         var choices = quiz.getQuestionIndex().choices;
//         for (var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("choice" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
//         showProgress();
//     }
//     }   ;

//     function guess(id, guess) {
//     var button = document.getElementById(id);
//     $("button").onclick = function () {
//         $("quiz").guess(guess);
//         populate();
//     }
//     }

//     function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
//     }

//     function showScore() {
//     var gameOverHTML = "<h1>Result</h1>";
//     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "<h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHTML;
//     }

//     var questions = [
//     new question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
//     new question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
//     new question("There are ___ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
//     new question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All")
//     ];
//     console.log(questions);
//     var quiz = new Quiz(questions);

//     populate();
// });

