var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-39213747-1']);
_gaq.push(['_setDomainName', 'lgohlke.de']);
_gaq.push(['_setSiteSpeedSampleRate', 100]);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function() {
	function track(category, action, opt_label, opt_value, opt_noninteraction){
		console.debug("track " + category + ", " + action + ", " + opt_label + ", " + opt_value);
		if (typeof opt_label === "undefined")
		{
			_gaq.push(['_trackEvent', category, action]);
		}
		else if (typeof opt_value === "undefined")
		{
			_gaq.push(['_trackEvent', category, action, opt_label]);
		}
		else if (typeof opt_noninteraction === "undefined")
		{
			_gaq.push(['_trackEvent', category, action, opt_label, opt_value]);
		}
		else{
			_gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
		}
	}

	function onClick(object, category, action, opt_label, opt_value, opt_noninteraction){
		$( object ).click(function(){ track(category,action,opt_label,opt_value,opt_noninteraction); });
	}

	$("a" ).each(function(){
		var linkObject= this;
		var link = $(linkObject).attr('href');

		if ( link.match(/^#.*/) ){
			onClick(this,'onpage-links','navigate',$(linkObject).text() + ' ('+link+')');
		}else if( link.match(/^https?:\/\/.*/)){
			onClick(this,'offpage-links','navigate',$(linkObject).text() + ' ('+link+')');
		}else if ( link.match(/.*pdf$/i) ){
			onClick(this,'downloads','download',$(linkObject).text() + ' ('+link+')');
		}

		if ( link.match(/^mailto:/i) ){
			onClick(this,'onpage-links','contact','mail');
		}else if ( link.match(/^https:\/\/plus.google.com.*/) ){
			onClick(this,'onpage-links','contact','G+');
		}
	});

	$(document).mouseup( function(){
		var selectedText = window.getSelection();

		//~ console.debug(selectedText);

		var nodeText=selectedText.focusNode.data;
		var maxLength = Math.min(10,nodeText.length);
		var snippet = nodeText.substr(0, maxLength);

		if ( selectedText.type == "Range" ){
			track("view",'selected text',snippet + " [" + selectedText + "]");
		}else if(selectedText.type == "Caret"){
			track("view",'click',snippet);
		}
	});

	function isElementInViewport (el) {
		var rect = el.getBoundingClientRect();

		var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
		var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

		var visibleY = rect.bottom > 0 &&  rect.top <= windowHeight;
		var visibleX = rect.right > 0 &&  rect.left <= windowWidth;

		return visibleY && visibleX;
	}

	//~ var started;
	//~ $.data(this, 'focusTimer', setTimeout(function() {
		//~ var timerName = 'watchTimer';
		//~ var window_focus;

		//~ $(window).focus(function() {
			//~ window_focus = true;
		//~ }).blur(function() {
			//~ window_focus = false;
		//~ });

		//~ if ( window_focus && !started){
			//~ $.data(this, timerName, setTimeout(function() {
				//~ $(".trackView").each(function(){
					//~ var trackView = this;
					//~ var id = $(trackView).attr('id');

					//~ if ( isElementInViewport(trackView)){
						//~ track("view","watch",id);
					//~ }
				//~ });
				//~ started = true;
			//~ }))
		//~ }
		//~ else{
			//~ if (!window_focus){
				//~ clearTimeout($.data(this, timerName));
			//~ }
		//~ }
	//~ },500));



	var areasSeen = new Array();

	$(window).scroll(function() {
		    clearTimeout($.data(this, 'scrollTimer'));
		    $.data(this, 'scrollTimer', setTimeout(function() {

			var areasNowSeen = new Array();

			$(".trackView").each(function(){
				var trackView = this;
				var id = $(trackView).attr('id');

				if ( !id){
					var rect = trackView.getBoundingClientRect();
					console.log("missing id at " + rect.top + "x"+rect.left + " see " + $(trackView).text());
				}
				else{
					if ( isElementInViewport(trackView)){
						//~ console.log(" visible " + id);
						areasNowSeen.push(id);
					}
				}
			});

			var newlySeen = new Array();

			for(var i = 0; i < areasNowSeen.length;i++){
				var seen = false;
				for(var x = 0; x < areasSeen.length;x++){
					if (!seen && areasSeen[x] == areasNowSeen[i]){
						seen = true;
					}
				}

				if (!seen){
					newlySeen.push(areasNowSeen[i]);
				}
			}

			for(var i = 0; i < newlySeen.length;i++){
				track("view","item",newlySeen[i]);
			}

			areasSeen = areasNowSeen;
		    }, 250));
	});


})