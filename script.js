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
console.log(getComputerChoice());