
console.log("cardmatcher");

$(document).ready( function(){
	$("#grid-size").focus();
	$("#grid-size-submit").click( function(e){
		e.preventDefault();
		var size = $("#grid-size").val();
		matcherController.init(size);
		$(this).closest('form').hide();
		matcherView.updateGameView();
	});
});

