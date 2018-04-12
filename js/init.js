//init.js: progress bar initial animation and main svg load

var progressValue = 100;
var linePrgrs = $('#front');
var credits = $('#creditos');
var circle = $('.progress-content>circle');
var cx = circle.attr('cx');

var master = {
	activeElement: null,
	that: this,

	reset: function(){
		$('.componentPath').each(function(){
			$(this).addClass('whiteFill');
		});

		$('.componentText').each( function(){
			$(this).addClass('gray');
		});
	},
	activate: function(newActive){
		this.reset();
		activeElement = newActive;
		if(newActive.hasClass('componentPath')){
			alert('activado: '+ activeElement);
		}
	}
}

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

	tl.to('#header', 3, { scaleX:0.55, scaleY:0.53, x: -500, y: +360 })
	  .to('.willGo', 4, { opacity: 0 }, '-=3')
	  .to('#aR', 0.1, {rotate:360})
	  .to('#main'  , 6, { opacity: 1 }, '-=1');
}


TweenMax.to(circle, 1.7, { x:630 , ease:Linear.easeNone ,repeat:0 });


$(document).ready( load );


