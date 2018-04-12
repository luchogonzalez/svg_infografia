//years.js: scripts to handle year events

$('.year').hover(function(){
	var yearGroup = $(this);
	var yearPath = yearGroup.children("path");
	var yearText = yearGroup.children("text");

	yearPath.switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
	yearText.switchClass('violet', 'whiteFill', 1000);
}, function(){
	var yearGroup = $(this);
	var yearPath = yearGroup.children("path");
	var yearText = yearGroup.children("text");

	yearPath.switchClass('violet', 'whiteFill', 1000, 'easeInOutQuad');
	yearText.switchClass('whiteFill', 'violet', 1000, 'easeInOutQuad');
});