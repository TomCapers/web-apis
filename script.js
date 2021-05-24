var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var startButton = document.getElementById("question");

var timerCount;
var timer;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var qAndA = [
  {
  question: "Words that start with Java",
  choiceA: "LikeSomeJava",
  choiceB: "LoveSomeJava",
  choiceC: "iLikeCoffee",
  choiceD: "JavaScript",
  },
  {question: "Words that end with Java",
  choiceA: "JavaLikeSome",
  choiceB: "JavaLoveSome",
  choiceC: "iLikeCoffee",
  choiceD: "ScriptLikeUwannaJava",
  }
]



function startGame() {
    
    timerCount = 60;
    
    startTimer()
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

//function addQuestion(){
  //question = qAndA.question;
  //for (var i = 0; i < qAndA.length; i++){

 // }
//}
var resetButton = document.querySelector(".reset-button");
function resetGame()


startButton.addEventListener("click", startGame);