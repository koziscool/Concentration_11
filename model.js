

var matcherModel = {

	size: 4,
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
	cards: [],
	currentId: 1,
	totalCards: 0,
	numGuesses: 0,
	matchedCards: 0,
	selectedCard: null,
	gameStateText: "You haven't won yet, choose a card.",

	init: function(size){
		this.size = size || this.size;
		var totalPairs = Math.pow( this.size, 2) / 2;
		for( var i = 0; i < totalPairs; i++) this.addPair();
		this.shuffle();
	},

	addPair: function() {
		var value = this.randomValue();
		this.cards.push( new this.Card( this.getId(), value ));
		this.cards.push( new this.Card( this.getId(), value ));
		this.totalCards += 2;
	},

	shuffle: function() {
		var currentIndex = this.cards.length, temp, rand;
		while( currentIndex > 0 ){
			rand = Math.floor( Math.random( ) * currentIndex );
			currentIndex--;

			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},	


	Card: function( id, value ){
		this.id = id;
		this.value = value;
		this.matches = function(otherCard){
			return this.value === otherCard.value;
		}
	},

	getId: function(  ) {
		var id= this.currentId;
		this.currentId++;
		return id;
	},

	randomValue: function( ){
		return this.cardValues[ Math.floor( Math.random() * this.cardValues.length)];
	},

	sameCard: function( id) {
		return this.selectedCard && this.selectedCard.id === id;
	},

	getCard: function(id) {
		for( var index in this.cards){
			if( this.cards[index].id === id ) return this.cards[index];
		}
		return null;
	},

	setSelectedCard: function( id ){
		this.selectedCard = this.getCard(id);	
	},

	checkGuess: function(id){
		this.numGuesses++;

		var thisCard = this.getCard(id);
		var isCorrect = false;

		if( this.selectedCard )
			isCorrect = this.selectedCard.matches( thisCard );

		if( isCorrect ) this.matchedCards += 2;
		this.selectedCard = null;

		if( this.matchedCards === this.totalCards )
			this.gameStateText = "Congratulations, you win!";

		return isCorrect;
	}
}


