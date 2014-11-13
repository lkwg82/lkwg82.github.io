$(function() {

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

	// TODO
	//~ var supportsOrientationChange = "onorientationchange" in window;
	//~ if ( supportsOrientationChange ){
		//~ window.addEventListener("orientationchange", function() {resizeVideo();}, false);
	//~ }
});
