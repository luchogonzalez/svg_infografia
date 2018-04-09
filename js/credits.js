//credits.js: handle credits events and info

credits.hover(function(){
	credits.switchClass('noFill', 'violet');
	credits.next().switchClass('violet', 'whiteFill');
}, function(){
	credits.switchClass('violet', 'noFill');
	credits.next().switchClass('whiteFill', 'violet' );

});

credits.click(function(){
	createDialog();
});

function createDialog() {
	//var svgIconString = "<svg><path class='red' d='M39.4 682.4c1-5.1 5.8 0 6.8 4.1 0 0-1-8.5 2.2-8.5 4.6 0 2.9 8.8 2.9 8.8s3-8.5 6.3-4.9c2.4 2.7-5.3 11.9-9.2 12S38.6 686.3 39.4 682.4z'></path></svg>"
	//var svgIconString2 = "<svg><path class='blue' d='M39.4 682.4c1-5.1 5.8 0 6.8 4.1 0 0-1-8.5 2.2-8.5 4.6 0 2.9 8.8 2.9 8.8s3-8.5 6.3-4.9c2.4 2.7-5.3 11.9-9.2 12S38.6 686.3 39.4 682.4z'></path></svg>"
	var dialogString = "<div id='dialog' title='Créditos'><img src='assets/credits.svg' /></div>";
	$('#main').after(dialogString);

	$('#dialog').dialog({
		show: {effect: 'fade', duration: 300},
		hide: {effect: 'fade', duration: 250},
		dialogClass: 'dialog'
	});
}