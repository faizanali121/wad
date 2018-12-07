var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {

    currentQuestion=currentQuestion+1;
    displayCurrentQuestion();
}


function displayCurrentQuestion()
{
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("choice-list").innerHTML = "none";
    for(var i=0; i < 4; i++)
    {
        document.getElementById("choice-list").innerHTML += '<li> <input type="radio" name="t1" value="'+i+'"> '+questions[currentQuestion].choices[i] + '</li>';
    }
    if(document.querySelector("input[name ='t1']:checked").value===questions[currentQuestion].correctAnswer)
    {
        correctAnswers++;

    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}