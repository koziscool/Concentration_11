

var matcherView = {
	model: matcherModel,

	init: function(){
		this.$grid = $("#matcher-grid");
		this.addCardsToGrid();

		var width = 100.0 / this.model.size - 2;
		$('.card').css({
			width: width + "%"
		});

		$(".card").click( function(e){
			matcherController.selectCard( $(this).data('card-id') );
		});
	},

	addCardsToGrid: function() {
		for( var i = 0; i < this.model.cards.length; i++ ){
			var card = this.model.cards[i];
			var $cardDiv = $("<div><div class='name'>" 
				+ card.value + "</div></div>" );
			$cardDiv.addClass('card');
			$cardDiv.data('card-id', card.id);
			$cardDiv.attr('id', 'card-' + card.id);
			this.$grid.append($cardDiv);
		}
	},

	revealCard: function( id) {
		$("#card-" + id).addClass('revealed')
	},


	updateGameView: function() {

	},
};
