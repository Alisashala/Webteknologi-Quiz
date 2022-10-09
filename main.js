//log every question
const questionsInQuiz = document.querySelectorAll('.questions')
console.log(questionsInQuiz);

//log question containers
const questionContainer = document.querySelectorAll('.container')
console.log(questionContainer);

//log buttons
const getElementFromId = document.querySelectorAll('button')
console.log(getElementFromId);

//block first box
const blockFirstBox = document.getElementsByClassName("container")[0].style.display = "block";

//set "next" button
function next(id) {

    document.getElementsByClassName('container')[id - 1].style.display = "none";

    document.getElementsByClassName('container')[id].style.display = "block";
}

//alert result
function result() {
    let score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    console.log(score)

    if (score === 3) {
        alert("PERFECT!! You got " + score + "/3 right")
    } else if (score === 2) {
        alert("Very good! You got " + score + "/3 right")
    } else if (score === 1) {
        alert("OK. You got " + score + "/3 right")
    } else if (score === 0) {
        alert("You got " + score + "/3 right. Try again!")
    }
}

