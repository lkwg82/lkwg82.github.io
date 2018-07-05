!function(a){a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(1-Math.pow(2,-10*b/e))+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(2-Math.pow(2,-10*--b))+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*-.5+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*((1+(f*=1.525))*b-f))+c:d/2*((b-=2)*b*((1+(f*=1.525))*b+f)+2)+c},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?.5*a.easing.easeInBounce(b,2*c,0,e,f)+d:.5*a.easing.easeOutBounce(b,2*c-f,0,e,f)+.5*e+d}}),a.fn.animatescroll=function(b){var c=a.extend({},a.fn.animatescroll.defaults,b);if("function"==typeof c.onScrollStart&&c.onScrollStart.call(this),"html,body"==c.element){var d=this.offset().top;a(c.element).stop().animate({scrollTop:d-c.padding},c.scrollSpeed,c.easing)}else a(c.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-c.padding},c.scrollSpeed,c.easing);setTimeout(function(){"function"==typeof c.onScrollEnd&&c.onScrollEnd.call(this)},c.scrollSpeed)},a.fn.animatescroll.defaults={easing:"swing",scrollSpeed:800,padding:0,element:"html,body"}}(jQuery),$(function(){$("#header").find("a").each(function(){var a=this,b=$(a).attr("href");b.match(/^#.*/)&&($(a).attr("href","#"),$(this).click(function(){$(b).animatescroll({scrollSpeed:2e3,easing:"easeOutCirc"})}))})});var host=window.location.hostname,isLocalhost="localhost"===host||"127.0.0.1"===host;isLocalhost&&(window.onerror=function(a,b,c,d,e){0===c?console.log("script from other domain throw an error"):alert("Error:\n "+a+" Script: "+b+" Line: "+c+" Column: "+d+" StackTrace: "+e)}),!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src="//www.google-analytics.com/analytics.js",g.parentNode.insertBefore(f,g)}(window,document,"script",0,"ga"),ga("create","UA-39213747-1",{siteSpeedSampleRate:100}),ga("set","forceSSL",!0),ga("set","setDomainName","www.lgohlke.de"),ga("set","anonymizeIp",!0),ga("send","pageview"),window.onerror=function(a,b,c){ga("send","event",{eventCategory:"JS Error",eventValue:b+":"+c+"\n\n"+a})},$(function(){function a(a){ga("send","event",a)}function b(b,c,d,e){console.debug("track "+b+", "+c+", "+d+", "+e),a(void 0===d?{eventCategory:b,eventAction:c}:void 0===e?{eventCategory:b,eventAction:c,eventLabel:d}:{eventCategory:b,eventAction:c,eventLabel:d,event:e})}function c(a,c,d,e,f){$(a).click(function(){b(c,d,e,f)})}function d(a){var b=a.getBoundingClientRect(),c=window.innerHeight||document.documentElement.clientHeight,d=window.innerWidth||document.documentElement.clientWidth,e=b.bottom>0&&b.top<=c,f=b.right>0&&b.left<=d;return e&&f}$("a").each(function(){var a=this,b=$(a).attr("href");b.match(/^#.*/)?c(this,"onpage-links","navigate",$(a).text()+" ("+b+")"):b.match(/^https?:\/\/.*/)?c(this,"offpage-links","navigate",$(a).text()+" ("+b+")"):b.match(/.*pdf$/i)&&c(this,"downloads","download",$(a).text()+" ("+b+")"),b.match(/^mailto\:/i)?c(this,"onpage-links","contact","mail"):b.match(/^https:\/\/plus.google.com.*/)&&c(this,"onpage-links","contact","G+")});var e=[];$(window).scroll(function(){clearTimeout($.data(this,"scrollTimer")),$.data(this,"scrollTimer",setTimeout(function(){var a=[];$(".trackView").each(function(){var b=this,c=$(b).attr("id");c&&d(b)&&a.push(c)});for(var c=[],f=0;f<a.length;f++){for(var g=!1,h=0;h<e.length;h++)g||e[h]!=a[f]||(g=!0);g||c.push(a[f])}for(var f=0;f<c.length;f++)b("view","item",c[f]);e=a},250))})}),$(function(){function a(a,b,c){var d={timingCategory:a,timingVar:b,timingValue:c};console.log(d),ga("send","timing",d)}if("function"==typeof ga&&"object"==typeof window.performance&&"function"==typeof window.performance.getEntriesByName){var b=performance.timing;a("latency","page",Math.round(b.responseEnd-b.fetchStart));var c=window.performance.getEntriesByType("resource"),d=0,e=0;for(var f in c){var g=c[f];d++,e+=Math.round(g.responseEnd-g.fetchStart)}a("latency","average",Math.round(e/d)),a("resources","count",d)}});var template={en:{about_me:"About me",about_me_t1:"I'm a passionated java software craftman constantly striving to get the best solution for my customers, focussed heavily on dev-ops and overall quality of my software.",about_me_t2:"Customers value two things about software. The way it makes a machine behave; and the ease with which it can be changed.",work_exp:"work experiences",work_id:"Java developer",work_west:"Java developer",work_is24:"Java developer",work_is24_2:"DevOps with CLD, SELinux",work_is24_3:"agile change management (adjust processes continuously)",work_is24_4:"agile culture enthusiast",work_is24_5:"product centric software development",work_is24_6:"a driver for internal community work",work_is24_7:"founder of internal community for webperformance enthusiasts",work_lpi:"freelance trainer for linux (LPI)",work_lpi2:"workshops and courses for basics and advanced topics on systemadministration",work_lpi3:"scaling and performance tuning",work_lpi4:"didactics and knowledge management",work_sprd:"QA Engineer",work_sprd2:"quality assurence of a ecommerce platform",work_sprd3:"concept &amp; migration from procedural selenium tests to page objects",work_mediber:"freelance C&sharp; software developer/architect",work_mediber2:"embedded A/V communication based on DirectShow",work_identigo:"freelance JEE software developer/architect",work_identigo2:"design and implementation of services in a SOA context",work_identigo3:"spinoff of Cidas&sup2;",work_fhb:"academic staff at the University of Applied Sciences Brandenburg",work_fhb_t1:"developement of an online portal",work_fhb_t2:"SOA authentification framework with",work_fhb_t3:"administration of the frontend and backend systems",semester_abroad:"semester abroad in Jakarta/Indonesia at the ",semester_abroad_t1:"autonomous training on securing a web application",semester_abroad_t2:"feasibility of video conference in the area of high latency and small bandwidth",semester_abroad_t3:"English and Indonesian in daily life",muellerberg:"carer in the shelter for handicapped people",muellerberg_description:"autonoumous caring of 16 mental ill inhabitants",zivi_pflege:"community service and male nurse in a nursing home",army:"basic military service in Torgelow",skills:"capabilities",languages:"language skills",lang_en:"English",lang_id:"Indonesian",lang_fr:"French",lang_es:"Spanish",education:"education",Informatikstudent_fhb2:"computer sciences at the University of Applied Sciences in Brandenburg (master - grade A<sup>-</sup>)",master_topic:"thesis: analysis and concept - improving static error localisation",research_topic:"seminar paper: quality management with continuous integration - a practical feasibility study",Informatikstudent_fhb:"computer sciences at the University of Applied Sciences in Brandenburg (diploma - grade A)",stay_abroad:"semester abroad - jakarta/indonesia",diplom_topic:"thesis: SOA for multi messaging - an integration concept with Skype",Informatikstudent:"computer sciences at the BTU in Cottbus",Abitur:"higher school graduation",Arbeiten:"studies",master_t1:"thesis",master_t2:"analysis and concept - improving static error localisation",research_t1:"seminar paper",research_t2:"quality management with continuous integration - a practical feasibility study",diploma_t1:"diploma thesis",diploma_t2:"SOA for multi messaging - an integration concept with Skype",semesterAbroad_t1:"Semester abroad",semesterAbroad_t2:"Indonesia - far east",Impressum:"imprint"}},language=(navigator.language||navigator.browserLanguage).split("-")[0];console.info("language:"+language);var languageKey="de"===language?"de":"en";if("de"===languageKey);else{var dictionary=template[languageKey];$(".i18n").each(function(){var a=$(this).attr("i18n-key"),b=void 0===a?this.innerText:a;void 0===dictionary[b]||0==dictionary[b].length?console.warn("missing key:"+b):$(this).html(dictionary[b])}),$("html").attr("lang",languageKey)}