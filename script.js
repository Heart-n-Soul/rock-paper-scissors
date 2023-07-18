// function that generates computer's selection and returns it.

function getComputerChoice() {
  const gameItems = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * gameItems.length);
  return gameItems[randomNum];
}

// storing computer's choice function value in a variable
const computerSelection = getComputerChoice();

// function that returns true when player wins and false when otherwise
function playerWins(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return true;
  } else {
    return false;
  }
}

// function that returns true when computer wins and false when otherwise
function computerWins(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    return true;
  } else {
    return false;
  }
}

// function that returns true when there's a tie and false when otherwise
function isTie(playerSelection, computerSelection) {
  return playerSelection === computerSelection ? true : false;
}

//function that invokes game play
function game() {
  let playerScore = 0;
  let computerScore = 0;
  // This function checks the values of the three functions and prints the appropriate output
  console.log("ROCK! PAPER! SCISSORS! VS COMPUTER \n");
  console.log("FIVE ROUND GAME \n");

  for (let i = 1; i <= 5; i++) {
    // This takes user's input and stores it

    switch (i) {
      case 1:
        console.log("FIRST GAME!");
        break;
      case 2:
        console.log("SECOND GAME!");
        break;
      case 3:
        console.log("THIRD GAME!");
        break;
      case 4:
        console.log("FOURTH GAME!");
        break;
      case 5:
        console.log("FIFTH GAME!");
        break;
    }
    const playerInput = prompt(
      "Please enter an option (rock, paper, or scissors): "
    );

    const playerSelection = () =>
      playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

    let playerPoint = playerWins(playerSelection(), computerSelection);
    let computerPoint = computerWins(playerSelection(), computerSelection);
    let draw = isTie(playerSelection(), computerSelection);

    function playSingleGame(playerSelection, computerSelection) {
      if (playerPoint) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      } else if (computerPoint) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      } else if (draw) {
        console.log(
          `It's a tie! ${playerSelection} is equal to ${computerSelection}.`
        );
      } else {
        console.warn(
          "Wrong Choice! Make sure you have entered the right option!"
        );
      }
    }

    if (playerPoint) {
      // game();
      playSingleGame(playerSelection(), computerSelection);

      playerScore++;
      console.log(`Your new score is ${playerScore} : ${computerScore} .`);
    } else if (computerPoint) {
      // game();
      playSingleGame(playerSelection(), computerSelection);

      computerScore++;
      console.log(`Your new score is ${playerScore} : ${computerScore} .`);
    } else if (draw) {
      // game();
      playSingleGame(playerSelection(), computerSelection);

      playerScore += 0;
      computerScore += 0;
      console.log(`Draw! ${playerScore} : ${computerScore} .`);
    } else {
      playSingleGame(playerSelection(), computerSelection);
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `You win! Your  total score is ${playerScore} : ${computerScore} .`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You Lose! Your total score is ${playerScore} : ${computerScore} .`
    );
  } else if (playerScore === computerScore) {
    console.log(
      `You have equal points ${playerScore} : ${computerScore}. \n\ WE GO ANOTHER FIVE ROUNDS!`
    );
    game();
  }
}
