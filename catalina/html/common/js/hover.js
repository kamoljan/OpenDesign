$(document).ready(function() {
     $('.hover').hover(function()
     {
     $(this).children("a").animate( { marginLeft: "5px" }, 200  );
     },
     function()
     {
        $(this).children("a").animate( { marginLeft: "0px" }, 200  );
     });
});