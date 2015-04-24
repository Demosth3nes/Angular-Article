$(document).on("click",".forum-signup-link",function(){
	_gaq.push(['_trackEvent', 'Forum Registration Step 1', 'New Link from Guide',,, false]);
});

 $(document).ready(function() { 
	 //Standard dropdowns - Close button included
	$('.dropdown, .dropButton').each(
		function (i, t) {

		    $(t).next('div.dropdownContent').hide();

			$(t).click(
				function(){
				    $(this).toggleClass('active');
				    $(this).next('div.dropdownContent').slideToggle();
				}
			);
	});

	var triggerArray = document.querySelectorAll('.trigger');	
	for (var i = 0; i < triggerArray.length; i++) {

	    $(triggerArray[i]).next('div.dropdownContent').hide();

	    $(triggerArray[i]).on('touchstart, click', function (e) {
        	e.preventDefault();
        	$(this).toggleClass('active');
        	//$(this).next('div.dropdownContent').toggleClass('active');
        	$(this).next('div.dropdownContent').slideToggle();
	    });

	}

     // if we have a show all button
	$('.dropModule-wrapper').each(function (i, t) {

	    var dropShowAll = $(t).find('.drop-show-all');

	    if (dropShowAll.length) {

	        var dropShowAllA = $(t).find('.drop-show-all a');
	        var triggers = $(t).find('.dropdown, .trigger, .dropButton');
	        var triggerLength = triggers.length;
	        var counter = 0;

	        triggers.click(function () {

	            if ($(this).hasClass('active')) {
	                counter++;
	            } else {
	                counter--;
	            }

	            // add to tally
	            if (counter == triggerLength) {
	                // hit tally, add class
	                dropShowAllA.addClass('expanded');
	            } else {
	                // not hit tally (bit poor)
	                dropShowAllA.removeClass('expanded');
	            }

	        });

	        dropShowAllA.click(function (e) {

	            e.preventDefault();

	            if ($(this).hasClass('expanded')) {
	                counter = 0;
	                $(this).removeClass('expanded');
	                $(t).find('.dropdown, .trigger, .dropButton').removeClass('active');
	                $(t).find('.dropdownContent').slideUp();
	            } else {
	                counter = triggerLength;
	                $(this).addClass('expanded');
	                $(t).find('.dropdown, .trigger, .dropButton').addClass('active');
	                $(t).find('.dropdownContent').slideDown();
	            }

	        });

	    }

	});

	$('.drop, .dropLink').each(function(){
		var indirectDD = $(this).parent().next('div.dropdownContent').filter(":first");
		var directDD = $(this).next('div.dropdownContent').filter(":first");
		
		if (indirectDD.length > 0) { indirectDD.hide(); }
		else { directDD.hide(); }
		//$(this).parent().next('div.dropdownContent').hide();
		$(this).click( function(){
			$(this).toggleClass('active');
			if (indirectDD.length > 0) { indirectDD.slideToggle(); }
			else { directDD.slideToggle(); }
			//$(this).parent().next('div.dropdownContent').slideToggle();
			return false;
		});
	}); 
	
// Linking from the tip
    var location = window.location.hash.substring(1);
	var anc = $('a[name="' + location + '"]');
	var requiredContent = anc.nextAll('div.dropdownContent').filter(":first");
	
	if (location) {
		requiredContent.slideDown();
        //if there is a dropdown above, means it is a DD in DD. make sure top level is open so this DD can be seen.
  		if (requiredContent.parent('div.dropdownContent').exists()) {
			requiredContent.parent('div.dropdownContent').slideDown();
			requiredContent.slideDown().toggleClass('active');
		}
		if (requiredContent.parent('div.bestDropdown').exists()) {
			requiredContent.slideDown().toggleClass('active');
		}
		/*if (anc.exists()) { 
		  scrollToElement(anc, 500);	
		}*/
	}
	       
  	//  Dropdowns opening from the anchors above    

		$('.list li a').click(function(){ 
				
		var linkid = $(this).attr('href').substring(1); 
		var content = $('a[name="'+linkid+'"]').nextAll('div.dropdownContent').filter(":first");
		content.slideDown().toggleClass('active');
			
		//if there is a dropdown above, means it is a DD in DD. make sure top level is open so this DD can be seen.
		if (content.parent('div.dropdownContent').exists()) { 
    		content.parent('div.dropdownContent').slideToggle();	
		}
		anc = $('a[name="'+linkid+'"]');
		/*if (anc.exists()){
		  scrollToElement(anc, 500);	
		}*/
	}); 
	
	// Dropdown close button 
	$('.close').click(function(){
    	$(this).parent().parent('div.dropdownContent').slideToggle();
        $(this).parent().parent().prev('h3.dropdown').toggleClass('active');
        return false;  
    });
	
	if (anc.exists()) { 
	scrollToElement(anc, 700);	
	}
	setTimeout(scroll, 2200);
}); //end of document.ready
 
 jQuery.fn.exists = function(){return this.length>0;}
 
	//scroll to code 
	function scrollToElement(selector, time, verticalOffset) {
    	time = typeof(time) != 'undefined' ? time : 0;
    	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    	element = $(selector);
    	offset = element.offset();
    	offsetTop = offset.top + verticalOffset;
    	$('html, body').scrollTop(offsetTop);
	}

// return window location back to the anchor - resolving FF scrolling issue  
  	function scroll(){
		var hash = window.location.hash;
		if(hash!==""){
			window.location.hash = "";
			window.location.hash = hash;
		}	 
	}
	
		// jump to the tool and change url 
	function jumpToAnchor() {
		window.location = String(window.location).replace(/\#.*$/, "") + "#tool";
	}