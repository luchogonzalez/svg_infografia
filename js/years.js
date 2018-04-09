//years.js: scripts to handle year events

$('.year').hover(function(){
	var year = $(this);

	//year.addClass('violet');
	year.switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
	year.next().switchClass('violet', 'whiteFill', 1000);
}, function(){
	var year = $(this);

	//year.removeClass('violet', 1000);
	year.switchClass('violet', 'whiteFill', 1000, 'easeInOutQuad');
	year.next().switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
});