function smartRollover() {
	if(document.getElementsByTagName) {
		var f_images = document.getElementsByTagName("img");

		for(var i=0; i < f_images.length; i++) {
			if(f_images[i].src.match("_off."))
			{
				f_images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				f_images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
$(function(){
 $("input[type='image']").mouseover(function(){
  var image = $(this).attr("src");
  image = image.replace("_off", "_on");
  $(this).attr("src", image);
 });
 $("input[type='image']").mouseout(function(){
  var image = $(this).attr("src");
  image = image.replace("_on", "_off");
  $(this).attr("src", image);
 });
});