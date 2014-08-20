jQuery(window).load(function() {
	
	// Loader content delay
  jQuery(".social-box").delay(3500).queue(function(){
		$(this).addClass('moveIn')
	});
  jQuery(".pt-triggers").delay(4000).queue(function(){
		$(this).addClass('fadeIn')
	});
	
	// Tooltips
setTimeout(function(){
	
	jQuery('#tooltips').tourbus({
	autoDepart: true,
  onLegStart: function( leg, bus ) {
    if( leg.rawData.highlight ) {
      leg.$target.addClass('my-tour-highlight');
      $('.my-tour-overlay').show();
    }
  },
  onLegEnd: function( leg, bus ) {
    if( leg.rawData.highlight ) {
      leg.$target.removeClass('my-tour-highlight');
      $('.my-tour-overlay').hide();
    }
  }
	});
	}, 5000);
	
});

