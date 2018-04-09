//init.js: progress bar initial animation and main svg load

var progressValue = 100;
var linePrgrs = $('#front');
var credits = $('#creditos');
var circle = $('.progress-content>circle');
var cx = circle.attr('cx');

var load = setInterval(updateProgressValue, 33);


var updateProgressLine = function(value){  
	linePrgrs.find('.progress-content>line').attr("stroke-dashoffset", value+"%");
}

//Update the content fill value
function updateProgressValue() {

    if (progressValue == 50) {
    	clearInterval(load);
    	moveHeader();
    }
    progressValue--;
    updateProgressLine(progressValue);
}

//animates the header and makes main svg appear in front
function moveHeader(){
	var tl = new TimelineMax({
		repeat:0
	});

	tl.to('#header', 3, { scaleX:0.55, scaleY:0.53, x: -500, y: +230 })
	  .to('.willGo', 2, { opacity: 0 })
	  .to('#main'  , 3, { opacity: 1 });
}


TweenMax.to(circle, 1.7, { x:620 , ease:Linear.easeNone ,repeat:0 });


$(document).ready( load );


