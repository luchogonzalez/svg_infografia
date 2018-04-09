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
	var dialogString = "<div id='dialog' title='Créditos'><img src='assets/credits.svg' /></div>";
	$('#main').after(dialogString);

	$('#dialog').dialog({
		show: {effect: 'fade', duration: 300},
		hide: {effect: 'fade', duration: 250},
		dialogClass: 'dialog'
	});
}