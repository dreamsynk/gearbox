jQuery(window).load(function() {
	
	// Loader content delay
  jQuery(".social-box").delay(3500).queue(function(){
		$(this).addClass('moveIn')
	});
  jQuery(".pt-triggers").delay(4000).queue(function(){
		$(this).addClass('fadeIn')
	});
	jQuery(".center-piece").delay(4500).queue(function(){
		$(this).addClass('fadeIn')
	});
	jQuery(".tour").delay(5000).queue(function(){
		$(this).addClass('fadeIn')
	});
	
});

jQuery(document).ready(function() {
	
	var trip4 = new Trip([
		{ sel : $("#menu"), content : "This is the main menu. Use it to navigate through the website", animation: 'e'},
		{ sel : $(".qr-code"), content : "This our QR code. Scan it to see our contact details", animation: 'n'}
	], {
		showNavigation : true,
		showCloseBox : true,
		delay : -1
	});

	$(".tour-start").on("click", function() {
		trip4.start();
	});
	
	
	jQuery(".menu-trigger").click(function() {     
  	$('.menu-in').toggle(300);
		$('.menu-in').toggleClass('fadeIn');
	});
	
	jQuery(".menu-trigger").click(function() {     
		$(this).toggleClass('trigger-active');
	});
	
  jQuery('.tooltip').tooltipster({
   	animation: 'fall',
   	delay: 200,
   	theme: 'tooltipster-default',
   	touchDevices: false,
   	trigger: 'hover',
		position: 'left',
		offsetY: 0,
		offsetX: 10
	});
	
	$('.img-zoom').hover(function() {
        $(this).addClass('transition');
		
    }, function() {
        $(this).removeClass('transition');
  });
		
});
