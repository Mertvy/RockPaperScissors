function computerPlay() {
    const actions = ["ROCK", "PAPER", "SCISSORS"];
    return actions[Math.floor(3*Math.random())];
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection === computerSelection) 
        return "It's a tie! You both chose " + computerSelection + "!";
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    return "You lose! " + computerSelection + " beats " + playerSelection +"!";
}

