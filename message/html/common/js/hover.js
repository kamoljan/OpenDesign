$(document).ready(function() {
     $('#gnavi li').hover(function()
     {
     $(this).children("a").animate( { marginTop: "5px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginTop: "0px" }, 200  );
     });
     $('.pagetop_box img').hover(function()
     {
     $(this).animate( { marginTop: "28px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginTop: "33px" }, 200  );
     });
	 $('.R_pagetop img').hover(function()
     {
     $(this).animate( { marginTop: "10px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginTop: "15px" }, 200  );
     });
     $('#idx .link_online').hover(function()
     {
     $(this).animate( { marginLeft: "6px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginLeft: "0px" }, 200  );
     });
     $('#idx .link_toriyose').hover(function()
     {
     $(this).animate( { marginLeft: "140px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginLeft: "129px" }, 200  );
     });
     $('#idx .link_more').hover(function()
     {
     $(this).animate( { marginRight: "0px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginRight: "10px" }, 200  );
     });
     $('.hvr_right05').hover(function()
     {
     $(this).animate( { marginLeft: "5px" }, 200  );
     },
     function()
     {
        $(this).animate( { marginLeft: "0px" }, 200  );
     });
	$(".ov").hover(function(){
     $(this).stop().fadeTo(400,0.6);
    },
    function(){
    $(this).stop().fadeTo(400,1.0);
    });
	$(".con_img .wp-post-image").hover(function(){
     $(this).stop().fadeTo(400,0.6);
    },
    function(){
    $(this).stop().fadeTo(400,1.0);
    });
});