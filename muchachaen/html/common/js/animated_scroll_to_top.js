$(document).ready(function() {
//�܂��g�b�v�ɖ߂�������Ă����܂��B
$("#back-top").hide();

//�X�N���[�����ꂽ��
$(window).scroll(function () {
//100px��������
if ($(this).scrollTop() > 100) {
//�g�b�v�ɖ߂���t�F�[�h�C��
$('#back-top').fadeIn();
//100px�����Ȃ�������
} else {
//�B��
$('#back-top').fadeOut();
}
});

//�g�b�v�ɖ߂���N���b�N������
$('#back-top a').click(function () {
//�X���[�Y�ɏ�ɖ߂�
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});