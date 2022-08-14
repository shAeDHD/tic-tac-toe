console.log('main.js connected')                        //      check for main.js conncted to .HTML = true

/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////|globalVariables|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let playerWithPriority = 'playerOne';                   //       variable value: string: of current player turn
let gameWinner = null;                                  //       variable value: string: of game winner
let turnCounter = 0;                                    //       vairable value: integer: of turn in game
let gameRulesShowing = true                             //       variable value: boolean: of rules visibility  

/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////|dataStructures|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const gameBoard = {                                     //              object with grid references of game board. 
    a1  : false,  
    a2  : false,
    a3  : false,
    b1  : false,
    b2  : false,
    b3  : false,
    c1  : false,
    c2  : false,
    c3  : false,
};                                                      //       closes object with grid references of game board. 

const winCondition = [                                  //              nested arrays housing win specifications

    [ 'a1' , 'a2' , 'a3' ],
    [ 'b1' , 'b2' , 'b3' ],
    [ 'c1' , 'c2' , 'c3' ],
    [ 'a1' , 'b1' , 'c1' ],
    [ 'a2' , 'b2' , 'c2' ],
    [ 'a3' , 'b3' , 'c3' ],
    [ 'a1' , 'b2' , 'c3' ],
    [ 'a3' , 'b2' , 'c1' ],

];                                                      //       closes nested arrays housing win specifications

/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////|functions|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const checkWin = function (  ) {                        //              checkWin function
    // debugger

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
            $('#congratsContainer').fadeIn(1000, function(){});
                console.log('congratsBox');

            if ( gameWinner === 'playerOne' ){

                $('#billWinImg').fadeIn(1000, function(){});
                console.log('BillImgIn');
        
                $('#billWinMes').fadeIn(1000, function(){});
                console.log('BillMesIn');
        
        
            } else {
        
                $('#cageWinImg').fadeIn(1000, function(){});
                console.log('CageImgIn');
        
                $('#cageWinMes').fadeIn(1000, function(){});
                console.log('CageMesIn');
            }

        // };                                              //       closes for loop2
        } else if ( gameWinner === null && turnCounter === 9 ) {

            gameWinner = 'Tied Game!'

            $('#congratsContainer').fadeIn(1000, function(){});
            $('#cageDrawImg').fadeIn(1000, function(){});
            $('#billDrawImg').fadeIn(1000, function(){});
            $('#drawMes').fadeIn(1000, function(){});
            
        } else {

        }      
    }; //   closes loop                                           
    //      switch player priority.
    switchPriority();

};                                                      //       closes checkWin function

const playerImageGenerator = function ( ) {             //              playerImageGenerator function

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
    
    

};                                                      //       closes playerImageGenerator function

const switchPriority = function ( ) {                   //              swithPriority function 

    if ( playerWithPriority === 'playerTwo' ) {

        playerWithPriority = 'playerOne'

    } else {
        playerWithPriority = 'playerTwo'

    }    


};                                                      //       closes swithPriority function

/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////|eventListeners|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$('.playingSquare').on('click', function ( ) {          //              eventListener onSquareClick

    // create new variable to house the #id of 'this'(*clicked*) playingSquare.
    const id = $(this).attr('id');

    // create new variable to house the node of current Turn Log
    const $turnIdAsArray                = $('.pLogTurn')                 ;
    const $currentGameLogTurnAsNode     = $turnIdAsArray.eq(turnCounter) ;

    // if/else conditionals to determine if playerOne or playerTwo
    if ( gameBoard[id] === false && playerWithPriority === 'playerOne' ) {
 
        // adds 1 to turnCounter 
        turnCounter++ ;
        // text generated for gameLog 
        let pOneTextLog = `On turn ${turnCounter}, Bill, played into square ${id}...`;

        // find and change 'p' of gameTurn:Log 
        $currentGameLogTurnAsNode.find('p').html(pOneTextLog)
        $currentGameLogTurnAsNode.css('zIndex','251').show()

        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of X image , then append to the current node.
        const playerOneSymbol = playerImageGenerator();
        $(this).append(playerOneSymbol);
        
        // set gameBoard reference to occupied by playerOne.
        gameBoard[id] = 'X';
        // console.log(gameBoard); //    check = true
        
        // checkWin function: if no winner, switch player priority
        
        checkWin();
        // console.log(playerWithPriority); //     check = true        
        
    } else if ( gameBoard[id] === false && playerWithPriority=== 'playerTwo' ) {
        
        // add 1 to turnCounter     
        turnCounter++ ;
        
        // text generated for gameLog 
        let pTwoTextLog = `On turn ${turnCounter}, Mr. Cage, played into square ${id}...`;

        // find and change 'p' of gameTurn:Log 
        $currentGameLogTurnAsNode.find('p').html(pTwoTextLog)
        $currentGameLogTurnAsNode.css('zIndex','251').show()
        
        // reset opacity of background color in all .playingSquare to 0. 
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")   

        // create newVariable of O image and then append to the current node.
        const playerTwoSymbol = playerImageGenerator()
        $(this).append(playerTwoSymbol);

        // set gameBoard reference to occupied by playerTwo.
        gameBoard[id] = 'O';
        // console.log(gameBoard); //    check = true
    
        // checkWin function: if no winner, switch player priority
        checkWin();
        // console.log(playerWithPriority); //     check = true  

    } else {

        // change opacity of background red color to 1. 
        $(this).css("backgroundColor", "rgba(255, 0, 0, 1)")

    } //        closes if/else  


});                                                     //       closes eventListener onSquareClick

