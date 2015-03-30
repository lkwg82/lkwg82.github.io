$(function() {
	if (typeof ga == 'function') {
		// check if visitor's browser supports Resource Timing
		if (typeof window.performance == 'object') {
			if (typeof window.performance.getEntriesByName == 'function') {

				function track(category, name, value) {
					var data = {
						'timingCategory': category,
						'timingVar': name,
						'timingValue': value
					};
					console.log(data);
					ga('send', 'timing', data)
				}

				function logData(category, name, r) {
					var dns = Math.round(r.domainLookupEnd - r.domainLookupStart),
						tcp = Math.round(r.connectEnd - r.connectStart),
						total = Math.round(r.responseEnd - r.startTime);

					track(category, 'dns', dns);
					track(category, 'tcp', tcp);
					track(category, 'total', total);
				}

				var t = performance.timing;
				track('latency', 'page', Math.round(t.responseEnd - t.fetchStart));

				var resources = window.performance.getEntriesByType("resource"),
					count = 0,
					latencyTotal = 0;
				for (var i in resources) {
					var r = resources[i];
					count++;
					latencyTotal += Math.round(r.responseEnd - r.fetchStart);
				}

				track('latency', 'average', Math.round(latencyTotal / count));
				track('resources', 'count', count);
			}
		}
	}
});
