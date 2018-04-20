//years.js: scripts to handle year events

function activeColor(yearGroup){
	yearGroup.children("path").switchClass('whiteFill', 'violet');
	yearGroup.children("text").switchClass('violet', 'whiteFill');
}

function resetColor(yearGroup){
	yearGroup.children("path").switchClass('violet', 'whiteFill');
	yearGroup.children("text").switchClass('whiteFill', 'violet');
}


$('.year').hover(function(){
	activeColor($(this));
}, function(){
	resetColor($(this));
});


//All years
$('.year').click(function(){
	activeColor($(this));
});

//93
$('.year.y93').click(function(){
	master.activate($(this));

	$('.p1').addClass('changed violet');

	$('.gui').addClass('changed red');

	$('.per').addClass('changed blue');

	$('.fac').addClass('changed violet');	

	$('.imp').addClass('changed red');
});

//94
$('.year.y94').click(function(){
	master.activate($(this));

	$('.p1').addClass('changed violet');

	$('.gui').addClass('changed blue');

	$('.per').addClass('changed violet');

	$('.fac').addClass('changed red');	

	$('.imp').addClass('changed blue');
});

//95
//96
//97
//98
//99
//00
//01
//02
//03
//04
//05
//06
//07
//08
//09
//10
//11
//12
//13
//14
//15
//16
//17
$('.year.y17').click(function(){
	master.activate($(this));
	$('.gui, .pan, .coreo, .popB, .jazz, .popC, .igle, .illu, .acua, .alD1, .alD2, .alD3, .verD1, .verD2, .verD3, .guionT, .panT, .corT, .popT, .jazzT, .popCT, .igleT, .illuT, .acuT, .tCome, .tEns, .tMate, .tMisa, .tMision, .tPen, .tShow').addClass('changed blue');
	$('.per, .didac, .orien, .salsa, .folk, .disney, .didacC, .folkC, .lap, .fibraP, .alC1, .alC2, .perT, .folkT, .didacT, .salsaT, .orienT, .didacCT, .disneyT, .folkCT, .lapT, .fibraPT, .tAper, .tCamp, .tFog, .tReci, .tSke, .tZumb').addClass('changed red');
	$('.fibra, .acri, .acriT, .fibraT, .tCumple, .tDise, .tInsta, .tOcio, .tPrev, .tReu, .tVia').addClass('changed violet');

	var showComedia = {
		text: 'SHOW COMEDIA',
		color: 'blue',
		category: 'alegria'
	}
	var actoScout = {
		text: 'ACTO SCOUT',
		color: 'red',
		category: 'alegria'
	}
		var test1 = {
		text: 'ENTREGA CINTO',
		color: 'red',
		category: 'paz'
	}
			var test2 = {
		text: 'ITINERANCIA',
		color: 'red',
		category: 'paz'
	}
				var test3 = {
		text: 'BOOTCAMP',
		color: 'blue',
		category: 'paz'
	}
				var test4 = {
		text: 'CLASE CAIDA LIBRE',
		color: 'red',
		category: 'verguenza'
	}

	eventsHandler.generateEmEvents([showComedia, actoScout, test1, test2, test3, test4]);
});