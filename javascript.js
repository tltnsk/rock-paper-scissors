function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You Win!");
        humanScore++;
    } else {
        console.log("You Lose!");
        computerScore++;
    }
    console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Score:");
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Better luck next time! The computer wins.");
    } else {
        console.log("It's a draw! Well played!");
    }
}

playGame();
