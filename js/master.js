//master object, encargado de manejar la logica de activado y desactivado de combinaciones de colores
var master = {
	activeElement: $('body'), //initialize with something
	that: this
}

master.reset = function(){
	if(this.activeElement.hasClass('year')){
		this.activeElement.children('path').removeClass('activeYearPath');
		this.activeElement.children('text').removeClass('activeYearText');
	}

	//if it is a changed element, removes the last added class (fill)
	$('.component').each(function(){
		if($(this).hasClass('changed')){
			actualFill = $(this).attr('class').split(' ').pop();
			$(this).removeClass(actualFill);
			$(this).removeClass('changed');
		}
	});

	//Removes emotions
	$('.emotion').each(function(){
		$(this).fadeOut("normal", function() {
        	$(this).remove();
    	});
	});

}

master.activate = function(newActive){
	this.reset();
	this.activeElement = newActive;
	
	//set fixed fill for active years
	if(this.activeElement.hasClass('year')){
		this.activeElement.children('path').addClass('activeYearPath');
		this.activeElement.children('text').addClass('activeYearText');
	}
}

