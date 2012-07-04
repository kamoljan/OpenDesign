function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
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

//���쌠 �N�\��
function ShowNowYear() {
   var now = new Date();
   var year = now.getFullYear();
//���N����   document.write("2009-"+year);
   document.write(year);
}

//page top

var pageScrollTimer = null;
var isIE = false;

if (navigator.appName.indexOf("Microsoft Internet Explorer", 0) == 0) {
	isIE = true;
}




