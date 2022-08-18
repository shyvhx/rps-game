let playerScore=0
let computerScore=0



function getComputerChoice() {
    var randomArray = [
        'rock','paper', 'scissors'
     ];
     var randomIndex = Math.floor(Math.random() * randomArray.length); 
     

     return randomArray[randomIndex];


  }










//return 1 if player wins
//return 0 if draw
//return -1 if player loses
function playRound(playerChoice)
{   var computerChoice = getComputerChoice().toUpperCase()
    computerChoiceMessage.innerHTML = "Computer picked " + computerChoice;


    var playerChoice = playerChoice.toUpperCase()
    console.log('COMPUTER:'+ computerChoice)
    console.log('PLAYER:' + playerChoice)

    if( computerChoice === playerChoice )
        return 0;

    if ( computerChoice === 'PAPER')
    {
        if(playerChoice === 'ROCK')         return -1;  
        if(playerChoice === 'SCISSORS')     return 1;
    }

    if ( computerChoice === 'ROCK')
    {
        if(playerChoice === 'SCISSORS')         return -1; 
        if(playerChoice === 'PAPER')     return 1;
    }

    if ( computerChoice === 'SCISSORS')
    {
        if(playerChoice === 'PAPER')         return -1; 
        if(playerChoice === 'ROCK')     return 1;
    }



}


function game(playerChoice)
{



        let roundResult = playRound(playerChoice)
        if ( roundResult  == 1 )
        {
            playerScore++
            gameResultMessage.innerHTML= 'PLAYER WON !!!'
            pScoreHTML.innerHTML = playerScore;
        }
        if ( roundResult  == -1 )
        {
            computerScore++
            gameResultMessage.innerHTML= 'COMPUTER WON !!!'
            cScoreHTML.innerHTML = computerScore;
        }
        if ( roundResult  == 0 )
        {
            gameResultMessage.innerHTML= 'DRAW !!!'
        }
        

     playerChoiceMessage.innerHTML = 'Player picked ' + playerChoice;

}



const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function() { game('rock') } );

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function() { game('paper') } );

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function() { game('scissors') } );



const pScoreHTML = document.getElementById("playerScore");


const cScoreHTML = document.getElementById("computerScore");



const computerChoiceMessage = document.querySelector('#computerChoiceMessage');
const playerChoiceMessage = document.querySelector('#playerChoiceMessage');
const gameResultMessage = document.querySelector('#gameResultMessage');
