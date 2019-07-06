var i;
var counter = 60;
var intevalId;

$("#stop").on("click", stop);
$("#resume").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    counter--;
    $("#show-counter").html("<h2>" + counter + "</h2>");
    if (counter === 0) {
    stop();
    alert("Time's Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}
run();

var questions = [{
    question1: "what is the capital of pennsylvania",
    choice1: "philadelphia",
    choice2: "harrisburg",
    answer: "1"
},
{
    question2: "where is canada located",
    choice1: "above the united states",
    choice2: "below the united states",
    answer: "1"
}
]

function progressRender() {
    for (i = 0; i < questions.length; i++) {

    }
}

function rightAnswer() {
    $("#runningQuestion").alert(function () {
    }
}

function wrongAnswer() {
    $("#runningQuestion").alert(function () {
    }
}

var questions = questions.length - 1;
var runningQuestion = 0;

function renderQuestion() {
    var q = questions[runningQuestion];
    choice1 = q.choice1;
    choice2 = q.choice2;

    runningQuestion++;
}