const computerPlay = () => {
    let things = ['Rock', 'Paper', 'Scissor'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing.toLowerCase();
}

let compScore = 0
let playerScore = 0


let playRound = (computerSelection,playerLower) => {
    if (computerSelection == playerLower){
        return "tie";
    }else if(computerSelection == 'rock' && playerLower == 'paper' ){
        playerScore++
        return "you win"
    }else if(computerSelection == 'rock' && playerLower == 'scissor' ){
        compScore++
        return "computer win"
    }else if(computerSelection == 'paper' && playerLower == 'scissor' ){
        playerScore++
        return "you win"
    }else if(computerSelection == 'paper' && playerLower == 'rock' ){
        compScore++
        return "computer win"
    }else if(computerSelection == 'scissor' && playerLower == 'rock' ){
        playerScore++
        return "you win"
    }else if(computerSelection == 'scissor' && playerLower == 'paper' ){
        compScore++
        return "computer win"
    }
}

const game =  () => {
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay()
        let playerSelection = prompt("enter rock, paper, scissors")
        let playerLower = playerSelection.toLowerCase()
        playRound(computerSelection, playerLower)
    }
}

game()
console.log('player score = ' + playerScore)
console.log('computer score = ' + compScore)

if (playerScore > compScore){
    console.log("you beat the computer")
}else if(compScore > playerScore){
    console.log('You lost')
}else{
    console.log("it's a tie")
}