$('#rulesButton').on('click' , function(){              //              eventListener for gameRules
    
    // check to see if gameRules are showing
    if ( gameRulesShowing ) {

        // initates if .css changes to #gameRules        
        $('#gameRules').animate({
            height : '2vh',
            top: '1vh'
        }, 3000, function(){
        })//closes if .css changes to #gameRules

        // switches gameRulesShowing value
        gameRulesShowing = false
    } else {

        // initates else .css changes to #gameRules
        $('#gameRules').animate({
           height : '25vh',
 
        },3000, function(){

        })//closes else .css changes to #gameRules

        // switches gameRulesShowing value
        gameRulesShowing = true

    } //    closes if/else tree   

})                                                      //       closes eventListener for gameRules

$('#original').on('click' , function(){                 //              eventListener for Game Mode: ORIGINAL
    
    // bring gameLog to front
    $('#gameLog')
    .animate({ width : '52.3vw', zIndex: '75'}, 3000 ) 
        
    // if condition for gamesRules
    if ( gameRulesShowing ) {
        // initates .css changes to #gameRules        
        $('#gameRules')
        .animate({ height : '2.5vh', top: '1.3vh', textAlign: 'left'}, 3000 )
        $('#heading')
        .animate({ margin: '0 0 4vh 0' }, 3000 )
        $('#rulesText')
        .animate({ left: '-20vw' }, 3000)
        
        // switches gameRulesShowing value
        gameRulesShowing = false
    } else {
        // initates .css changes to #gameRules
        $('#gameRules').animate({
            height : '25vh',
            top: '1vh',
            
        },3000, function(){
        })

        // switches gameRulesShowing value
        gameRulesShowing = true

    }//     closes if/else tree       
});                                                     //       closes eventListener for Game Mode: ORIGINAL

$('#other').on('click', function (){                    //              eventListener for Game Mode: OTHER

    // bring gameLog to front
    $('#gameLog').css('zIndex' , 75 )

    // reposition gameLog area
    $('#gameLog')
      .animate( { width : '110vw' }, 200 )
      .animate( { width : '43vw' }, 500 )
      .animate( { width : '52.3vw' }, 2000);

    // if condition for gameRules
    if ( gameRulesShowing ) {
        // initates .css changes to #gameRules        
        $('#gameRules')
        .animate({ height : '28vh' , top: '-2vh'}, 200)
        .animate({ height : '1vh'  , top: '5vh'}, 500)
        .animate({ height : '2.5vh', top: '1.3vh'}, 2000);

        // initates .css changes to #heading
        $('#heading')
        .animate({ margin: '2.5vh 0 0 0' }, 200)
        .animate({ margin: '0 0 8vh 0'   }, 500)
        .animate({ margin: '0 0 7vh 0'   }, 2000);
        
        // aligns #rulesText to the left
        $('#rulesText').css('textAlign' , 'left')
        
        // switches gameRulesShowing value
        gameRulesShowing = false

    } else {
        // initates .css changes to #gameRules
        $('#gameRules').animate({
           height : '25vh',
        },3000, function(){
        })
        // switches gameRulesShowing value
        gameRulesShowing = true
    } //    closses if/else

    

});                                                     //       closes eventListener for Game Mode: OTHER