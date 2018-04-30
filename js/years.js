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
	$('').addClass('changed blue');
	$('.tCumple').addClass('changed red');
	$('').addClass('changed violet');
});

//94
$('.year.y94').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('.tOcio').addClass('changed red');
	$('.tCumple').addClass('changed violet');
});

//95
$('.year.y95').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//96
$('.year.y96').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//97
$('.year.y97').click(function(){
	master.activate($(this));
	$('.tFies').addClass('changed blue');
	$('.tActo, .tExc').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//98
$('.year.y98').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$(' .tExc').addClass('changed red');
	$('.tActo, .tOcio,  .tCumple').addClass('changed violet');
});
//99
$('.year.y99').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('.tActo, .tExc, .tFies').addClass('changed red');
	$('.tOcio,  .tCumple').addClass('changed violet');
});
//00
$('.year.y00').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('.tCurso').addClass('changed red');
	$('.tOcio, .tActo, .tCumple').addClass('changed violet');
});
//01
$('.year.y01').click(function(){
	master.activate($(this));
	$('').addClass('changed blue');
	$('.tActo, .tCurso').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//02
$('.year.y02').click(function(){
	master.activate($(this));
	$('.tFog').addClass('changed blue');
	$('.tActo, .tCurso').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//03
$('.year.y03').click(function(){
	master.activate($(this));
	$('.tCurso, .tCamp').addClass('changed blue');
	$('.tCoro, .tActo').addClass('changed red');
	$('.tOcio, .tCumple, .tEns, .tFog').addClass('changed violet');
});
//04
$('.year.y04').click(function(){
	master.activate($(this));
	$('.tCurso, .tCome, .tShow, .tCamp, .tMisa').addClass('changed blue');
	$('.tCoro, .tActo, .tFog').addClass('changed red');
	$('.tOcio, .tCumple, .tEns').addClass('changed violet');
});
//05
$('.year.y05').click(function(){
	master.activate($(this));
	$('.tCurso, .tCome, .tShow').addClass('changed blue');
	$('.tCoro, .tActo').addClass('changed red');
	$('.tOcio, .tCumple, .tEns').addClass('changed violet');
});
//06
$('.year.y06').click(function(){
	master.activate($(this));
	$('.tCurso, .tCome, .tCoro, .tEns, .tShow').addClass('changed blue');
	$('').addClass('changed red');
	$('.tActo, .tOcio, .tCumple').addClass('changed violet');
});
//07
$('.year.y07').click(function(){
	master.activate($(this));
	$('.tFies, .tCurso, .tCome, .tCoro, .tEns, .tShow, .tVia').addClass('changed blue');
	$('').addClass('changed red');
	$('.tActo, .tOcio, .tCumple').addClass('changed violet');
});
//08
$('.year.y08').click(function(){
	master.activate($(this));
	$('.tCurso, .tCome, .tCoro, .tEns, .tShow').addClass('changed blue');
	$('.tFies, .tAper, .tFog, .tMaqui, .tReu, .tCamp, .tSke').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//09
$('.year.y09').click(function(){
	master.activate($(this));
	$('.tCurso').addClass('changed blue');
	$('.tActo, tCoro, .tAper, .tFog, .tReu, .tCamp, .tSke').addClass('changed red');
	$('.tEns, .tFies, .tOcio, .tMaqui, .tCumple, .tMisa').addClass('changed violet');
});
//10
$('.year.y10').click(function(){
	master.activate($(this));
	$('.tCurso').addClass('changed blue');
	$('.tActo, tCoro, .tAper, .tFog, .tCamp, .tVia').addClass('changed red');
	$('.tEns, .tReu, .tOcio, .tMaqui, .tCumple, .tMisa, .tSke').addClass('changed violet');
});
//11
$('.year.y11').click(function(){
	master.activate($(this));
	$('.tRet, .tAdor, .tMision').addClass('changed blue');
	$('.tActo, .tShow, .tPrev, .tReci, .tCurso, .tFies, .tAper, .tFog, .tMaqui, .tCamp').addClass('changed red');
	$('.tEns, tCoro, .tReu, .tOcio, .tCumple, .tMisa, .tSke').addClass('changed violet');
});
//12
$('.year.y12').click(function(){
	master.activate($(this));
	$('.tActo, .tFies, .tPen,  .tInsta, .tRet, .tAdor, tCoro, .tMision, .tMisa').addClass('changed blue');
	$('.tDise, .tSke, .tShow, .tCurso, .tMaqui, .tExc, .tAper, .tCamp').addClass('changed red');
	$('.tEns, .tReu, .tPrev, .tOcio, .tReci, .tCumple, .tFog, .tVia').addClass('changed violet');
});
//13
$('.year.y13').click(function(){
	master.activate($(this));
	$('.tPen, .tInsta, .tAdor, tCoro, .tMision, .tMisa').addClass('changed blue');
	$('.tVia, .tSke, .tReci, .tMaqui, .tExc, .tShow, .tFog, .tCurso, .tAper, .tCamp').addClass('changed red');
	$('.tEns, .tReu, .tPrev, .tOcio, .tDise, .tCumple').addClass('changed violet');
});
//14
$('.year.y14').click(function(){
	master.activate($(this));
	$(' .tInsta, .tAdor, tCoro, .tEns, .tRet, .tMision, .tMisa').addClass('changed blue');
	$('.tSke, .tShow, .tFog, .tCurso, .tAper, .tCamp').addClass('changed red');
	$('.tReci, .tReu, .tPrev,  .tOcio, .tDise, .tCumple').addClass('changed violet');
});

//15
$('.year.y15').click(function(){
	master.activate($(this));
	$('.didac, .didacT, tAdor, tCoro .tEns, .tRet, .tMision, .tMisa, .pazD1, .pazD2 ').addClass('changed blue');
	$('.tSke, .tReci, .tFog, .tAper, .tCamp, .alC1, .alC2, .alC3').addClass('changed red');
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