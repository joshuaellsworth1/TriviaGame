$(document).ready(function() {
var correctCounter = 0;
var incorrectCounter = 0;

var questions = [{
    question: "what is 2 + 2?",
    a: ["1", "2", "3", "4"],
    correct: "4"
},
{
    question: "Who is wooody's best friend?",
    a: ["sam", "gator", "buzz", "raymond"],
    correct: "buzz"
},
{
    question: "what is 2 + 0?",
    a: ["1", "2", "3", "4"],
    correct: "2"
},
{
    question: "what is 2 + 5?",
    a: ["1", "2", "3", "7"],
    correct: "7"
}
]

// $("#Question-guess").text(currentQuestion);
function displayQuestions() {
    for (var i = 0; i < questions.length; i++){
        $('#display').append("<p>" + questions[i].question + "</p>");
        for (var j = 0; j < questions[i].a.length; j++) {
            $("#display").append("<label><input type='radio' name='" + i + "' value='" + questions[i].a[j] + "'>" + questions[i].a[j] + "</label>");
        }
    }   
}

displayQuestions()

// for (var i = 0; i < questions.length; i++) {
//     var subButton = $("<button>");
//     subButton = addClass("submit-"
//     )
//     button.attr("data-answers", questions[i]);
//     $("#optionA").append(button);
// }

$(".btn").on("click", function() {
    $("#display").hide();
    for (var i = 0; i < questions.length; i++) {
        var radioValue = $("input[name='" + i + "']:checked").val();
        if (radioValue === questions[i].correct) {
            correctCounter++;
        } else {
            incorrectCounter++;
        }
    }
    alert("correct guesses" + correctCounter);
    alert("incorrect guesses" + incorrectCounter);
    $("#results").append("<div>")
    results.text();

})
});

// I didn't have enough time to figure out how the clock function works. This is the interval example from class.
// var number = 20;

//     var intervalId;

//     function run() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }

//     function decrement() {

//       number--;

//       $("#number").html("<h2>" + number + "</h2>");

//       if (number === 0) {

//         stop();

//         alert("Time Up!");
//       }
//     }

//     function stop() {

//       clearInterval(intervalId);
//     }

//     run();



//Notes

//1. to compare userInputs, create a variable to hold the userInputValue that is checked
//2. loop through the input variable
//3. if statement inside the input loop

//1. create results div
//2. append results to created results div

