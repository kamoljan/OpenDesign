$('head').append('<style type="text/css">#wrap{visibility:hidden;}</style>');
$(function(){
$('#wrap').after('<div id="fade"></div>');
if(jQuery.browser.msie && jQuery.browser.version < 7){
$(window).scroll(function(){
var top = $(this).scrollTop();
$('#fade').css('top',top);
});
}
$('#wrap').css('visibility','visible');
$('#fade').fadeOut(1000);
$('a.fade , area.fade').click(function(){
var url = $(this).attr("href");
$('#fade').fadeIn(1000,function(){
location.href = url;
});
return false;
});
});

window.onload = function() {
	windowFade();
};