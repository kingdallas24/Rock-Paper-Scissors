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
      audio.play();
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
    roundResult.textContent = "You lose. Paper beats rock.";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
    playerEmoji.textContent = "🪨";
    computerEmoji.textContent = "📄";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++playerScore;
    roundResult.textContent = "You win! Rock beats scissors!";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
    playerEmoji.textContent = "🪨";
    computerEmoji.textContent = "✂️";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++computerScore;
    playerEmoji.textContent = "📄";
    computerEmoji.textContent = "✂️";
    roundResult.textContent = "You lose. Scissors beats paper.";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    ++playerScore;
    roundResult.textContent = "You win! Paper beats rock.";
    playerEmoji.textContent = "📄";
    computerEmoji.textContent = "🪨";
    console.log(playerSelection);
    console.log(computerSelection);

    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++computerScore;
    playerEmoji.textContent = "✂️";
    computerEmoji.textContent = "🪨";
    roundResult.textContent = "You lose. Rock beats scissors.";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    ++playerScore;
    playerEmoji.textContent = "✂️";
    computerEmoji.textContent = "📄";
    roundResult.textContent = "You win! Scissors beats paper.";

    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
  } else if (playerSelection == computerSelection) {
    roundResult.textContent = "Tie game!";
    playerScoreBoard.textContent = "Player Score:" + playerScore;
    computerScoreBoard.textContent = "Computer Score:" + computerScore;
    if (playerSelection == "rock" && computerSelection == "rock") {
      playerEmoji.textContent = "🪨";
      computerEmoji.textContent = "🪨";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      computerEmoji.textContent = "📄";
      playerEmoji.textContent = "📄";
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      computerEmoji.textContent = "✂️";
      playerEmoji.textContent = "✂️";
    }
  }
}

function gamePlay() {
  while (playerScore !== 5 && computerScore !== 5) {
    playRound();
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
    break;
  }
}
