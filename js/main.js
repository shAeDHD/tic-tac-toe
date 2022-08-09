console.log('main.js connected')
//              globalVariables
let playerWithPriority = 'playerOne';
let gameWinner = null;

//  function to alternate between players on square click.
const switchPriority = function ( ) {                   //              swithPriority 

    if ( playerWithPriority === 'playerTwo' ) {

        playerWithPriority = 'playerOne'

    } else {
        playerWithPriority = 'playerTwo'

    }    


};                                                      //       closes swithPriority

//  object containing grid references for game board. 
const gameBoard = {                                     //              gameBoard
    a1  : false,  
    a2  : false,
    a3  : false,
    b1  : false,
    b2  : false,
    b3  : false,
    c1  : false,
    c2  : false,
    c3  : false,
};                                                      //       closes gameBoard

//  array housing arrays containing win specifications.
const winCondition = [                                  //              winCondition

    [ 'a1' , 'a2' , 'a3' ],
    [ 'b1' , 'b2' , 'b3' ],
    [ 'c1' , 'c2' , 'c3' ],
    [ 'a1' , 'b1' , 'c1' ],
    [ 'a2' , 'b2' , 'c2' ],
    [ 'a3' , 'b3' , 'c3' ],
    [ 'a1' , 'b2' , 'c3' ],
    [ 'a3' , 'b2' , 'c1' ],

];                                                      //       closes winCondition

//  function to checks if player with priority has won.
const checkWin = function (  ) {                        //              checkWin
    //      loop through winCondition array    
    for (let i = 0 ; i < winCondition.length ; i++ ) {
        //      store value of current loop iteration in new variable. 
        const winConditionTriplet = winCondition[i]

        //      saves each winConditionTriplet iteration as a variable
        //      for comparative access to the gameBoard object.
        const firstPos      = winConditionTriplet[0]
        const secondPos     = winConditionTriplet[1]
        const thirdPos      = winConditionTriplet[2]

        //      checks if any of the winConditions are matched on the gameBoard.
        if ( gameBoard[firstPos] === gameBoard[secondPos] && gameBoard[firstPos] === gameBoard[thirdPos] && gameBoard[firstPos] !== false ) { 

            //      if a win condition is met, player with priority has won the game. 
            gameWinner = playerWithPriority

        //      loop through individual arrays within winCondition array
        
        // for (let i = 0 ; i < 3 ; i++ ) {                //              for loop2

        //     const winConditionSquare = winConditionTriplet[i]
            
        //     // console.log(gameBoard[winConditionSquare]);

        // };                                              //       closes for loop2
        } else if ( gameWinner === null && Object.values(gameBoard) !== false ) {

            gameWinner = 'Tied Game!'
            
        } else {

        }      
    }; //   closes loop                                           
    //      switch player priority.
    switchPriority();

};                                                      //       closes checkWin

// creates player's symbol/image to place into square.
const playerImageGenerator = function ( ) {             //              playerImageGenerator

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
    
    

};                                                      //       closes playerImageGenerator

// eventListener that activates when a grid square is clicked.
$('.playingSquare').on('click', function ( ) {          //              onSquareClick eventListener
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
    
        // checks for win condition - if no winner, switch player priority from playerOne to playerTwo.
        checkWin();
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
    
        // checks for win condition - if no winner, switch player priority from playerTwo to playerOne.
        checkWin();
        console.log(playerWithPriority); //     check = true    

    } else {

        // change opacity of background red color to 1. 
        $(this).css("backgroundColor", "rgba(255, 0, 0, 1)")

    } //        closes if/else  


});                                                     //       closes onSquareClick eventListener


