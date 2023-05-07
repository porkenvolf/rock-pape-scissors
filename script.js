function getComputerChoice() {
  let roll = Math.floor(Math.random() * 3) + 1;
  let choice;
  if (roll === 1) {
    choice = "rock";
  } else if (roll === 2) {
    choice = "paper";
  } else if (roll === 3) {
    choice = "scissors";
  } else {
    choice = "something went wrong";
  }
  return choice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = (playerChoice) ? playerChoice.toLowerCase(): null;
  computerChoice = computerChoice.toLowerCase();
  let result;
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") result = "It's a tie";
      if (computerChoice === "paper") result = "You Lose! Paper beats Rock";
      if (computerChoice === "scissors")
        result = "You Win! Rock beats Scissors";
      break;
    case "paper":
      if (computerChoice === "rock") result = "You Win! Paper beats Rock";
      if (computerChoice === "paper") result = "It's a tie";
      if (computerChoice === "scissors")
        result = "You Lose! Scissors beat Paper";
      break;
    case "scissors":
      if (computerChoice === "rock") result = "You Lose! Rock beats Scissors";
      if (computerChoice === "paper") result = "You Win! Scissors beat Paper";
      if (computerChoice === "scissors") result = "It's a tie";
      break;
    default:
      result = "You didn't pick a right option, so you Lose!";
  }
  return result;
}

function game(rounds) {
  for (let i = 1; i <= rounds; i++) {
    let result = playRound(
      prompt("Write Rock, Paper or Scissors", ""),
      getComputerChoice()
    );
    let output = `Round ${i}: ${result}`;
    console.log(output);
  }
}

game(5);
