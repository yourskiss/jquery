(function($) {

    window.app = {

        init: function() {
            this.is_ipad = navigator.userAgent.indexOf('iPad') > -1;
            this.is_iphone = navigator.userAgent.indexOf('iPhone') > -1;
            return true;
        },

        spritely: {

            init: function() {

                // spritely methods...
               $('#dirigible')
					.sprite({fps: 9, no_of_frames: 9})
					.spRandom({
						  top: 220,
						  left: 20,
						  right: 200,
						  bottom: 300,
						  speed: 8000,
						  pause: 3000
		  })
					.isDraggable()
					.activeOnClick()
					.active();
				$('#clouds').pan({fps: 30, speed: 0.7, dir: 'left', depth: 10});

				$('#floating-clouds').pan({fps: 30, speed: 2.7, dir: 'left', depth: 40});
				$('#hill2').pan({fps: 30, speed: 2.5, dir: 'left', depth: 30});
				$('#hill1').pan({fps: 30, speed: 3, dir: 'left', depth: 70});
                $('#balloons').pan({fps: 30, speed: 3, dir: 'up', depth: 70});
				$('#hill1, #hill2, #clouds, #floating-clouds').spRelSpeed(3);
				
				$('.start-stop').click(function() {
					
					if ($(this).text() == "Stop"){
					$(this).text('Start');
					}
					else {$(this).text('Stop');}
					
				$('#hill1, #hill2, #clouds, #floating-clouds, #dirigible').spToggle();
				});

                //$('html').flyToTap();
				
                if (!window.app.is_ipad && (window.Touch || document.location.hash.indexOf('iphone') > -1)) {
                    // iPhone/iPad
                    $('body').addClass('platform-iphone');
                    // bird constraint is slightly smaller
                    $('#bird').spRandom({top: -10, left: -10, right: 150, bottom: 100, speed: 3500, pause: 5000});
                    $('#bird2').spRandom({top: 70, left: 100, right: 200, bottom: 340, speed: 4000, pause: 3000});
                    if (document.location.hash.indexOf('iphone') > -1) {
                        $('body').addClass('platform-iphone');
                    }
                } else {
                    // non-iPhone
                    // bird constraint is slightly wider
                    var stage_left = (($('body').width() - 866) / 2);
                    var stage_top = 30;
                    $('#bird').spRandom({top: stage_top - 20, left: stage_left - 20, right: 400, bottom: 140, speed: 3500, pause: 5000});
                    $('#bird2').spRandom({top: stage_top + 70, left: stage_left + 100, right: 200, bottom: 340, speed: 4000, pause: 3000});
                }
                if (window.app.is_ipad) {
                    $('#dragMe, .ui-slider-handle').hide();
                    $('#noFlash').css({
                        'top': '185px',
                        'right': '20px'
                    });
                    $('#sprite_up').css({
                        'top': '300px',
                        'left': '30px'
                    });
                    $('#container, .stage').css({
                       'min-width': '768px'
                    });
                } else {
                    if (window.app.is_iphone|| document.location.hash.indexOf('iphone') > -1) {
                        $('#container, .stage').css({
                           'min-width': '300px'
                        });
                    }
                    else {
                        //$('#container, .stage').css({
//                           'min-width': '900px'
//                        });
                    }
                    
					if ($('#slider').length > 0){
					$('#slider')
                        .show()
                        .slider({
                            value: 8,
                            min: -60,
                            max: 60,
                            slide: function() {
                                window.app.spritely.sliderChange($(this).slider('value'));
                            },
                            change: function() {
                                window.app.spritely.sliderChange($(this).slider('value'));
                            }
                        });
					}
						
                }
            },

            sliderChange: function(val) {
                  if ($('#dragMe').css('display') == 'block') {
                      if (!$.browser.msie) {
                          $('#dragMe').fadeOut('slow');
                      } else {
                          $('#dragMe').hide();
                      }
                  }
                  var sliderSpeed = val;
                if (sliderSpeed < 0) {
                    var sliderSpeed = String(sliderSpeed).split('-')[1];
                    $('#dirigible, #bird, #bird2').spState(2);
                    $('#dirigible, #hill1, #hill2, #clouds, #floating-clouds').spChangeDir('right');
                } else {
                    $('#dirigible, #bird, #bird2').spState(1);
                    $('#hill1, #hill2, #clouds, #floating-clouds').spChangeDir('left');
                }
                $('#hill1, #hill2, #clouds, #floating-clouds').spRelSpeed(sliderSpeed);

                var birdSpeed = sliderSpeed;
                if (sliderSpeed < 12) {
                    var birdSpeed = 12;
                } else if (sliderSpeed > 24) {
                    var birdSpeed = sliderSpeed / 2;
                }
                $('#dirigible').fps(birdSpeed - 3);

            }

        }

    };


    $(document).ready(function() {

	enquire.register("screen and (min-width:600px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
		 window.app.init();
         window.app.spritely.init();
		
		},      
                                
    // OPTIONAL
    // If supplied, triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
		
		},    
    
    // OPTIONAL
    // If supplied, triggered once, when the handler is registered.
    setup : function() {
		
		},    
                                
    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true,
                                
    // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {}
      
});

       

		
    });


})(jQuery);


