$((function(){$("#header").find("a").each((function(){var t=$(this).attr("href");t.match(/^#.*/)&&($(this).attr("href","#"),$(this).click((function(){$(t).animatescroll({scrollSpeed:2e3,easing:"easeOutCirc"})})))}))}));
//# sourceMappingURL=index.bece5ac6.js.map
