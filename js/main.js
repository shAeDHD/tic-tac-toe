console.log('main.js connected')

 

const checkIfSquareOccupied = { 
    a1  : false,
    a2  : false,
    a3  : false,
    b1  : false,
    b2  : false,
    b3  : false,
    c1  : false,
    c2  : false,
    c3  : false,
}

$('.playingSquare').on('click', function (  ) {
    // console.log('$a1 clicked');     //      check = true 
    console.log(this);                 //      check = true
    const id = $(this).attr('id');

    if ( checkIfSquareOccupied[id] === false  ) {
        $('.playingSquare').css("backgroundColor", "rgba(255, 0, 0, 0)")
        checkIfSquareOccupied[id] = true;
        const $XImage = $('<img src="images/plain X.png">');
        $XImage.addClass('placedCharacters');
        $(this).append($XImage);

        console.log(checkIfSquareOccupied) //    check = true
    

    } else {

        $(this).css("backgroundColor", "rgba(255, 0, 0, 1)")


    } 


});



// $('#a1').on('click', function ( ) {
//     // console.log('$a1 clicked');     //      check = true 
//     const $XImage = $('<img src="images/plain X.png">');
//     $XImage.addClass('placedCharacters');
//     $('#a1').append($XImage);
//     checkIfSquareOccupied.a1 = true;
//     // console.log(checkIfSquareOccupied.a1);       //      check = true

// })


// gridSquares.$a1.on('click', function ( ) {
//     console.log('$a1 clicked');     //      check = true 
//     const $OImage = $('<img src="images/plain O.png">');
//     $OImage.addClass('placedCharacters');
//     $('#a1').append($OImage);
//     console.log($OImage);       //      check = true

// })
// gridSquares.$a2.on('click', function ( ) {
//     console.log('$a2 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#a2').append($OImage);
//     console.log($OImage);
// })
// gridSquares.$a3.on('click', function ( ) {
//     console.log('$a3 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#a3').append($OImage);
//     console.log($OImage);
// })
// gridSquares.$b1.on('click', function ( ) {
//     console.log('$b1 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#b1').append($OImage);
//     console.log($OImage);
// })
// gridSquares.$b2.on('click', function ( ) {
//     console.log('$b2 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#b2').append($OImage);
//     console.log($OImage);
// })
// gridSquares.$b3.on('click', function ( ) {
//     console.log('$b3 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#b3').append($OImage);
//     console.log($OImage);
// })
// gridSquares.$c1.on('click', function ( ) {
//     console.log('$c1 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#c1').append($OImage);
//     console.log($OImage);

// })
// gridSquares.$c2.on('click', function ( ) {
//     console.log('$c2 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#c2').append($OImage);
//     console.log($OImage);

// })
// gridSquares.$c3.on('click', function ( ) {
//     console.log('$c3 clicked');     //      check = true
//     const $OImage = $('<img src="images/plain O.png">')
//     $OImage.addClass('placedCharacters');
//     $('#c3').append($OImage);
//     console.log($OImage);       //      check = true
// })



// PSEUDO-CODE for GAME LOGIC


// there are two players, either player one or player two goes first.
    // for first draft, first person to click will go first. 
        // in future draft, random number generator to determine. 

// when one player clicks on a square, they place their symbol in that square - then it becomes the other players turn.
    //  the first player to get '3 in a row' wins. 
    //  cannot overide other players placement.

// const squareSelected = function (  ) {
    
//     gridSquares = { 
//         $a1  : $("#a1"),
//         $a2  : $("#a2"),
//         $a3  : $("#a3"),
//         $b1  : $("#b1"),
//         $b2  : $("#b2"),
//         $b3  : $("#b3"),
//         $c1  : $("#c1"),
//         $c2  : $("#c2"),
//         $c3  : $("#c3"),
//     };
//     if 


// };


// const playerOneChooses = function ( squareSelected, ) {
    

// };

// const playerTwoChooses = function (squareSelected, ) {


// };

// const threeInARow = function (){
//     if ( df ) {

//     }


// };