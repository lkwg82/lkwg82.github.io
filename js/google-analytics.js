var host = window.location.hostname;
var isLocalhost = (host === 'localhost' || host === '127.0.0.1');

if (isLocalhost) {
	window.onerror = function(errorMsg, url, lineNumber, column, errorObj) {
		if (lineNumber === 0) {
			console.log("script from other domain throw an error");
			// see http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox
		} else {
			alert('Error:\n ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber +
				' Column: ' + column + ' StackTrace: ' + errorObj);
		}
	};
}
//else 
{

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || [])
			.push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-39213747-1', {
		'siteSpeedSampleRate': 100
	});
	ga('set', 'forceSSL', true);
	ga('set', 'setDomainName', 'www.lgohlke.de');
	ga('set', 'anonymizeIp', true);
	ga('send', 'pageview');

	window.onerror = function(message, file, line) {
		ga('send', 'event', {
			'eventCategory': 'JS Error',
			'eventValue': file + ':' + line + '\n\n' + message
		});
	};

	$(function() {
		function _track(data) {
			ga('send', 'event', data);
		}

		function track(category, action, opt_label, opt_value) {
			console.debug("track " + category + ", " + action + ", " + opt_label + ", " + opt_value);
			if (typeof opt_label === "undefined") {
				_track({
					'eventCategory': category,
					'eventAction': action
				});
			} else if (typeof opt_value === "undefined") {
				_track({
					'eventCategory': category,
					'eventAction': action,
					'eventLabel': opt_label
				});
			} else {
				_track({
					'eventCategory': category,
					'eventAction': action,
					'eventLabel': opt_label,
					'event': opt_value
				});
			}
		}

		function onClick(object, category, action, opt_label, opt_value) {
			$(object).click(function() {
				track(category, action, opt_label, opt_value);
			});
		}

		$("a").each(function() {
			var linkObject = this;
			var link = $(linkObject).attr('href');

			if (link.match(/^#.*/)) {
				onClick(this, 'onpage-links', 'navigate', $(linkObject).text() + ' (' + link + ')');
			} else if (link.match(/^https?:\/\/.*/)) {
				onClick(this, 'offpage-links', 'navigate', $(linkObject).text() + ' (' + link + ')');
			} else if (link.match(/.*pdf$/i)) {
				onClick(this, 'downloads', 'download', $(linkObject).text() + ' (' + link + ')');
			}

			if (link.match(/^mailto\:/i)) {
				onClick(this, 'onpage-links', 'contact', 'mail');
			} else if (link.match(/^https:\/\/plus.google.com.*/)) {
				onClick(this, 'onpage-links', 'contact', 'G+');
			}
		});

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();

			var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
			var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

			var visibleY = rect.bottom > 0 && rect.top <= windowHeight;
			var visibleX = rect.right > 0 && rect.left <= windowWidth;

			return visibleY && visibleX;
		}

		var areasSeen = [];

		$(window).scroll(function() {
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {

				var areasNowSeen = [];

				$(".trackView")
					.each(function() {
						var trackView = this;
						var id = $(trackView)
							.attr('id');

                        if (id) {
                            if (isElementInViewport(trackView)) {
                                //~ console.log(" visible " + id);
                                areasNowSeen.push(id);
                            }
                        } else {
                            // var rect = trackView.getBoundingClientRect();
                            // console.log("missing id at " + rect.top + "x" + rect.left +									" see " + $(trackView)									.text());
                        }
					});

				var newlySeen = [];

				for (var i = 0; i < areasNowSeen.length; i++) {
					var seen = false;
					for (var x = 0; x < areasSeen.length; x++) {
						if (!seen && areasSeen[x] == areasNowSeen[i]) {
							seen = true;
						}
					}

					if (!seen) {
						newlySeen.push(areasNowSeen[i]);
					}
				}

				for (var i = 0; i < newlySeen.length; i++) {
					track("view", "item", newlySeen[i]);
				}

				areasSeen = areasNowSeen;
			}, 250));
		});
	})
}
