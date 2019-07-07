$(document).ready(function () {
    var counter = 60;
    var intevalId;
    var correct = 0;

    $("#stop").on("click", stop);
    $("#resume").on("click", run);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        counter--;
        $("#show-counter").html("<h1>" + counter + "</h1>");
        if (counter === 0) {
            stop();
            alert("Time's Up!");
        }
    }
});

var questions = [
    [1, "What is the capital of Pennsylvania", "harrisburg"],
    [2, "Where is Canada located?", "above the united states"],
    [3, "Is pikachu a rat or a mouse?", "a mouse"]
];

var answer;
var reponse;

for (var i = 0; i < questions.length; i += 1) {
    answer = prompt(questions[i]);
    response = answer.toLowerCase();
}

if (response === questions[i][2]); {
    document.write("correct!");
} else {
    document.write("wrong)");
}