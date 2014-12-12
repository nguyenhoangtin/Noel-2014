$(document).ready(function () {
	//christmass balls
	$('.ball a').click(function () {
		$(this).toggleClass('open');
	});
	
	//contact
	$('.trigger').click(function(){
		$('.contact,.snow').show(400);
	});
	$('#close').click(function(){
		$('.contact,.snow').hide(400);
	});
});

jQuery(document).ready(function(){
	
	$('#contactform').submit(function(){
	
		var action = $(this).attr('action');
		
		$("#message").show(400,function() {
		$('#message').hide();
		
 		$('#submit')
			.after('<img src="images/contact-ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');
		
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			//subject: $('#subject').val(),
			comments: $('#comments').val()
			//verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled'); 
				//if(data.match('success') != null) $('#contactform').slideUp(3000);
				
			}
		);
		
		});
		
		return false; 
	
	});
	
});
