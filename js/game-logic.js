// All code should be written in this file.

/*Twelve global variables representing each player’s move types and values (3 move types and 3 move values for each player). 
These variable names should be in the form of playerOneMoveOneType, playerOneMoveOneValue, etc.*/

let playerOneMoveOneType
let playerOneMoveOneValue

let playerOneMoveTwoType
let playerOneMoveTwoValue

let playerOneMoveThreeType
let playerOneMoveThreeValue

let playerTwoMoveOneType
let playerTwoMoveOneValue

let playerTwoMoveTwoType
let playerTwoMoveTwoValue

let playerTwoMoveThreeType
let playerTwoMoveThreeValue

/*A function called setPlayerMoves, which will take a string representing a player (in the form of 'Player One' or 'Player Two'), 
three move types, and three move values, and set the correct global move variables. The method signature for this function should 
be as follows: setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).*/

function setPlayerOneMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

}




function setComputerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

}


/*A function called getRoundWinner, which takes a round number (1, 2, or 3), compares both player’s move types and values for 
that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')*/

function getRoundWinner(roundNumber) {
    if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue === playerTwoMoveOneValue) {
        console.log('Round 1: Tie')
    } else if (playerOneMoveOneType === playerTwoMoveOneValue && playerOneMoveOneValue > playerTwoMoveOneValue) {
        console.log("Player 1 wins by" + playerOneMoveOneValue - playerTwoMoveOneType + " number of points!")
    } else {
        console.log("Player Two wins");
        roundNumber++
        console.log("It is currently round " + roundNumber)
    }
}


/*A function called getGameWinner, which compares both player’s move types and values for the whole game and returns the 
appropriate winner ('Player One', 'Player Two', or 'Tie')*/

function getGameWinner


/*Bonus: A function called setComputerMoves, which chooses three random moves for player two. The move type for each move should 
be completely random, and the move values should be random but add up to 99.*/
