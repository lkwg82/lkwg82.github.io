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

	function resizeVideo(){
		var video = document.getElementById("my_video_1");
		video.width = Math.min(window.innerWidth - video.getBoundingClientRect().left*2, 640);
		video.height = video.width / 1.35;
	}

	resizeVideo();

	$( window ).resize(function() {
		resizeVideo();
	});

	var supportsOrientationChange = "onorientationchange" in window;
	if ( supportsOrientationChange ){
		window.addEventListener("orientationchange", function() {resizeVideo();}, false);
	}
});
