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

	$('.gui1').addClass('changed red');
	$('.gui2').addClass('changed red');

	$('.per1').addClass('changed blue');

	$('.fac1').addClass('changed violet');	
	$('.fac2').addClass('changed violet');

	$('.imp1').addClass('changed red');
	$('.imp2').addClass('changed red');
});

//94
$('.year.y94').click(function(){
	master.activate($(this));
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
