$(function() {
window.setTimeout( function(){
	$('img').each(function(){
		if ( $(this).attr('data-delayed-src') ){
			$(this).attr('src', $(this).attr('data-delayed-src'));
		}
	});
},0);

  $( "#header a" ).each(function(){
	var linkObject= this;
	var link = $(linkObject).attr('href');

	if ( link.match(/^#.*/) ){
		$(linkObject).attr("href",'#');

		$( this ).click(function(){
			$(link).animatescroll({scrollSpeed:2000,easing:'easeOutCirc'});
		});
	}
  });
});
