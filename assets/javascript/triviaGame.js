var score = 0;
var currentQuestion = 0;

var questions = [ {
    q: "what is 2 + 2?"
    a: ["1", "2", "3", "4"],
    correct: 3
}, 
{
    q: "what is 2 + 1?"
    a: ["1", "2", "3", "4"],
    correct: 2
},
{
    q: "what is 2 + 2?"
    a: ["1", "2", "3", "4"],
    correct: 3
},
{
    q: "what is 2 + 2?"
    a: ["1", "2", "3", "4"],
    correct: 3
}
]

var question = $('questions');
var answers = $('a');
var correctAns = $('correct');
var submit = $('submit');
var answers = $('answers');
var array = questions.length;

function questionList (questionIndex) {
    var q = questions[questionIndex];
    
}