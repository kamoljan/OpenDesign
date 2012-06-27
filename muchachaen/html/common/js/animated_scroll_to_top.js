$(document).ready(function() {
//まずトップに戻るを消しておきます。
$("#back-top").hide();

//スクロールされたら
$(window).scroll(function () {
//100pxいったら
if ($(this).scrollTop() > 100) {
//トップに戻るをフェードイン
$('#back-top').fadeIn();
//100pxいかなかったら
} else {
//隠す
$('#back-top').fadeOut();
}
});

//トップに戻るをクリックしたら
$('#back-top a').click(function () {
//スムーズに上に戻る
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});