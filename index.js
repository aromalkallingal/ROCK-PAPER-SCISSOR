const computerPlay = () => {
    let things = ['Rock', 'Paper', 'Scissor'];
    let thing = things[Math.floor(Math.random()*things.length)];
    return thing.toLowerCase();
}



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.comp-score');
const win = document.getElementById('win');




let compScore = 0
let playerScore = 0


let playRound = (computerSelection,playerLower) => {
    if (computerSelection == playerLower){
        win.innerText = `"You Tied!" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'rock' && playerLower == 'paper' ){
        playerScore++;
        win.innerText = `"You win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'rock' && playerLower == 'scissor' ){
        compScore++
        win.innerText = `"Computer win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'paper' && playerLower == 'scissor' ){
        playerScore++
        win.innerText = `"You win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'paper' && playerLower == 'rock' ){
        compScore++
        win.innerText = `"Computer win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'scissor' && playerLower == 'rock' ){
        playerScore++
        win.innerText = `"You win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }else if(computerSelection == 'scissor' && playerLower == 'paper' ){
        compScore++
        win.innerText = `"Computer win" - computer selected ${computerSelection}`;
        // outcomeDiv.append(win);
    }
}



const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = "You Won the game";
        outcomeDiv.append(h2);
        const rstBtn = document.createElement('button');
        rstBtn.innerText = "reset";
        outcomeDiv.append(rstBtn);
        rstBtn.addEventListener ("click", function() {
            location.reload();});
        rockButton.disabled = true;
        scissorButton.disabled = true;
        paperButton.disabled = true;
        
    }

    if (compScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = "Computer Won the game";
        outcomeDiv.append(h2);
        const rstBtn = document.createElement('button');
        rstBtn.innerText = "reset";
        outcomeDiv.append(rstBtn);
        rstBtn.addEventListener ("click", function() {
            location.reload();});
        rockButton.disabled = true;
        scissorButton.disabled = true;
        paperButton.disabled = true;
        
    }
 
   
}





const updateScore = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${compScore}`
}



rockButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(computerSelection, playerSelection);
    checkForWinner(playerScore, compScore);
    updateScore(playerScore, compScore);
});



paperButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(computerSelection, playerSelection);
    checkForWinner(playerScore, compScore);
    updateScore(playerScore, compScore);
});



scissorButton.addEventListener('click', function() {
    const computerSelection = computerPlay();
    const playerSelection = "scissor";
    playRound(computerSelection, playerSelection);
    checkForWinner(playerScore, compScore);
    updateScore(playerScore, compScore);
});





