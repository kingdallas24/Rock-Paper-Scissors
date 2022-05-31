let btn = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let scoreBoard = document.createElement("div");
let scoreBoard2 = document.createElement("div");

let roundResult = document.createElement("p");
let startButton = document.createElement("button");
let resetButton = document.createElement("button");
resetButton.classList.add("btn");

scoreBoard.textContent;
scoreBoard2.textContent;
startButton.textContent = "Start";
resetButton.textContent = "Reset";
scoreBoard.setAttribute(
  "style",
  "color: red; border: 2px solid red; height:100px; width:200px; margin:10px auto;"
);

scoreBoard2.setAttribute(
  "style",
  "color: blue; border: 2px solid blue; height:100px; width:200px; margin:10px auto;"
);

scoreBoard.style.fontSize = "32px";
scoreBoard2.style.fontSize = "32px";

resetButton.setAttribute(
  "style",
  "background: white; position:absolute; left: 50%"
);
startButton.setAttribute(
  "style",
  "background: white;position:absolute; left: 43%"
);

roundResult.style.textAlign = "center";
document.body.appendChild(scoreBoard);
document.body.appendChild(scoreBoard2);

document.body.appendChild(roundResult);
document.body.appendChild(startButton);
document.body.appendChild(resetButton);

startButton.addEventListener("mouseover", (e) => {
  e.target.style.background = "hsl(0, 3%, 72%)";
});

startButton.addEventListener("mouseleave", (e) => {
  e.target.style.background = "white";
});

resetButton.addEventListener("mouseover", (e) => {
  e.target.style.background = "hsl(0, 3%, 72%)";
});

resetButton.addEventListener("mouseleave", (e) => {
  e.target.style.background = "white";
});

startButton.addEventListener("click", (e) => {
  startGame();
  scoreBoard2.textContent = "Computer Score: " + computerScore;

  scoreBoard.textContent = "Player Score: " + playerScore;
});

function computerPlay() {
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

function startGame() {
  btn.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      if (choice.classList.contains("rock")) {
        playerSelection = "rock";
      } else if (choice.classList.contains("scissors")) {
        playerSelection = "scissors";
      } else if (choice.classList.contains("paper")) {
        playerSelection = "paper";
      }

      game();
    });
  });
}

let playRound = function () {
  const computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "paper") {
    let result = "You lose. Paper beats rock";
    roundResult.textContent = result;

    if (computerScore < 5 && playerScore < 5) {
      computerScore++;
    }
    scoreBoard2.textContent = "Computer Score: " + computerScore + " 📄";
    scoreBoard.textContent = "Player Score: " + playerScore + " 🪨";

    return result;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    if (playerScore < 5 && computerScore < 5) {
      playerScore++;
    } else {
      scoreBoard.textContent = "Player Score: " + playerScore + " 🪨";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "✂️";
      let result = "Game Over";
      roundResult.textContent = result;
    }
    scoreBoard.textContent = "Player Score: " + playerScore;
    scoreBoard2.textContent = "Computer Score: " + computerScore;

    let result = "You win. rock beats scissors";
    roundResult.textContent = result;

    return result;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    if (computerScore < 5 && playerScore < 5) {
      computerScore++;
    }
    scoreBoard2.textContent = "Computer Score: " + computerScore + " ✂️";
    scoreBoard.textContent = "Player Score: " + playerScore + " 📄";
    let result = "You lose. scissors beats paper";
    roundResult.textContent = result;

    return result;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    if (playerScore < 5 && computerScore < 5) {
      playerScore++;
    } else {
      scoreBoard.textContent = "Player Score: " + playerScore + " 📄";
      scoreBoard2.textContent = "Computer Score: " + computerScore + " 🪨";
      let result = "Game Over";
      roundResult.textContent = result;
    }
    scoreBoard.textContent = "Player Score: " + playerScore + " 📄";
    scoreBoard2.textContent = "Computer Score: " + computerScore + " 🪨";
    let result = "You win. paper beats rock";
    roundResult.textContent = result;

    return result;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    if (computerScore < 5 && playerScore < 5) {
      computerScore++;
    }
    scoreBoard2.textContent = "Computer Score: " + computerScore + "🪨";
    scoreBoard.textContent = "Player Score: " + playerScore + "✂️";
    let result = "You lose. rock beats scissors";
    roundResult.textContent = result;

    return result;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    if (playerScore < 5 && computerScore < 5) {
      playerScore++;
      scoreBoard.textContent = "Player Score: " + playerScore + "✂️";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "📄";
      let result = "You win. scissors beats paper";
      roundResult.textContent = result;
    } else {
      scoreBoard.textContent = "Player Score: " + playerScore + "✂️";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "📄";
      let result = "Game Over";
      roundResult.textContent = result;
      return result;
    }
  } else {
    let result = "Tie Game";
    if (playerSelection == "rock" && computerSelection == "rock") {
      scoreBoard.textContent = "Player Score: " + playerScore + "🪨";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "🪨";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      scoreBoard.textContent = "Player Score: " + playerScore + "📄";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "📄";
    } else {
      scoreBoard.textContent = "Player Score: " + playerScore + "✂️";
      scoreBoard2.textContent = "Computer Score: " + computerScore + "✂️";
    }

    roundResult.textContent = result;

    return result;
  }
};

function game() {
  resetButton.addEventListener("click", (e) => {
    scoreBoard2.setAttribute(
      "style",
      "color: blue; border: 2px solid blue; height:100px; width:200px; margin:10px auto;"
    );
    scoreBoard.setAttribute(
      "style",
      "color: red; border: 2px solid red; height:100px; width:200px; margin:10px auto;"
    );

    scoreBoard.style.fontSize = "32px";
    scoreBoard2.style.fontSize = "32px";
    roundResult.style.fontSize = "16px";
    roundResult.style.fontWeight = "100";

    scoreBoard.textContent = " ";
    scoreBoard2.textContent = " ";
    roundResult.textContent = " ";
    playerScore = 0;
    computerScore = 0;
  });
  while (playerScore < 5 || computerScore < 5) {
    playRound();
    console.log(playerScore);

    if (playerScore == 5) {
      console.log(
        `The final score is:\nPlayer Score:${playerScore}\nComputer Score:${computerScore}`
      );
      roundResult.textContent = "You are the champion! 😆";
      roundResult.style.fontWeight = "bold";
      roundResult.style.fontSize = "32px";
    } else if (computerScore == 5) {
      scoreBoard2.style.border = "4px solid green";
      scoreBoard.style.border = "4px solid orange";
      console.log(
        `The final score is:\nPlayer Score:${playerScore}\nComputer Score:${computerScore}`
      );

      roundResult.textContent = "Sorry.. Looks like the computer won.. 🥲";
      roundResult.style.fontWeight = "bold";
      roundResult.style.fontSize = "32px";
    }
    break;
  }
}
