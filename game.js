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

function playRound(playerSelection, computerSelection){
    var playerSelection = window.prompt("Type rock, paper or scissors");
    var computerSelection = computerPlay();
    if(playerSelection.toLowerCase() === computerSelection){
        return "Draw! Play again, opponent played " +computerSelection;
    } 
    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
            return "You lose! Opponent played " + computerSelection;
        }
        else{
            return "You win! Opponent played " + computerSelection;
        }
    }
    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "rock"){
            return "You lose! Opponent played " + computerSelection;
        }
        else{
            return "You win! Opponent played " + computerSelection;
        }
    }
    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "scissors"){
            return "You lose! Opponent played " + computerSelection;
        }
        else{
            return "You win! Opponent played " + computerSelection;
        }
    }
    else{
        return "There was an error";
    }
}

function game(){
    var score = 0;
    var counter = 0;
    while(counter < 5){
        if (playRound().includes("win")){
            console.log("You won this round");
            score++;
        }
        else{
            console.log("You lost this round");
            score--;
        }
        counter++;
    }
    if(score > 0){
        return "You won the best of five";
    }
    else{
        return "You lost the best of five";
    }
}