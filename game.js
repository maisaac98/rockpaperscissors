function computerPlay(){
    var random = Math.floor(Math.random()*3)+1;
    if (random === 1){
        return "rock";
    }
    else if(random===2){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function playRound(playerSelection){
    var playerSelection = playerSelection;
    var computerSelection = computerPlay();
    if(playerSelection.toLowerCase() === computerSelection){
        return "Draw! Play again, opponent played " +computerSelection;
    } 
    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
            cScore++;
            updateScore();
            checkWinner()
            return "You lose! Opponent played " + computerSelection;
    
        }
        else{
            pScore++;
            updateScore();
            checkWinner()
            return "You win! Opponent played " + computerSelection;
        }
    }
    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "rock"){
            cScore++;
            updateScore();
            checkWinner()
            return "You lose! Opponent played " + computerSelection;
        }
        else{
            pScore++;
            updateScore();
            checkWinner()
            return "You win! Opponent played " + computerSelection;
        }
    }
    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "scissors"){
            cScore++;
            updateScore();
            checkWinner()
            return "You lose! Opponent played " + computerSelection;
        }
        else{
            pScore++;
            updateScore();
            checkWinner()
            return "You win! Opponent played " + computerSelection;
        }
    }
    else{
        return "There was an error";
    }
}


var pScore = 0;
var cScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener("click",function(){playRound('rock')});
paper.addEventListener("click",function(){playRound('paper')});
scissors.addEventListener("click",function(){playRound('scissors')});


function updateScore(){
    document.getElementById('playerScore').textContent = "Player Score = " + pScore;
    document.getElementById('computerScore').textContent = "Computer Score = " + cScore;
}

function checkWinner(){
    if(pScore === 5){
        pScore = cScore = 0;
        alert("You won the set! Scores reset");
    }
    else if(cScore === 5){
        pScore = cScore = 0;
        alert("You lost the set! Scores reset");
    }
}


// function game(){
//     var score = 0;
//     var counter = 0;
//     while(counter < 5){
//         if (playRound().includes("win")){
//             console.log("You won this round");
//             score++;
//         }
//         else{
//             console.log("You lost this round");
//             score--;
//         }
//         counter++;
//     }
//     if(score > 0){
//         return "You won the best of five";
//     }
//     else{
//         return "You lost the best of five";
//     }
// }