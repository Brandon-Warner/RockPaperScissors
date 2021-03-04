// ask player their choice of rock paper or scissors
let playerChoice = prompt("Rock, Paper, or Scissors?");
// change input to all lowercase
let playerSelection = playerChoice.toLowerCase();
// if an entry is not rock paper or scissors, make them go again

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

// assign computerSelection value for rock paper or scissors
let computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);

// create a round of rock paper scissors
function playRound(choice1, choice2) {
  // if it ends in a tie
  if (choice1 === choice2) {
    return "It is a tie! Nobody wins!";
  }
  // player chooses rock --> computer chooses scissors or paper
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      // computer scissors loses to player rock
      return "Player wins! Rock beats scissors!";
    } else {
      // computer paper beats player rock
      return "Computer wins! Paper beats rock!";
    }
  }
  // player chooses paper --> computer chooses rock or scissors
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      // computer rock loses to player paper
      return "Player wins! Paper beats rock!";
    } else {
      // computer scissors beats player paper
      return "Computer wins! Scissors beats paper!";
    }
  }
  // player chooses scissors --> computer chooses rock or paper
  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      //computer rock beats player scissors
      return "Computer wins! Rock beats scissors";
    } else {
      // computer paper loses to player scissors
      return "Player wins! Scissors beat paper!";
    }
  }
}

// OPTIONAL --> TEST TO SEE IF IT WORKS --> IT DOES :)
console.log(playRound(playerSelection, computerSelection));

// function game() {
//   let playerWins = 0;
//   let computerWins = 0;
//   playRound(playerSelection, computerSelection);
//   if (
//     "Player wins! Rock beats scissors!" ||
//     "Player wins! Paper beats rock!" ||
//     "Player wins! Scissors beat paper!"
//   ) {
//     playerWins += 1;
//   } else if (
//     "Computer wins! Paper beats rock!" ||
//     "Computer wins! Scissors beats paper!" ||
//     "Computer wins! Rock beats scissors"
//   ) {
//     computerWins += 1;
//   } else {
//   }
//   console.log(playerWins, computerWins);
// }
