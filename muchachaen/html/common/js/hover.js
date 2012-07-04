$(document).ready(function() {
     $('.hover').hover(function()
     {
     $(this).animate( { marginLeft: "5px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginLeft: "0px" }, 200  );
     });
	 
	 $('.down').hover(function()
     {
     $(this).children("a").animate( { marginTop: "5px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginTop: "0px" }, 200  );
     });
	 
	 $('.up').hover(function()
     {
     $(this).children("a").animate( { marginTop: "-5px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginTop: "0px" }, 200  );
     });
	 
	 $(".hvr_fd06").hover(function(){
     $(this).stop().fadeTo(400,0.6);
    },
    function(){
    $(this).stop().fadeTo(400,1.0);
    });
});