console.log('main.js connected')
let playerWithPriority = 'playerOne';
let gameWinner = null;

playerWithPriority

//  function to alternate between players on square click.
const switchPriority = function ( ) {

    if ( playerWithPriority === 'playerTwo' ) {

        playerWithPriority = 'playerOne'

    } else {
        playerWithPriority = 'playerTwo'

    }    


}; //       closes swithPriority

//  object containing grid references for game board. 
const gameBoard = { 
    a1  : 'X',  
    a2  : false,
    a3  : false,
    b1  : false,
    b2  : false,
    b3  : false,
    c1  : false,
    c2  : false,
    c3  : false,
}; //       closes gameBoard

console.log(Object.keys(gameBoard));
console.log(Object.values(gameBoard));
console.log(gameBoard.a1)

const gameBoardResultsAsArray = Object.values(gameBoard)
console.log(gameBoardResultsAsArray);
 

// if all of a,b, or c have the same value, that player wins. 
// if (  ) {

    if ( gameBoard.a1 === gameBoard.a2 && gameBoard.a3 === gameBoard.a1 && Object.values(`${gameBoard[0,1,2]}`) !== false) {
        
        gameWinner = playerWithPriority

    } else if ( gameBoard.b1 === gameBoard.b2 && gameBoard.b3 === gameBoard.b1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.c1 === gameBoard.c2 && gameBoard.c3 === gameBoard.b1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.a1 === gameBoard.b1 && gameBoard.c1 === gameBoard.b1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.a2 === gameBoard.b2 && gameBoard.c2 === gameBoard.b1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.a3 === gameBoard.b3 && gameBoard.c3 === gameBoard.b1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.a1 && gameBoard.b2 === gameBoard.c3 && gameBoard.a1 ) {

        gameWinner = playerWithPriority

    } else if ( gameBoard.a3 && gameBoard.b2 === gameBoard.c1 && gameBoard.a1 ) {

        gameWinner = playerWithPriority

    } else {


    }


// } else {



// }



// if all of 1,2, or 3 have the same value, that player wins.
// if a1, b2, c3 or a3, b2, c1 have the same value, that player wins. 

// creates player's symbol/image to place into square
const playerImageGenerator = function () {

    if ( playerWithPriority === 'playerOne' ) {
    
        const $XImage = $('<img src="images/plain X.png">')
        $XImage.addClass('placedCharacters') 
        console.log($XImage)
        return $XImage
    
    } else {

        const $OImage = $('<img src="images/plain O.png">');
        $OImage.addClass('placedCharacters');

        console.log($OImage)
        return $OImage

    } 
    
    

}; //       closes playerImageGenerator


// eventListener that activates when a grid square is clicked.
$('.playingSquare').on('click', function (  ) {
    console.log(this);                 //      check = true

    // create new variable to house the #id of 'this'(*clicked*) playingSquare.
    const id = $(this).attr('id');

    if ( gameBoard[id] === false && playerWithPriority === 'playerOne' ) {
        
        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of X image and then append to the current node.
        const playerOneSymbol = playerImageGenerator();
        $(this).append(playerOneSymbol);

        // set gameBoard reference to occupied by playerOne.
        gameBoard[id] = 'X';
        console.log(gameBoard); //    check = true
    
        // switch player priority from playerOne to playerTwo.
        switchPriority();
        console.log(playerWithPriority); //     check = true

    } else if (gameBoard[id] === false && playerWithPriority === 'playerTwo'  ) {

        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of O image and then append to the current node.
        const playerTwoSymbol = playerImageGenerator()
        $(this).append(playerTwoSymbol);

        // set gameBoard reference to occupied by playerTwo.
        gameBoard[id] = 'O';
        console.log(gameBoard); //    check = true
    
        // switch player priority from playerTwo to playerOne.
        switchPriority();
        console.log(playerWithPriority); //     check = true    

    } else {

        // change opacity of background red color to 1. 
        $(this).css("backgroundColor", "rgba(255, 0, 0, 1)")

    } //        closes if/else  


}); //      closes .onSquareClick eventListener


