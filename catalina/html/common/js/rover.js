/*====================================================================================================
//////////////////////////////////////////////////////////////////////////////////////////////////////

 Author : http://www.yomotsu.net
 created: 2007/03/13
 update : 2007/11/01 IE6 のアルファチャンネル付き png も対象になるよう変更
 Licensed under the GNU Lesser General Public License version 2.1
 
 画像のロールオーバーをするためのスクリプト

//////////////////////////////////////////////////////////////////////////////////////////////////////
====================================================================================================*/
var yomotsuRollover = {
	
	preLoad : {},
	main : function() {
		var img = document.images, i, preLoadImg;
		
		for (i = 0; i <img.length; i++) {
			if ((img[i].src.match(/.*_off\./))||(img[i].style.filter)){
				
				var preLoadImg = new Image;
				preLoadImg.src = img[i].src.replace('_off.', '_on.');
				yomotsuRollover.preLoad[img[i].src] = preLoadImg.src;

				img[i].onmouseover = yomotsuRollover.over;
				img[i].onmouseout  = yomotsuRollover.out;
			}
		}
	},
	
	over : function() {
		var imgSrc, preLoadImgSrc;
		if((this.style.filter)&&(this.style.filter.match(/_off\.png/))){//(IE5.5-6 && png)
			imgSrc = (this.style.filter.match(/src=.*\)/)+"").slice(5,-2);
			preLoadImgSrc = yomotsuRollover.preLoad[imgSrc];
			this.style.filter = this.style.filter.replace(imgSrc, preLoadImgSrc);
		}
		else{
			this.src = yomotsuRollover.preLoad[this.src];
		}
	},

	out : function(){
		if((this.style.filter)&&(this.style.filter.match(/_on\.png/))){//(IE5.5-6 && png)
			this.style.filter = this.style.filter.replace('_on.png', '_off.png');
		}
		else{
			this.src = this.src.replace('_on.', '_off.');
		}
	},

	addEvent : function(){
		try {
			window.addEventListener('load', this.main, false);
		} catch (e) {
			window.attachEvent('onload', this.main);
		}
	}
}

yomotsuRollover.addEvent();




  function view(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById("dtl3").style.display = "none";
        document.getElementById("dtl4").style.display = "none";
        document.getElementById("dtl5").style.display = "none";
        document.getElementById("dtl6").style.display = "none";
	document.getElementById("dtl7").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }
  
  function view2f(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById("dtl3").style.display = "none";
        document.getElementById("dtl4").style.display = "none";
        document.getElementById("dtl5").style.display = "none";
        document.getElementById("dtl6").style.display = "none";
		  document.getElementById("dtl7").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }

  function view3f(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById("dtl3").style.display = "none";
        document.getElementById("dtl4").style.display = "none";
        document.getElementById("dtl5").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }

  function view4f(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }

  function view7f(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById("dtl3").style.display = "none";
        document.getElementById("dtl4").style.display = "none";
        document.getElementById("dtl5").style.display = "none";
        document.getElementById("dtl6").style.display = "none";
        document.getElementById("dtl7").style.display = "none";
        document.getElementById("dtl8").style.display = "none";
        document.getElementById("dtl9").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }
 
  function view8f(id){
    if(document.getElementById){
        document.getElementById("dtl1").style.display = "none";
        document.getElementById("dtl2").style.display = "none";
        document.getElementById("dtl3").style.display = "none";
        document.getElementById(id).style.display = "block";
    }
  }
  
  

//ACC
function acc(){
document.write("<img src='http://www.dogokan.co.jp/cgi-bin/acc/acclog.cgi?");
document.write("referrer="+parent.document.referrer+"&");
document.write("width="+screen.width+"&");
document.write("height="+screen.height+"&");
document.write("color="+screen.colorDepth+"'>");
}

//ACC SSl
function acc2(){
document.write("<img src='https://www.dogokan.co.jp/cgi-bin/acc/acclog.cgi?");
document.write("referrer="+parent.document.referrer+"&");
document.write("width="+screen.width+"&");
document.write("height="+screen.height+"&");
document.write("color="+screen.colorDepth+"'>");
}