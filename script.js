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
    let playerScore=0
    let computerScore=0


        let roundResult = playRound(playerChoice)
        if ( roundResult  == 1 )
        {
            playerScore++
            console.log('PLAYER WON !!!')
        }
        if ( roundResult  == -1 )
        {
            computerScore++
            console.log('COMPUTER WON !!!')
        }
        if ( roundResult  == 0 )
        {
            console.log('DRAW !!!')
        }
        

     

}



const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function() { game('rock') } );

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function() { game('paper') } );

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function() { game('scissors') } );