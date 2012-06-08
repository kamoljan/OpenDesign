$('head').append('<style type="text/css">#wrap{display:none;}</style>');
function windowFade(){
    $('#wrap').fadeIn(1000);
    $('a.fade').click(function(){
        var url = $(this).attr("href");
        $('#wrap').animate({"opacity":0},1000,function(){
            location.href = url;
        });
        return false;
    });
};
 
window.onload = function() {
    windowFade();
};
 
window.onunload = function() {
    windowFade();
};


$(function(){
    var setImg = '#viewer';
    var fadeSpeed = 1500;
    var switchDelay = 5000;
 
    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
 
    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);
});