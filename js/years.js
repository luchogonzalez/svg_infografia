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
	$('.alD1, .alD2, .alD3').addClass('changed blue');
	$('.tOcio').addClass('changed red');
	$('.tCumple').addClass('changed violet');

	var nac = {
		text: 'NACIMIENTO',
		color:'blue',
		category: 'alegria'
	}
	eventsHandler.generateEmEvents([nac]);
});

//95
$('.year.y95').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .lapP, .lapPT, .biro, .biroT, .manos, .manosT, .fibra, .fibraT, .lap, .lapT, .didac, .didacT, .disney, .disneyT, .didacC, .didacCT').addClass('changed blue');
	$('').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//96
$('.year.y96').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .lapP, .lapPT, .manos, .manosT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .didac, .didacT, .disney, .disneyT, .didacC, .didacCT').addClass('changed blue');
	$('').addClass('changed red');
	$('.tOcio, .tCumple').addClass('changed violet');
});
//97
$('.year.y97').click(function(){
	master.activate($(this));
	$('.manos, .manosT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .didac, .didacT, .jazz, .jazzT, .coreo, .corT, .imp, .improT, .disney, .disneyT, .tFies').addClass('changed blue');
	$('.acua, .acuT, .tActo, .tExc').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .didacC, .didacCT, .tOcio, .tCumple').addClass('changed violet');
});
//98
$('.year.y98').click(function(){
	master.activate($(this));
	$('.manos, .manosT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .didac, .didacT, .jazz, .jazzT, .coreo, .corT, .imp, .improT').addClass('changed blue');
	$('.acua, .acuT, .tExc').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .didacC, .didacCT, .tActo, .tOcio,  .tCumple').addClass('changed violet');
});
//99
$('.year.y99').click(function(){
	master.activate($(this));
	$('.manos, .manosT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .didac, .didacT, .imp, .improT').addClass('changed blue');
	$('.acua, .acuT, .orien, .orienT, .popC, .popCT, .folkC, .folkCT, .tActo, .tExc, .tFies').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .didacC, .didacCT, .tOcio,  .tCumple').addClass('changed violet');
});
//00
$('.year.y00').click(function(){
	master.activate($(this));
	$('.biro, .biroT, .imp, .improT, .patria, .patriaT, .igle, .igleT, .didacC, .didacCT').addClass('changed blue');
	$('.tizaP, .tizaPT, .manos, .manosT, .coreo, .corT, .per, .perT, .pan, .panT, .popC, .popCT, .folkC, .folkCT, .tCurso').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .acua, .acuT, .fibra, .fibraT, .lap, .lapT, .tOcio, .tActo, .tCumple').addClass('changed violet');
});
//01
$('.year.y01').click(function(){
	master.activate($(this));
	$('.biro, .biroT, .imp, .improT, .igle, .igleT').addClass('changed blue');
	$('.tizaP, .tizaPT, .manos, .manosT, .coreo, .corT, .per, .perT, .pan, .panT, .popC, .popCT, .folkC, .folkCT, .tActo, .tCurso').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .acua, .acuT, .fibra, .fibraT, .lap, .lapT, .tOcio, .tCumple').addClass('changed violet');
});
//02
$('.year.y02').click(function(){
	master.activate($(this));
	$('.biro, .biroT, .imp, .improT, .igle, .igleT, .tFog').addClass('changed blue');
	$('.tizaP, .tizaPT, .manos, .manosT, .coreo, .corT, .per, .perT, .pan, .panT, .tActo, .tCurso').addClass('changed red');
	$('.fibraP, .fibraPT, .lapP, .lapPT, .acua, .acuT, .fibra, .fibraT, .lap, .lapT, .tOcio, .tCumple').addClass('changed violet');
});
//03
$('.year.y03').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .acua, .acuT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .folk, .folkT, .jazz, .jazzT, .imp, .improT, .gui, .guionT, .disney, .disneyT, .igle, .igleT, .tCurso, .tCamp').addClass('changed blue');
	$('.per, .perT, .tCoro, .tActo').addClass('changed red');
	$('.coreo, .corT, .pan, .panT, .tOcio, .tCumple, .tEns, .tFog').addClass('changed violet');
});
//04
$('.year.y04').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .acua, .acuT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .folk, .folkT, .jazz, .jazzT, .imp, .improT, .gui, .guionT, .disney, .disneyT, .igle, .igleT, .tCurso, .tCome, .tShow, .tCamp, .tMisa').addClass('changed blue');
	$('.per, .perT, .folkC, .folkCT, .tCoro, .tActo, .tFog').addClass('changed red');
	$('.coreo, .corT, .pan, .panT, .tOcio, .tCumple, .tEns').addClass('changed violet');
});
//05
$('.year.y05').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .acua, .acuT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .jazz, .jazzT, .imp, .improT, .gui, .guionT, .popC, .popCT, .disney, .disneyT, .tCurso, .tCome, .tShow').addClass('changed blue');
	$('.per, .perT, .folkC, .folkCT, .tCoro, .tActo').addClass('changed red');
	$('.folk, .folkT, .coreo, .corT, .pan, .panT, .tOcio, .tCumple, .tEns').addClass('changed violet');
});
//06
$('.year.y06').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .acua, .acuT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .clasico, .clasicoT, .jazz, .jazzT, .coreo, .corT, .imp, .improT, .pan, .panT, .gui, .guionT, .popC, .popCT, .disney, .disneyT, .tCurso, .tCome, .tCoro, .tEns, .tShow').addClass('changed blue');
	$('').addClass('changed red');
	$('.folk, .folkT, .tActo, .tOcio, .tCumple').addClass('changed violet');
});
//07
$('.year.y07').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .jazz, .jazzT, .popB, .popT, .coreo, .corT, .corp, .corpT, .per, .perT, .imp, .improT, .pan, .panT, .gui, .guionT, .patria, .patriaT, .popC, .popCT, .disney, .disneyT, .tFies, .tCurso, .tCome, .tCoro, .tEns, .tShow, .tVia').addClass('changed blue');
	$('.folk, .folkT').addClass('changed red');
	$('.tActo, .tOcio, .tCumple').addClass('changed violet');
});
//08
$('.year.y08').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .lapP, .lapPT, .biro, .biroT, .lap, .lapT, .jazz, .jazzT, .popC, .popCT, .tCurso, .tCome, .tCoro, .tEns, .tShow').addClass('changed blue');
	$('.cosm, .cosmT, .manos, .manosT, .didac, .didacT, .per, .perT, .imp, .improT, .tFies, .tAper, .tFog, .tMaqui, .tReu, .tCamp, .tSke').addClass('changed red');
	$('.acri, .acriT, .fibra, .fibraT, .popB, .popT, .tOcio, .tCumple').addClass('changed violet');
});
//09
$('.year.y09').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .lap, .lapT, .igle, .igleT, .tCurso').addClass('changed blue');
	$('.salsa, .salsaT, .didac, .didacT, .per, .perT, .imp, .improT, .pan, .panT, .salsaC, .salsaCT, .tActo, tCoro, .tAper, .tFog, .tReu, .tCamp, .tSke').addClass('changed red');
	$('.cosm, .cosmT, .popB, .popT, .popC, .popCT, .tEns, .tFies, .tOcio, .tMaqui, .tCumple, .tMisa').addClass('changed violet');
});
//10
$('.year.y10').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .fibra, .fibraT, .lap, .lapT, .pan, .panT, .gui, .guionT, .disney, .disneyT, .tCurso').addClass('changed blue');
	$('.orien, .orienT, .didac, .didacT, .salsaC, .salsaCT, .folkC, .folkCT, .tActo, tCoro, .tAper, .tFog, .tCamp, .tVia').addClass('changed red');
	$('.cosm, .cosmT, .popB, .popT, .per, .perT, .imp, .improT, .popC, .popCT, .igle, .igleT, .tEns, .tReu, .tOcio, .tMaqui, .tCumple, .tMisa, .tSke').addClass('changed violet');
});
//11
$('.year.y11').click(function(){
	master.activate($(this));
	$('.tiza, .tizaT, .jazz, .jazzT, .tRet, .tAdor, .tMision').addClass('changed blue');
	$('.manos, .manosT, .biro, .biroT, .biro, .biroT, .orien, .orienT, .didac, .didacT, .patria, .patriaT, .tActo, .tShow, .tPrev, .tReci, .tCurso, .tFies, .tAper, .tFog, .tMaqui, .tCamp').addClass('changed red');
	$('.fibraP, .fibraPT, .acri, .acriT, .lapP, .lapPT, .cosm, .cosmT, .fibra, .fibraT, .lap, .lapT, .popB, .popT, .per, .perT, .imp, .improT, .igle, .igleT, .folkC, .folkCT, .tEns, tCoro, .tReu, .tOcio, .tCumple, .tMisa, .tSke').addClass('changed violet');
});
//12
$('.year.y12').click(function(){
	master.activate($(this));
	$('.tizaP, .tizaPT, .fibraP, .fibraPT, .lapP, .lapPT, .folk, .folkT, .patria, .patriaT, .popC, .popCT, .didacC, .didacCT, .igle, .igleT, .tActo, .tFies, .tPen,  .tInsta, .tRet, .tAdor, tCoro, .tMision, .tMisa').addClass('changed blue');
	$('.illu, .illuT, .carbo, .carboT, .orien, .orienT, .corp, .corpT, .per, .perT, .imp, .improT, .pan, .panT, .tDise, .tSke, .tShow, .tCurso, .tMaqui, .tExc, .tAper, .tCamp').addClass('changed red');
	$('.acri, .acriT, .cosm, .cosmT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .didac, .didacT, .popB, .popT, .folkC, .folkCT, .tEns, .tReu, .tPrev, .tOcio, .tReci, .tCumple, .tFog, .tVia').addClass('changed violet');
});
//13
$('.year.y13').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .lapP, .lapPT, .acua, .acuT, .fibra, .fibraT, .carbo, .carboP, .carboPT, .carboT, .lap, .lapT, .folk, .folkT, .didacC, .didacCT, .popC, .popCT, .igle, .igleT, .tPen, .tInsta, .tAdor, tCoro, .tMision, .tMisa').addClass('changed blue');
	$('.cosm, .cosmT, .illu, .illuT, .orien, .orienT, .popB, .popT, .corp, .corpT, .per, .perT, .imp, .improT, .pan, .panT, .tVia, .tSke, .tReci, .tMaqui, .tExc, .tShow, .tFog, .tCurso, .tAper, .tCamp').addClass('changed red');
	$('.acri, .acriT, .didac, .didacT, .folkC, .folkCT, .tEns, .tReu, .tPrev, .tOcio, .tDise, .tCumple').addClass('changed violet');
});
//14
$('.year.y14').click(function(){
	master.activate($(this));
	$('.fibraP, .fibraPT, .lapP, .lapPT, .biro, .biroT, .fibra, .fibraT, .lap, .lapT, .didacC, .didacCT, .igle, .igleT, .tInsta, .tAdor, tCoro, .tEns, .tRet, .tMision, .tMisa, .popC, .popCT').addClass('changed blue');
	$('.cosm, .cosmT, .illu, .illuT, .orien, .orienT, .popB, .popT, .per, .perT, .imp, .improT, .folkC, .folkCT, .tSke, .tShow, .tFog, .tCurso, .tAper, .tCamp').addClass('changed red');
	$('.acri, .acriT, .didac, .didacT, .tReci, .tReu, .tPrev,  .tOcio, .tDise, .tCumple').addClass('changed violet');
});
//15
$('.year.y15').click(function(){
	master.activate($(this));
	$('.lap, .lapT, .didacC, .didacCT, .igle, .igleT, .tAdor, .tCoro .tEns, .tRet, .tMision, .tMisa, .pazD1, .pazD2 ').addClass('changed blue');
	$('.acri, .acriT, .cosm, .cosmT, .imp, .improT, .folkC, .folkCT, .orien, .orienT, .per, .perT, .tSke, .tReci, .tFog, .tAper, .tCamp, .alC1, .alC2, .alC3').addClass('changed red');
	$('.illu, .illuT, .didac, .didacT, .tVia, .tReu, .tPrev, .tPen, .tCurso, .tOcio, .tInsta, .tDise, .tCumple').addClass('changed violet');
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
	$('.popB, .popT, .igle, .lap, .lapT, .fibra, .fibraT, .lapP, .lapPT, .alD1, .alD2, .igleT,  .tEns, .tFies, .tVia, .tRet, .tMision, .tMisa ').addClass('changed blue');
	$('.fac, .imp, .per, .gui, .guionT, .didac, .disney, .disneyT, .salsaC, .salsaCT, .cosm, .cosmT, .fibraP, .fibraPT, .didacC, .didacCT, .orien, orienT, .illu, .illuT, .alC1, .alC2, .alC3, .facialT, .improT, .perT, .didacT,  .tAper, .tCamp, .tCurso, .tFog, .tReci, .tZumb, .tSke, .pazC1, .pazC2, .pazC3').addClass('changed red');
	$('.popC, .folkC, .acri, .acriT, .popCT, .folkCT,  .tReu, .tPrev, .tPen, .tOcio, .acua, .acuT, .tInsta, .tDise, .tCumple').addClass('changed violet');
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
	var fog = {
		text: 'FOGÓN SCOUT',
		color: 'red',
		category: 'paz'
	}
	eventsHandler.generateEmEvents([instag, mision, fog]);
});

