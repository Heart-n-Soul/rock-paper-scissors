function getComputerChoice() {
  const gameItems = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return gameItems[randomNum];
}

function playSingleGame(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(
      `It's a tie! ${playerSelection} is equal to ${computerSelection}.`
    );
  } else {
    console.warn("Make sure you have entered the right thing!");
  }
}

const playerInput = prompt(
  "Please enter an option (rock, paper, or scissors): "
);

//function that capitalizes the first letter of user input

const playerSelection = () =>
  playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

const computerSelection = getComputerChoice();

console.log(playSingleGame(playerSelection(), computerSelection));
console.log(playerSelection());
console.log(computerSelection);

// function capitalizePlayerSelection() {
//   return (
//     playerSelection.CharAt(0).toUpperCase + playerSelection.slice(1).toLowerCase
//   );
// }

// function game() {
//   let playerResult = 0;
//   let computerResult = 0;
//   for (let i = 1; i <= 5; i++) {
//

//     if (Boolean(playSingleGame()) === "true") {
//       playerResult += 1;
//     } else if (Boolean(playSingleGame()) === "false") {
//       computerResult += 1;
//     }

//     console.log(
//       `Your Score is ${playerResult} and Computer's Score is ${computerResult}`
//     );
//   }
//   if (playerResult > computerResult) {
//     console.log(`You Win!`);
//   } else {
//     console.log(`You lose!`);
//   }
// }

// console.log(game());
