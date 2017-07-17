
/*
list through random
*/
(function($){
 $.fn.randomize = function(options) {
  var defaults = {
   oddBG: '#000',
   oddFG: '#fff',
   evenBG: '#fff',
   evenFG: '#000',
   startButtonClass: 'startBtn',
   startButtonTxt: 'CLICK HERE TO FIND A FANDOM!',
   direction: 'bottomToTop',
   containerID: 'container',
   styleSheet: 'style.css',
  };
  var options = $.extend(defaults, options);
  
  if (this.length > 1){
        this.each(function() { $(this).myPlugin(options) });
        return this;
    }
	obj = $(this);
	
	// create objects
	
	obj.wrap('<div id="'+ options.containerID +'">');
	$('#' + options.containerID).after('<button class="' + options.startButtonClass + '" >' + options.startButtonTxt + '</button>');
	
	//Set CSS styles for objects and elements in random
	obj.find('span').filter(':odd').css({ 'backgroundColor':options.oddBG,'color':options.oddFG });
	obj.find('span').filter(':even').css({ 'backgroundColor':options.evenBG,'color':options.evenFG });
	
	//include stylesheet from html doc
	$('head').append('<link rel="stylesheet" href="' + options.styleSheet + '" type="text/css" />');
	
   // randomize
	setVars = function() {
    //speed
	speed = Math.floor(Math.random() * (100 - 50 + 1) + 80);
    //time for random to run
	timeout = Math.floor(Math.random() * (7000 - 2000 + 1) + 3000);
	}
	
  // button action
	$('.' + options.startButtonClass).click(function() {
	setVars();
	startFunct();
	});
   //loop though list
	loopFunct = function() {
	if (options.direction == 'bottomToTop') {
	obj.find('span:first-child').appendTo($(obj));
	}
	else if (options.direction == 'topToBottom') {
	obj.find('span:last-child').prependTo($(obj));
	}
	}
  //set interval 
	startFunct = function() {
	looping = setInterval("loopFunct()",speed);
	setTimeout("stopFunct()",timeout);
	$('.'+options.startButtonClass).hide();
	}
	stopFunct = function() {
	clearInterval(looping);
	resultFunct();
	$('.'+options.startButtonClass).show();
	}
	resultFunct = function() {
	if (obj.find('span:nth-child(3) a').length > 0) {
	window.location = obj.find('span:nth-child(3) a').attr('href');
	}
	else 
  {
	alert('No Link...');
	}
	}
 };
})(jQuery);