"use strict";

// select relevant elements
const myScore = document.querySelector(".score.my-score");

const message = document.querySelector(".message");

const computerScore = document.querySelector(".score.computer-score");

const buttons = document.querySelectorAll(".btn");

const reset = document.querySelector(".btn-reset");

// let isGameReset = true;

// function that generates computer's selection.
const getComputerSelection = function () {
  const gameItems = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * gameItems.length);
  return gameItems[randomNum];
};

// function that resets game
const initialSetup = () => {
  myScore.textContent = 0;
  computerScore.textContent = 0;
  message.textContent = "Start Playing...";
  document.body.style.cssText = "background-color: #333";
  document.body.style.cssText = "color: #ccc";
  // isGameReset = true;
};

// function to check for a winner
const checkForWinner = () => {
  if (myScore.textContent === "5" || computerScore.textContent === "5") {
    const playerWins = myScore.textContent === "5";
    message.textContent = playerWins
      ? "🎉 Hurray! You win."
      : "👎🏼 You Lost the game!";
    document.body.style.backgroundColor = playerWins ? "#60b347" : "#af3311";
    document.body.style.color = "hsla(0, 0%, 100%, 0.815)";

    // setTimeout(initialSetup, 1000); // Add a delay before resetting the game
  }
};

// function that plays the game; it's called when game play buttons are clicked
const playRound = (name) => {
  // if (isGameReset) {
  //   isGameReset = false;
  //   return;
  // }
  const computerSelection = getComputerSelection();
  if (name === computerSelection) {
    message.textContent = `🤝 Tie! both chose ${name} `;
    // console.log(computerSelection);
  } else if (
    (name === "Rock" && computerSelection === "Scissors") ||
    (name === "Scissors" && computerSelection === "Paper") ||
    (name === "Paper" && computerSelection === "Rock")
  ) {
    myScore.textContent++;
    message.textContent = `🎉Yay! ${name} beats ${computerSelection}`;
    // console.log(computerSelection);
  } else {
    computerScore.textContent++;
    message.textContent = `👎🏼Lost! ${computerSelection} beats ${name}`;
    // console.log(computerSelection);
  }

  checkForWinner();
};

// event listener for game play buttons
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    // console.log(e.target.textContent);

    if (myScore.textContent === "5" || computerScore.textContent === "5") {
      initialSetup();
      // setTimeout(() => initialSetup(), 1000); // Add a delay before resetting and continuing
    } else {
      playRound(e.target.textContent);
    }
  })
);

// event listener for reset button
reset.addEventListener("click", initialSetup);

initialSetup();
