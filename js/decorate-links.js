$(function() {
	$("#header a").each(function() {
		var linkObject = this;
		var link = $(linkObject).attr('href');

		if (link.match(/^#.*/)) {
			$(linkObject).attr("href", '#');

			$(this).click(function() {
				$(link).animatescroll({
					scrollSpeed: 2000,
					easing: 'easeOutCirc'
				});
			});
		}
	});
});
