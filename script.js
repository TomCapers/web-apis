var body = document.body;
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionArea = document.createElement("div");
var answerArea = document.createElement("div");

body.appendChild(questionArea);
questionArea.appendChild(answerArea);

var timerCount;
var timer;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var qS = ["What word starts with Java?", "What word ends with Java?"];
var choiceA = ["LikeSomeJava", "JavaLikeSome"];
var choiceB = ["LoveSomeJava", "JavaLoveSome"];
var choiceC = ["iLikeCoffee", "iLikeCoffee"];
var choiceD = ["JavaScript", "ScriptLikeUwannaJava"];
  



function startGame() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;  
  startTimer();
  addQuestion();

  console.log(startGame);
}


function startTimer() {
      timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        
      }
    }, 1000);
}

function addQuestion(){

  var question1 = document.createElement("div");
  question1.textContent = qS[0];
  questionArea.appendChild(question1);

  var btn1 = document.createElement("button");
  btn1.textContent = choiceA[0];
  question1.appendChild(btn1);

  var btn2 = document.createElement("button");
  btn2.textContent = choiceB[0];
  question1.appendChild(btn2);

  var btn3 = document.createElement("button");
  btn3.textContent = choiceC[0];
  question1.appendChild(btn3);

  var btn4 = document.createElement("button");
  btn4.textContent = choiceD[0];
  question1.appendChild(btn4);


}
  //for (var i = 0; i < qAndA.length; i++){
  //  questionArea.textContent = qAndA[i];
  //  console.log(qAndA);

//  }

//var resetButton = document.querySelector(".reset-button");
//function resetGame()


startButton.addEventListener("click", startGame);