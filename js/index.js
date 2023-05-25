let validChoices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;


const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#round');
const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');


buttons.forEach(button => {
  button.addEventListener('click', e => {
    const playerChoice = e.target.id;
    roundResult.textContent = playRound(playerChoice, getComputerChoice());
    playerScore.textContent = `Player Score: ${playerWins}`;
    cpuScore.textContent = `CPU Score: ${computerWins}`;
    check_winner();
  });
});


function getComputerChoice() {
  // return a random pick
  return validChoices[Math.floor(Math.random() * validChoices.length)];
}


function playRound(playerSelection, computerSelection) {
  let result;

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "Draw! Rock on Rock!";
      } else if (computerSelection === "paper") {
        computerWins++;
        return "You lose! Paper beats Rock!";
      } else {
        playerWins++;
        return "You win! Rock beats Scissors!";
      }
    case "paper":
      if (computerSelection === "rock") {
        playerWins++;
        return "You win! Paper beats Rock!";
      } else if (computerSelection === "paper") {
        return "Draw! Paper on Paper!";
      } else {
        computerWins++;
        return "You lose! Scissors beat Paper!";
      }
    case "scissors":
      if (computerSelection === "rock") {
        computerWins++;
        return "You lose! Rock beats Scissors!";
      } else if (computerSelection === "paper") {
        playerWins++;
        return "You win! Scissors beat Paper!";
      } else {
        return "Draw! Scissors on Scissors!";
      }
  }
}


function check_winner() {
  if (!((playerWins === 5) || (computerWins === 5))) {
    return;
  } else {
    if (playerWins === 5) {
      alert(`You are the winner with ${playerWins} rounds won!`);
    } else {
      alert(`You lost with only ${playerWins} to ${computerWins} rounds won!`);
    }
  }
}
