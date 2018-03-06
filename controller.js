
var matcherController = {
	model:matcherModel,
	view: matcherView,
	selecting: false,

	init: function(size) {
		this.model.init(size);
		this.view.init();
	},


	selectCard: function( id ){
		if( this.selecting ||  this.model.sameCard( id) ) return;
		this.selecting = true;

		this.view.revealCard( id );

		if( this.model.selectedCard ){
			var selectedId = this.model.selectedCard.id;
			var isCorrect = this.model.checkGuess(id);
			this.view.updateGameView();
			var that = this;

			if( isCorrect ){
				setTimeout( function(){
					that.view.setCorrect(id);
					that.view.setCorrect(selectedId);
					that.selecting = false;
				}, 500);
			} else {
				setTimeout( function(){
					that.view.hideCards();
					that.selecting = false;
				}, 1500);
			}
		} else {
			this.model.setSelectedCard( id );
			this.selecting = false;
		}
	},
};


