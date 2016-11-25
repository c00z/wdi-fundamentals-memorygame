 // console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

/*if (cardTwo === cardFour) {
	alert("Sorry, try again.");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!")
}*/


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {
  	var cardDiv = document.createElement('div');
  	cardDiv.className = 'card';
  	cardDiv.setAttribute('data-card', cards[i]);
  	cardDiv.addEventListener('click', isTwoCards);
    board.appendChild(cardDiv);
    board.appendChild(cardDiv);
  }

};

function isTwoCards() {
  
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png' width=150px height=200px>"; 
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png' width=150px height=200px>"; 
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();