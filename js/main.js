console.log('main.js connected')
let playerTurn = 'playerTwo';

//  function to alternate between players on square click.
const switchPriority = function ( ) {

    if ( playerTurn === 'playerOne' ) {

        playerTurn = 'playerTwo'

    } else {
        playerTurn = 'playerOne'

    }    


}; //       closes swithPriority

//  object containing grid references for game board. 
const gameBoard = { 
    a1  : false,  
    a2  : false,
    a3  : false,
    b1  : false,
    b2  : false,
    b3  : false,
    c1  : false,
    c2  : false,
    c3  : false,
}; //       closes gameBoard





// eventListener that activates when a grid square is selected.
$('.playingSquare').on('click', function (  ) {
    // console.log('$a1 clicked');     //      check = true 
    console.log(this);                 //      check = true

    //      create new variable to house the #id of 'this' playingSquare.
    const id = $(this).attr('id');

    if ( gameBoard[id] === false && playerTurn === 'playerOne' ) {
        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of X image and then append to the current node.
        const $XImage = $('<img src="images/plain X.png">');
        $XImage.addClass('placedCharacters');
        $(this).append($XImage);

        gameBoard[id] = 'O';
        console.log(gameBoard); //    check = true
    
        switchPriority();
        console.log(playerTurn); //     check = true
        

    } else if (gameBoard[id] === false && playerTurn === 'playerTwo'  ) {

        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of O image and then append to the current node.
        const $OImage = $('<img src="images/plain O.png">');
        $OImage.addClass('placedCharacters');
        $(this).append($OImage);

        gameBoard[id] = 'O';
        console.log(gameBoard); //    check = true
    
        switchPriority();
        console.log(playerTurn); //     check = true    



    } else {

        // change opacity of background red color to 1. 
        $(this).css("backgroundColor", "rgba(255, 0, 0, 1)")

    } //        closes if/else  


}); //      closes .onSquareClick