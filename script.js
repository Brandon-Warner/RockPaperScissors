let check = true;
let computerScore = 0;
let playerScore = 0;
let playerSelection = prompt("Enter rock, paper, or scissors");
let computerSelection = computerPlay();

// get random integer between 0 & 1
function getRandomInt() {
  return Math.random();
}
// assign rock, paper, scissors value to each output
function computerPlay() {
  getRandomInt();
  if (getRandomInt() < 0.34) {
    return "rock";
  } else if (getRandomInt() < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Player loses! Paper beats rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Player wins! Rock beats scissors!";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie! No one wins...";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Player wins! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Player loses! Scissors beats paper!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie! No one wins...";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Player loses! Rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Player wins! Scissors beats paper!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Tie! No one wins...";
  }
}

//console.log(playRound(playerSelection, computerSelection));

function game() {
  playerSelection = prompt("Enter rock, paper, or scissors");
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter rock, paper, or scissors");
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter rock, paper, or scissors");
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter rock, paper, or scissors");
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = prompt("Enter rock, paper, or scissors");
  computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  return `Player Score: ${playerScore}, Computer Score ${computerScore}`;
}
