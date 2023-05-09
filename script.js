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
    playerChoice = playerChoice ? playerChoice.toLowerCase() : null;
    computerChoice = computerChoice.toLowerCase();
    let result;
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "rock") result = "It's a tie";
            if (computerChoice === "paper") {
                result = "You Lose! Paper beats Rock";
                computerScore += 1;
            }
            if (computerChoice === "scissors") {
                result = "You Win! Rock beats Scissors";
                playerScore += 1;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                result = "You Win! Paper beats Rock";
                playerScore += 1;
            }
            if (computerChoice === "paper") result = "It's a tie";
            if (computerChoice === "scissors") {
                result = "You Lose! Scissors beat Paper";
                computerScore += 1;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "You Lose! Rock beats Scissors";
                computerScore += 1;
            }
            if (computerChoice === "paper") {
                result = "You Win! Scissors beat Paper";
                playerScore += 1;
            }
            if (computerChoice === "scissors") result = "It's a tie";
            break;
        default:
            result = "You didn't pick a right option, so you Lose!";
    }
    return result;
}
const spanPlayerScore = document.querySelector("#playerScore");
const spanComputerScore = document.querySelector("#computerScore");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const superResult = document.querySelector("#superResult");

let playerScore = 0;
let computerScore = 0;

function refreshScores() {
    spanComputerScore.textContent = computerScore;
    spanPlayerScore.textContent = playerScore;

    if (computerScore === 5) {
        superResult.textContent = "The computer has won the match!";
    } else if (playerScore === 5) {
        superResult.textContent = "You have won the match!";
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        result.textContent = playRound(event.target.id, getComputerChoice());
        refreshScores();
    });
});
