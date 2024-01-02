// Get Player choice
// Player Choice Function
function getPlayerChoice() {
    let choice = prompt("Please enter your choice: ");
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log('Only "rock", "paper" or "scissors" are allowed. You wrote: "' + choice + '"');
        getPlayerChoice();
    } else {
        return choice;
    }
}
// Generate Computer Choice
// Random number function: get random number between 1 and 3 for computer "choice" between rock, paper and scissors.
function getRandomInt() {
    return Math.floor(Math.random() * 3 + 1);
}
// Computer Choice Function
function getComputerChoice() {
    let number = getRandomInt();
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else if (number === 3) {
        return "scissors";
    } else {
        console.log("Error Computer Choice");
    }
}
// Compare choice and return winner or draw. The functions 
// getPlayerChoice() and getComputerChoice() should be passed as arguments
// for the parameters playerChoiceFunction, computerChoiceFunction
function getWinner(playerChoiceFunction, computerChoiceFunction) {
    let player = playerChoiceFunction;
    let computer = computerChoiceFunction;
    if (player === "rock" && computer === "scissors") {
        return "player";
    } else if (player === "rock" && computer === "rock") {
        return "draw";
    } else if (player === "paper" && computer === "rock") {
        return "player";
    } else if (player === "paper" && computer === "paper") {
        return "draw";
    } else if (player === "scissors" && computer === "paper") {
        return "player";
    } else if (player === "scissors" && computer === "scissors") {
        return "draw";
    } else {
        return "computer";
    }
}

// Game Loop
let keepGoing = true;
let scorePlayer = 0;
let scoreComputer = 0;
let drawCounter = 0;

while (keepGoing) {
    if (scorePlayer === 5) {
        keepGoing = false;
        console.log("You win!")
        console.log("Player score: " + scorePlayer);
        console.log("Computer score: " + scoreComputer);
        console.log("Draws: " + drawCounter);
    } else if (scoreComputer === 5) {
        keepGoing = false;
        console.log("You lose!")
        console.log("Player score: " + scorePlayer);
        console.log("Computer score: " + scoreComputer);
        console.log("Draws: " + drawCounter);
    } else {
        let winner = getWinner(getPlayerChoice(), getComputerChoice());
        if (winner === "player") {
            scorePlayer += 1;
            console.log("Player scores!");
        } else if (winner === "computer") {
            scoreComputer += 1;
            console.log("Computer scores!");
        } else {
            drawCounter += 1;
            console.log("It's a draw!");
        }

    }
}
