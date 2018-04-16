//years.js: scripts to handle year events

function activeColor(yearGroup){
    var yearPath = yearGroup.children("path");
	var yearText = yearGroup.children("text");

	yearPath.switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
	yearText.switchClass('violet', 'whiteFill', 1000);
}

function resetColor(elem){
	var yearGroup = elem;
	var yearPath = yearGroup.children("path");
	var yearText = yearGroup.children("text");

	yearPath.switchClass('violet', 'whiteFill', 1000, 'easeInOutQuad');
	yearText.switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
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
	$('.gui, .pan, .coreo, .popB, .jazz, .popC, .igle, .illu, .acua, .alD1, .alD2, .alD3, .verD1, .verD2, .verD3, .guionT, .panT, .corT, .popT, .jazzT, .popCT, .igleT, .illuT, .acuT').addClass('changed blue');
	$('.per, .didac, .orien, .salsa, .folk, .disney, .didacC, .folkC, .lap, .fibraP, .alC1, .alC2, .perT, .folkT, .didacT, .salsaT, .orienT, .didacCT, .disneyT, .folkCT, .lapT, .fibraPT').addClass('changed red');
	$('.fibra, .acri, .acriT, .fibraT').addClass('changed violet');

});