function getComputerChoice() {
    var randomArray = [
        'rock','paper', 'scissors'
     ];
     var randomIndex = Math.floor(Math.random() * randomArray.length); 


     return randomArray[randomIndex];


  }


function getPlayerChoice() {
    var playerChoice
    playerChoice=prompt(" Type in your choice ('rock','paper' or 'scissors' ");
    return playerChoice

}










//return 1 if player wins
//return 0 if draw
//return -1 if player loses
function playRound( computerChoice , playerChoice )
{   var computerChoice = getComputerChoice().toUpperCase()
    var playerChoice = getPlayerChoice().toUpperCase()
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


function game()
{
    let playerScore=0
    let computerScore=0

    for (let i = 1; i <= 5; i++) {
        console.log('============ ROUND' + i )

        let roundResult = playRound()
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

}


game();