//17
$('.year.y17').click(function(){
	master.activate($(this));
	$('.gui, .guionT, .pan, .panT, .coreo, .corT, .fibra, .fibraT, .popB, .jazz, .jazzT, .popC, .igle, .alD1, .alD2, .alD3, .verD1, .verD2, .verD3, .popT, .popCT, .igleT,  .tCome, .tEns, .tMate, .tMisa, .tMision, .tPen, .tShow').addClass('changed blue');
	$('.per, .fac, .facialT, .imp, .improT, .didac, .orien, .biro, .biroT, .folkC, .cosm, .cosmT, .pazC1, .pazC2, .lap, .salsaC, .fibraP, .alC1, .alC2, .perT, .didacT, .orienT, .folkCT, .salsaCT, .lapT, .fibraPT, .tAper, .tCamp, .tFog, .tReci, .tSke, .tZumb').addClass('changed red');
	$(' .acri, .acriT, .tCumple, .tDise, .tInsta, .tOcio, .tPrev, .tReu, .acua, .acuT, .illu, .illuT, .tVia').addClass('changed violet');
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
	var mud = {
		text: 'MUDANZA A CABA',
		color:'red',
		category: 'paz'
	}
	eventsHandler.generateEmEvents([showComedia, viaje, music, mud]);
});