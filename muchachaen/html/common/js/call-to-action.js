$(document).ready(function(){
         $('.button a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
});