!function(){var n;(n=jQuery).easing.jswing=n.easing.swing,n.extend(n.easing,{def:"easeOutQuad",swing:function(t,e,a,u,r){return n.easing[n.easing.def](t,e,a,u,r)},easeInQuad:function(n,t,e,a,u){return a*(t/=u)*t+e},easeOutQuad:function(n,t,e,a,u){return-a*(t/=u)*(t-2)+e},easeInOutQuad:function(n,t,e,a,u){return(t/=u/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},easeInCubic:function(n,t,e,a,u){return a*(t/=u)*t*t+e},easeOutCubic:function(n,t,e,a,u){return a*((t=t/u-1)*t*t+1)+e},easeInOutCubic:function(n,t,e,a,u){return(t/=u/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},easeInQuart:function(n,t,e,a,u){return a*(t/=u)*t*t*t+e},easeOutQuart:function(n,t,e,a,u){return-a*((t=t/u-1)*t*t*t-1)+e},easeInOutQuart:function(n,t,e,a,u){return(t/=u/2)<1?a/2*t*t*t*t+e:-a/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(n,t,e,a,u){return a*(t/=u)*t*t*t*t+e},easeOutQuint:function(n,t,e,a,u){return a*((t=t/u-1)*t*t*t*t+1)+e},easeInOutQuint:function(n,t,e,a,u){return(t/=u/2)<1?a/2*t*t*t*t*t+e:a/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(n,t,e,a,u){return-a*Math.cos(t/u*(Math.PI/2))+a+e},easeOutSine:function(n,t,e,a,u){return a*Math.sin(t/u*(Math.PI/2))+e},easeInOutSine:function(n,t,e,a,u){return-a/2*(Math.cos(Math.PI*t/u)-1)+e},easeInExpo:function(n,t,e,a,u){return 0==t?e:a*Math.pow(2,10*(t/u-1))+e},easeOutExpo:function(n,t,e,a,u){return t==u?e+a:a*(1-Math.pow(2,-10*t/u))+e},easeInOutExpo:function(n,t,e,a,u){return 0==t?e:t==u?e+a:(t/=u/2)<1?a/2*Math.pow(2,10*(t-1))+e:a/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(n,t,e,a,u){return-a*(Math.sqrt(1-(t/=u)*t)-1)+e},easeOutCirc:function(n,t,e,a,u){return a*Math.sqrt(1-(t=t/u-1)*t)+e},easeInOutCirc:function(n,t,e,a,u){return(t/=u/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+e:a/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(n,t,e,a,u){var r=1.70158,s=0,i=a;return 0==t?e:1==(t/=u)?e+a:(s||(s=.3*u),i<Math.abs(a)?(i=a,r=s/4):r=s/(2*Math.PI)*Math.asin(a/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*u-r)*(2*Math.PI)/s)+e)},easeOutElastic:function(n,t,e,a,u){var r=1.70158,s=0,i=a;return 0==t?e:1==(t/=u)?e+a:(s||(s=.3*u),i<Math.abs(a)?(i=a,r=s/4):r=s/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*t)*Math.sin((t*u-r)*(2*Math.PI)/s)+a+e)},easeInOutElastic:function(n,t,e,a,u){var r=1.70158,s=0,i=a;return 0==t?e:2==(t/=u/2)?e+a:(s||(s=u*(.3*1.5)),i<Math.abs(a)?(i=a,r=s/4):r=s/(2*Math.PI)*Math.asin(a/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*u-r)*(2*Math.PI)/s)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*u-r)*(2*Math.PI)/s)*.5+a+e)},easeInBack:function(n,t,e,a,u,r){return null==r&&(r=1.70158),a*(t/=u)*t*((r+1)*t-r)+e},easeOutBack:function(n,t,e,a,u,r){return null==r&&(r=1.70158),a*((t=t/u-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(n,t,e,a,u,r){return null==r&&(r=1.70158),(t/=u/2)<1?a/2*(t*t*((1+(r*=1.525))*t-r))+e:a/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e},easeInBounce:function(t,e,a,u,r){return u-n.easing.easeOutBounce(t,r-e,0,u,r)+a},easeOutBounce:function(n,t,e,a,u){return(t/=u)<1/2.75?a*(7.5625*t*t)+e:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+e:a*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,a,u,r){return e<r/2?.5*n.easing.easeInBounce(t,2*e,0,u,r)+a:.5*n.easing.easeOutBounce(t,2*e-r,0,u,r)+.5*u+a}}),n.fn.animatescroll=function(t){var e=n.extend({},n.fn.animatescroll.defaults,t);if("function"==typeof e.onScrollStart&&e.onScrollStart.call(this),"html,body"==e.element){var a=this.offset().top;n(e.element).stop().animate({scrollTop:a-e.padding},e.scrollSpeed,e.easing)}else n(e.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-e.padding},e.scrollSpeed,e.easing);setTimeout((function(){"function"==typeof e.onScrollEnd&&e.onScrollEnd.call(this)}),e.scrollSpeed)},n.fn.animatescroll.defaults={easing:"swing",scrollSpeed:800,padding:0,element:"html,body"}}();
//# sourceMappingURL=index.8f646609.js.map
