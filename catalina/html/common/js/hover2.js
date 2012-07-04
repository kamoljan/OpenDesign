$(document).ready(function() {
     $('.hover2').hover2(function()
     {
     $(this).children("a").animate( { margintop: "5px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { margintop: "0px" }, 200  );
     });
});