jQuery(function(){
	// Animate clouds with Spritely
	jQuery('#cloud').pan({fps: 30, speed: 0.7, dir: 'left'});

	// Rotate sun
	var angle = 0;
	setInterval(function(){
		angle+=3;
		jQuery(".sun img").rotate(angle);
	},50);

	// Scroll down
	jQuery(".arrow").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery("form").offset().top
	    }, 500);
	});
	
	// Bounce arrow
	function bounce(){
	    jQuery('.barrow').effect( "bounce", { times: 1,distance: 10 }, "slow", bounce);
	}
	bounce();

	// Check checkboxes
	jQuery('.checkbox').change(function(){
	    if (jQuery('.pcheck:checked').length == jQuery('.pcheck').length) {
	       	jQuery('.but').prop("disabled",false);
	       	jQuery('.but').html("<b>I’m finished!</b><br>Collect reward");	       	
	    } else {
    		jQuery('.but').prop("disabled",true);
	    	jQuery('.but').html("<b>Be kind!</b><br>Your reward awaits");
	    }
	});

	// Show RAK's
	jQuery('button.but').click(function(e){
		e.preventDefault();
		
		var nr = Math.floor((Math.random() * 8) + 1);
		console.log(nr);

		// jQuery('#check').hide();
		jQuery('#check').fadeOut("fast");
		jQuery('.arrowcontainer').hide();
		jQuery('#loader').fadeIn("slow").delay(2000).queue(function(n){
			jQuery(this).hide(); 
			jQuery('#surprise').show();
			jQuery('.sp'+nr).show();	

			jQuery('html,body').animate({
				scrollTop: jQuery("#surprise").position().top
			},500);

			n();
		});		
	});
});

jQuery(window).load(function(){
	// Get number of shares/likes/tweets/plusses
	jQuery.sharedCount(location.href, function(data){
		console.log(data);
		jQuery('.button.fb .counter').text(data.Facebook.total_count);
		jQuery('.button.gp .counter').text(data.GooglePlusOne);
		jQuery('.button.tw .counter').text(data.Twitter);
	});	
});

// SharedCount.com
jQuery.sharedCount = function(url, fn) {
	// url = encodeURIComponent(url || location.href);
	url = 'http://www.gamehouse.com/blog/random-acts-of-kindness/';
	var domain = "//free.sharedcount.com"; /* SET DOMAIN */
	var apikey = "3a4b06a73004d4d0451996b1d7d81e954474bd89" /*API KEY HERE*/
	var arg = { 
		data: {
			url: url,
			apikey: apikey
		},
		url: domain + "/url",
		cache: true,
		dataType: "json"
	};
	if ('withCredentials' in new XMLHttpRequest) {
		arg.success = fn;
	} else {
		var cb = "sc_" + url.replace(/\W/g, '');
		window[cb] = fn;
		arg.jsonpCallback = cb;
		arg.dataType += "p";
	}

	return jQuery.ajax(arg);
};