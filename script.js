var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timerCount;
var timer;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;

// Start Game function
function startGame() {
    isWin = false;
    timerCount = 60;
    
    startTimer()
  }

// Timer Function
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

startButton.addEventListener("click", startGame);