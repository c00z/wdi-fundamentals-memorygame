var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/*if (cardTwo === cardFour) {
	alert("Sorry, try again.");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!")
}*/

var createCards = function() {

var gameBoard = document.getElementById('game-board');

    for (i=0; i<4; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        gameBoard.appendChild(cardDiv);
    }
}

createCards();
