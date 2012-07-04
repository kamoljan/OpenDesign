$(document).ready(function() {
     $('.hover').hover(function()
     {
     $(this).children("a").animate( { marginLeft: "7px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginLeft: "0px" }, 200  );
     });
	 $('.hover2').hover(function()
     {
     $(this).children("span").animate( { marginLeft: "7px" }, 200  );
     },
     function()
     {
        $(this).children("span").animate( { marginLeft: "0px" }, 200  );
     });
	 $('.hover3').hover(function()
     {
     $(this).children("a").animate( { marginLeft: "2px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginLeft: "0px" }, 200  );
     });
	 $('.down').hover(function()
     {
     $(this).children("a").animate( { marginTop: "2px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginTop: "0px" }, 200  );
     });
	 $('.up').hover(function()
     {
     $(this).children("a").animate( { marginTop: "-2px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginTop: "0px" }, 200  );
     });
	 $('.up2').hover(function()
     {
     $(this).children("span").animate( { marginTop: "-2px" }, 200  );
     },
     function()
     {
        $(this).children("span").animate( { marginTop: "0px" }, 200  );
     });
	 $('.up3').hover(function()
     {
     $(this).children("div").animate( { marginTop: "-2px" }, 200  );
     },
     function()
     {
        $(this).children("div").animate( { marginTop: "0px" }, 200  );
     });
});