$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 300) {
    	$('.header-container').addClass('shrink');
    } else {
    $('.header-container').removeClass('shrink');
    }

  });
});
