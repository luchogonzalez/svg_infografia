var eventsHandler = {
	initCoords: [60, 168],
	pazCoords: [60, 280],
	verCoords: [60, 380],
	distance: 21
}

eventsHandler.generateEmEvents = function(eventsArray) {
	var that = this;
	var xPos = that.initCoords[0];
	var yPos = 0;
	var pCounter = 0;
	var aCounter = 0;
	var vCounter = 0;

	eventsArray.forEach(function(ev){
		switch (ev.category){ //checks initial Y position of elements
			case 'alegria': 
				yPos = that.initCoords[1] + (aCounter * that.distance);
				aCounter++;
				break;
			case 'paz':
				yPos = that.pazCoords[1] + (pCounter * that.distance);
				pCounter++;
				break;
			case 'verguenza':
				yPos = that.verCoords[1] + (vCounter * that.distance);
				vCounter++;
				break;
		}
		
		//create svg text element with its properties
		var svgTextEvent = $(document.createElementNS("http://www.w3.org/2000/svg", 'text'));

		svgTextEvent.attr('transform', 'matrix(1 0 0 1 '+xPos+' '+yPos+')');
		svgTextEvent.addClass(ev.color + ' popReg fontSize9 letSp3 emotion');
		svgTextEvent.text(ev.text);

		svgTextEvent.hide().appendTo('#main').fadeIn(1000);
	});
}