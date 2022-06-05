let btn = document.querySelectorAll(".btn");

let resetBtn = document.querySelector(".resetBtn");
let startBtn = document.querySelector(".startBtn");
let computerScoreBoard = document.querySelector(".computerScoreBoard");
let playerScoreBoard = document.querySelector(".playerScoreBoard");
let roundResult = document.querySelector(".roundResult");
let playerEmoji = document.querySelector(".playerEmoji");
let computerEmoji = document.querySelector(".computerEmoji");
let audio = document.querySelector(".btnSound");
let audioWin = document.querySelector(".winSound");
let audioLose = document.querySelector(".loseSound");
let audioReset = document.querySelector(".resetSound");
let audioSlotMachine = document.querySelector(".slotMachine");
let mainPic = document.querySelector(".mainPic");
let h1 = document.querySelector(".header");
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
resetBtn.disabled = true;
btn.forEach(function (btn) {
  btn.disabled = true;
});

startBtn.addEventListener("click", (e) => {
  mainPic.classList.add("disappear");
  h1.classList.add("h1Shrink");
  btn.forEach(function (btn) {
    btn.classList.add("appear");
  });

  audio.play();

  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
  playerChoice();

  btn.forEach(function (btn) {
    btn.disabled = false;
  });

  resetBtn.disabled = false;
  startBtn.disabled = true;
});

resetBtn.addEventListener("click", (e) => {
  audioReset.play();
  const timeDelay = setTimeout(resetGame, 500);
});

function resetGame() {
  roundResult = "";
  location.reload();
  startBtn.disabled = false;
  audioWin.play();
}

function playerChoice() {
  btn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      audioSlotMachine.play();
      flash();
      if (choice.classList.contains("rock")) {
        playerSelection = "rock";
      } else if (choice.classList.contains("scissors")) {
        playerSelection = "scissors";
      } else if (choice.classList.contains("paper")) {
        playerSelection = "paper";
      }

      gamePlay();
    });
  });
}

function flash() {
  setTimeout(flashPaper, 100);
  setTimeout(flashScissors, 200);
  setTimeout(flashRock, 300);
  setTimeout(flashScissors, 400);
  setTimeout(flashPaper, 500);
  setTimeout(flashRock, 600);
  setTimeout(flashScissors, 700);
  setTimeout(flashPaper, 800);
  setTimeout(flashRock, 900);
  setTimeout(flashPaper, 1000);
  setTimeout(flashScissors, 1100);
  setTimeout(flashRock, 1200);
  setTimeout(flashPaper, 1300);
  setTimeout(flashRock, 1400);
  setTimeout(flashScissors, 1500);
  setTimeout(flashPaper, 1600);
  setTimeout(flashRock, 1700);
  setTimeout(flashScissors, 1800);
  setTimeout(flashPaper, 1900);
  setTimeout(flashRock, 2000);
  setTimeout(flashScissors, 2100);
  setTimeout(flashRock, 2200);
}

function flashPaper() {
  playerEmoji.textContent = "📄";
  computerEmoji.textContent = "📄";
}
function flashScissors() {
  playerEmoji.textContent = "✂️";
  computerEmoji.textContent = "✂️";
}
function flashRock() {
  playerEmoji.textContent = "🪨";
  computerEmoji.textContent = "🪨";
}

function computerChoice() {
  if (Math.random() * 10 >= 0 && Math.random() * 10 <= 10 * (1 / 3)) {
    return "rock";
  } else if (
    Math.random() * 10 > 10 * (1 / 3) &&
    Math.random() * 10 <= 10 * (2 / 3)
  ) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound() {
  let computerSelection = computerChoice();

  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++computerScore;
    setTimeout(resultDelayRockLose, 2300);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++playerScore;
    setTimeout(resultDelayRockWin, 2300);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++computerScore;
    setTimeout(resultDelayPaperLose, 2300);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    ++playerScore;
    setTimeout(resultDelayPaperWin, 2300);

    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++computerScore;
    setTimeout(resultDelayScissorsLose, 2300);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++playerScore;
    setTimeout(resultDelayScissorsWin, 2300);
  } else if (playerSelection == computerSelection) {
    roundResult.textContent = "Tie game!";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
    if (playerSelection == "rock" && computerSelection == "rock") {
      setTimeout(rockTieDelay, 2300);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      setTimeout(paperTieDelay, 2300);
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      setTimeout(scissorsTieDelay, 2300);
    }
  }
}

function resultDelayRockLose() {
  roundResult.textContent = "You lose. Paper beats rock.";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
  playerEmoji.textContent = "🪨";
  computerEmoji.textContent = "📄";
}

function resultDelayRockWin() {
  roundResult.textContent = "You win! Rock beats scissors!";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
  playerEmoji.textContent = "🪨";
  computerEmoji.textContent = "✂️";
}

function resultDelayPaperWin() {
  roundResult.textContent = "You win! Paper beats rock.";
  playerEmoji.textContent = "📄";
  computerEmoji.textContent = "🪨";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
}

function resultDelayPaperLose() {
  playerEmoji.textContent = "📄";
  computerEmoji.textContent = "✂️";
  roundResult.textContent = "You lose. Scissors beats paper.";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
}

function resultDelayScissorsWin() {
  playerEmoji.textContent = "✂️";
  computerEmoji.textContent = "📄";
  roundResult.textContent = "You win! Scissors beats paper.";

  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
}

function resultDelayScissorsLose() {
  playerEmoji.textContent = "✂️";
  computerEmoji.textContent = "🪨";
  roundResult.textContent = "You lose. Rock beats scissors.";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
}

function TieDelay() {
  roundResult.textContent = "Tie game!";
  playerScoreBoard.textContent = "Player Score:" + playerScore;
  computerScoreBoard.textContent = "Computer Score:" + computerScore;
  if (playerSelection == "rock" && computerSelection == "rock") {
    playerEmoji.textContent = "🪨";
    computerEmoji.textContent = "🪨";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    computerEmoji.textContent = "📄";
    playerEmoji.textContent = "📄";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    computerEmoji.textContent = "✂️";
    playerEmoji.textContent = "✂️";
  }
}

function rockTieDelay() {
  playerEmoji.textContent = "🪨";
  computerEmoji.textContent = "🪨";
}

function paperTieDelay() {
  computerEmoji.textContent = "📄";
  playerEmoji.textContent = "📄";
}

function scissorsTieDelay() {
  computerEmoji.textContent = "✂️";
  playerEmoji.textContent = "✂️";
}

function gamePlay() {
  while (playerScore !== 5 && computerScore !== 5) {
    playRound();
    setTimeout(finalResultDelay, 2450);
    break;
  }
}

function finalResultDelay() {
  if (playerScore == 5) {
    roundResult.classList.add("winMsg");
    roundResult.textContent = "You are the champion!";

    audioWin.play();
    startBtn.disabled = true;
    resetBtn.disabled = false;
    btn.disabled = true;
    playerScoreBoard.classList.add("winner");
    computerScoreBoard.classList.add("loser");
  } else if (computerScore == 5) {
    roundResult.classList.add("loseMsg");
    roundResult.textContent =
      "Sorry, it looks like the computer is the winner.";

    audioLose.play();

    startBtn.disabled = true;
    resetBtn.disabled = false;
    btn.disabled = true;
    playerScoreBoard.classList.add("loser");
    computerScoreBoard.classList.add("winner");
  }
}
