var score = 0;
var currentQuestion = 0;
var questions = [
    {
        title: "What color is the sky?",
        answers: ['yellow', 'blue', 'orange', 'green'],
        correct: 1
    },
    {
        title: "What color is grass?",
        answers: ['yellow', 'blue', 'orange', 'green'],
        correct: 3
    },
    {
        title: "What color is the sun?",
        answers: ['yellow', 'blue', 'orange', 'green'],
        correct: 0
    },
    {
        title: "What color is cheetos?",
        answers: ['yellow', 'blue', 'orange', 'green'],
        correct: 2
    },
]

$(document).ready(function () {
    $('.start a').click(function (e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });
    $('.quiz ul').on('click', 'li', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.quiz a').click(function (e) {
        e.preventDefault();
        if ($('li.selected').length) {
            var guess = $('li.selected').attr('id');
            console.log(guess);
        } else {
            alert('Please selected an answer');
        }
    })

});

function startQuiz() {

}

function showQuestion() {
    var question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz ul').append("<li id = '"+i+"'>" + question.answers[i] + "</li>");
    }
};

function checkAnswer() {

}

function showSummary() {

}