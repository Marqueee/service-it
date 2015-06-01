$(function () {
  $('[data-toggle="popover"]').popover()
})
$(function () {
  $('input, textarea').placeholder();
});
$("select").selectOrDie();
$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});
(function($){
			$(window).load(function(){
				
				/* 
				get snap amount programmatically or just set it directly (e.g. "273") 
				in this example, the snap amount is list item's (li) outer-width (width+margins)
				*/
				var amount=Math.max.apply(Math,$(".slider li").map(function(){return $(this).outerWidth(true);}).get());
				
				$(".slider").mCustomScrollbar({
					axis:"x",
					theme:"dark-3",
                    scrollButtons:{ enable: true },
					advanced:{
						autoExpandHorizontalScroll:true},
                    scrollbarPosition: "outside",
					mouseWheel:{scrollAmount:1000}
				});
				
			});
		})(jQuery);