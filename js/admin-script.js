///// NOTIFICATION CLOSE BUTTON /////
jQuery(document).ready(function(){	
	jQuery('.notibar .close').click(function(){
		jQuery(this).parent().fadeOut(function(){
			jQuery(this).remove();
		});
	});
});

jQuery(document).ready(function(){ 
jQuery("[href$='-process']").hide();
});