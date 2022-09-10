const choices = document.querySelectorAll(".choices"); // select all buttons
const score = document.getElementById("score"); // player/computer score
const result = document.getElementById("result"); // result div
const restart = document.getElementById("restart");
const modal = document.querySelector(".display");
const scoreboard = {
  player: 0,
  computer: 0,
}; // initial points

// Play game
function play(e) {
  const playerChoice = e.target.id; // return the id from the button
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  console.log(winner);
  showWinner(winner, computerChoice);
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    // Inc player score
    scoreboard.player++;
    // Show result
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `;
  } else if (winner === "computer") {
    // Inc computer score
    scoreboard.computer++;
    // Show  result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1  class="draw-game">It's A Draw</h1>
      <p>Computer Chose <strong>${computerChoice}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  result.innerHTML= ""
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));

restart.addEventListener("click", restartGame);
