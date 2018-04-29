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
$('.year.y15').click(function(){
	master.activate($(this));

	$('.didac, .didacT, tAdor, tCoro .tEns, .tRet, .tMision, .tMisa, .pazD1, .pazD2 ').addClass('changed blue');
	$('.alC1, .alC2, .alC3').addClass('changed red');
	$('.tVia, .tReu, .tPrev, .tPen, .tCurso, .tOcio, .tInsta, .tDise, .tCumple').addClass('changed violet');

	var arm = {
		text: 'VIAJE A ARMENIA',
		color: 'red',
		category: 'alegria'
	}
	var uke = {
		text: 'COMPRA UKELELE',
		color: 'blue',
		category: 'paz'
	}

	eventsHandler.generateEmEvents([arm, uke]);

});

//16
$('.year.y16').click(function(){
	master.activate($(this));

	$('.popB, .igle, .lap, .fibra, .acua, .lapP, .alD1, .alD2, .popT, .igleT, .lapT, .fibraT, .acuT, .lapPT, .tEns, .tFies, .tVia, .tRet, .tMision, .tMisa ').addClass('changed blue');
	$('.fac, .imp, .per, .didac, .folk, .salsa, .illu, .alC1, .alC2, .alC3, .facialT, .improT, .perT, .didacT, .folkT, .salsaT, .illuT, .tAper, .tCamp, .tCurso, .tFog, .tReci, .tZumb, .tSke').addClass('changed red');
	$('.popC, .folkC, .acri, .popCT, .folkCT, .acriT, .tReu, .tPrev, .tPen, .tOcio, .tInsta, .tDise, .tCumple').addClass('changed violet');

	var instag = {
		text: 'INSTAGRAMMER',
		color: 'red',
		category: 'alegria'
	}
	var mision = {
		text: 'NUEVA MISION',
		color: 'blue',
		category: 'alegria'
	}

	eventsHandler.generateEmEvents([instag, mision]);
});

//17
$('.year.y17').click(function(){
	master.activate($(this));
	$('.gui, .pan, .coreo, .popB, .jazz, .popC, .igle, .illu, .acua, .alD1, .alD2, .alD3, .verD1, .verD2, .verD3, .guionT, .panT, .corT, .popT, .jazzT, .popCT, .igleT, .illuT, .acuT, .tCome, .tEns, .tMate, .tMisa, .tMision, .tPen, .tShow').addClass('changed blue');
	$('.per, .didac, .orien, .salsa, .folk, .disney, .didacC, .folkC, .lap, .fibraP, .alC1, .alC2, .perT, .folkT, .didacT, .salsaT, .orienT, .didacCT, .disneyT, .folkCT, .lapT, .fibraPT, .tAper, .tCamp, .tFog, .tReci, .tSke, .tZumb').addClass('changed red');
	$('.fibra, .acri, .acriT, .fibraT, .tCumple, .tDise, .tInsta, .tOcio, .tPrev, .tReu, .tVia').addClass('changed violet');

	var viaje = {
		text: 'VIAJE A NY',
		color: 'red',
		category: 'alegria'
	}
	var music = {
		text: 'MUSICALES EN BROADWAY',
		color: 'blue',
		category: 'alegria'
	}
	var showComedia = {
		text: 'SHOW COM. MUSICAL',
		color:'blue',
		category: 'verguenza'
	}

	eventsHandler.generateEmEvents([showComedia, viaje, music]);
});