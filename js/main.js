$(function () {
  $('[data-toggle="popover"]').popover()
})
$(function () {
  $('input, textarea').placeholder();
});
$("select").selectOrDie();
$(".rotate").textrotator({
  animation: "flipUp",
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
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