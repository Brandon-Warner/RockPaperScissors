// declare vars
let computerScore = 0;
let playerScore = 0;
//declare vars for DOM elements
let main = document.querySelector("#main");
let container = document.querySelector("#container");
let buttons = document.querySelector(".button");
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let score = document.querySelector(".score");
//create results div
let div = document.createElement("div");
div.setAttribute("class", "results");
div.style.width = "250px";
div.style.margin = "0 auto";
div.style.color = "#7f32a8";
let para = document.createElement("p");
para.setAttribute("class", "results-text");
let scoreBoard = document.createElement("p");
scoreBoard.setAttribute("class", "score");
scoreBoard.style.fontSize = "22";

// create text for results
let results = document.createTextNode("");
let gameScore = document.createTextNode("");

div.appendChild(para);
div.appendChild(scoreBoard);
main.insertBefore(div, container);
para.appendChild(results);
scoreBoard.appendChild(gameScore);

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

// round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    results.textContent = "Player wins! Computer lost!";
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++;
    results.textContent = "Player loses! Computer wins!";
  } else {
    results.textContent = "Tie, nobody wins.";
  }
}

function scoreCount() {
  if (playerScore === 5) {
    gameScore.textContent = "Player Wins! You bested the computer";
  } else if (computerScore === 5) {
    gameScore.textContent = "You lose! The computer pulled it out!";
  } else {
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
}

const playRock = document.querySelector(".rock-button");
playRock.addEventListener("click", () => {
  playRound("rock", computerPlay());
  scoreCount();
});

const playPaper = document.querySelector(".paper-button");
playPaper.addEventListener("click", () => {
  playRound("paper", computerPlay());
  scoreCount();
});

const playScissors = document.querySelector(".scissors-button");
playScissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
  scoreCount();
});

// scoreCount();
