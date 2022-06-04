var humanScore = 0
var computerScore = 0

function computerPlay() {
    const actions = ["ROCK", "PAPER", "SCISSORS"];
    return actions[Math.floor(3*Math.random())];
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection === computerSelection) 
        return "It's a tie! You both chose " + computerSelection + "!";
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        humanScore++
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    computerScore++
    return "You lose! " + computerSelection + " beats " + playerSelection +"!";
}

function game(){
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let gameResult = gameRound(button.textContent, computerPlay())
            resultSection = document.querySelector(".results")
            resultSection.textContent = gameResult
            computerScoreSection = document.querySelector(".computerScore")
            humanScoreSection = document.querySelector(".humanScore")
            computerScoreSection.textContent = `The computer's Score: ${computerScore}`
            humanScoreSection.textContent = `Your Score: ${humanScore}`
            if (humanScore >= 5) {
                document.querySelector("#container").remove()
                setTimeout(()=>{alert('You won!')}, 5)
            }
            if (computerScore >= 5) {
                document.querySelector("#container").remove()
                setTimeout(()=>{alert('You lost!')}, 5)
            }
        })
    })
}

game()
