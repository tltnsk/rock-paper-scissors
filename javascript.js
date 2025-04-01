let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {

}

function startGame() {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id);
            }
         })
    );
}

function playRound(round) {
    let wins = checkWins();
    if (wins >= 5) {return; }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);

    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".compuerChoice").textContent = `The Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
}

function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "Player";
    } else if (choice1 == choice2) return "Tie";
    else return "Computer;"
}


function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

startGame();