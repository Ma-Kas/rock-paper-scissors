let validChoices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    // return a random pick
    return validChoices[Math.floor(Math.random() * validChoices.length)];
}



function getPlayerChoice() {
    let choice = "";

    while (!validChoices.includes(choice.toLowerCase())) {
        choice = prompt("Choose between Rock, Paper, Scissors!");
    }

    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result;

    switch(playerSelection) {
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

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + ": " + playRound(getPlayerChoice(), getComputerChoice()));
    }
    if (playerWins > computerWins) {
        console.log("You are the winner with " + playerWins + " rounds won!");
    } else if (playerWins < computerWins) {
        console.log("You lost with " + playerWins + " to " + computerWins + " rounds won!");
    } else {
        console.log("It's a draw, with each winning " + playerWins + " rounds!");
    }
}

game();