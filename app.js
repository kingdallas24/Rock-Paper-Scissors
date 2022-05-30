// Create a function that will randomly return rock paper or scissors
// In the function generate a random number. Let's split 10 into 3 parts
/*
if random number is >= 0 && random number is <= 10*(1/3) return rock
if random number is > 10*(1/3) && random number is <= 10*(2/3) return paper
if random number is > 10*(2/3) && random number is <= 10 return scissors

*/

function computerPlay() {
  let randomNum = Math.random();
  console.log(randomNum);

  if (randomNum >= 0 && randomNum <= 0.33) {
    return "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  const playerSelection = prompt(
    "Choose rock, paper, or scissors."
  ).toLowerCase();
  const computerSelection = computerPlay();
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    let result = "You lose. Paper beats rock";
    computerScore++;
    return alert(result);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    playerScore++;
    let result = "You win. rock beats scissors";
    return alert(result);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(playerSelection);
    console.log(computerSelection);
    computerScore++;
    let result = "You lose. scissors beats paper";
    return alert(result);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(playerSelection);
    console.log(computerSelection);
    playerScore++;
    let result = "You win. paper beats rock";
    return alert(result);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(playerSelection);
    console.log(computerSelection);
    computerScore++;
    let result = "You lose. rock beats scissors";
    return alert(result);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(playerSelection);
    console.log(computerSelection);
    playerScore++;
    let result = "You win. scissors beats paper";
    return alert(result);
  } else if (playerSelection == computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    let result = "Tie Game!";
    return alert(result);
  }
}

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(playerScore);
//     console.log(computerScore);
//     console.log(playRound());
//   }
//   console.log(
//     `The final score is:\nPlayer Score:${playerScore}\nComputer Score:${computerScore}`
//   );
//   if (playerScore > computerScore) {
//     console.log("You are the champion!");
//   } else {
//     console.log("Sorry.. Looks like the computer won..");
//   }
// }
function game() {
  while (playerScore || computerScore != 5) {
    playRound();

    let score = alert(
      `Your score is ${playerScore} and the computer score is ${computerScore}`
    );
    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }
  alert(
    `The final score is:\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
  );
  if (playerScore > computerScore) {
    alert("You are the champion!");
  } else {
    alert("Sorry.. Looks like the computer won..");
  }
}

/* 

create a function called game. Make 5 rounds using a for loop. At then end of 5 rounds, if playerSelection "You win messages" are < playerselection "you lose message". Display message "You are the rock paper scissors champion" or display "The computer is the champ!"


while(playerScore || computerScore != 5){
     console.log(playerScore);
    console.log(computerScore);
    console.log(playRound());
    if(playerScore ===5 || computerScore === 5){
        break:
    }
    if (playerScore > computerScore) {
    console.log("You are the champion!");
  } else {
    console.log("Sorry.. Looks like the computer won..");
  }
    
}



Make a function for the game play. That takes two parameters, computer selection and player selection.

If player selects rock && computer selects paper. Display message "You lose. Paper beats rock" and end the game. 

If player selects rock && computer selects scissors. Display message "You win. rock beats scissors" and end the game.


If player selects paper && computer selects scissors. Display message "You lose. scissors beats paper" and end the game.

If player selects paper && computer selects rock. Display message "You win. paper beats rock" and end the game.

If player selects scissors && computer selects rock. Display message "You lose. rock beats scissors" and end the game.

If player selects scissors && computer selects paper. Display message "You win. scissors beats paper" and end the game.

if player random number == computer random number, play again


*/
