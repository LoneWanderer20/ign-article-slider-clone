// JavaScript Document

var pageOnloadFunc = function() {
    "use strict";
	
var progDiv1 = document.getElementById("progDiv1"),
progDiv2 = document.getElementById("progDiv2"),
imgDiv1 = document.getElementById("imgDiv1"),
imgDiv2 = document.getElementById("imgDiv2"),
imgDiv3 = document.getElementById("imgDiv3"),
imgDiv4 = document.getElementById("imgDiv4"),
imgDiv5 = document.getElementById("imgDiv5"),
navTitles = document.getElementsByClassName("navTitlesStruc"),
progDiv1Width = 0,
progDiv2Width = 0,
imgDiv1Height = 264,
imgDiv2Height = 0,
imgDiv3Height = 0,
imgDiv4Height = 0,
imgDiv5Height = 0;

var makeProgress = setInterval(function() {
	
	if(progDiv1Width<192) {
		
		if(imgDiv1Height<264) {
			imgDiv1Height += 22;
	        imgDiv1.style.height = imgDiv1Height + "px";
	    } else {
		    imgDiv1.style.height = "264px";
		    imgDiv1Height = 264;
			imgDiv5.style.height = "0px";
		    imgDiv5Height = 0;
	    } 
		
	    progDiv1Width += 1;
	    progDiv1.style.width = progDiv1Width + "px";
		navTitles[0].style.color = "#0000FF";
		navTitles[4].style.color = "#000000";
		
	} else if(progDiv1Width<386) {
		
		if(imgDiv2Height<264) {
	        imgDiv2Height += 22;
	        imgDiv2.style.height = imgDiv2Height + "px";
	    } else {
		    imgDiv2.style.height = "264px";
		    imgDiv2Height = 264;
			imgDiv1.style.height = "0px";
		    imgDiv1Height = 0;
	    } 
		
	    if(progDiv2Width<193) {
	        progDiv2Width += 7;
	        progDiv2.style.width = progDiv2Width + "px";
	    } else {
		    progDiv2.style.width = "193px";
		    progDiv2Width = 193;	
	    } 
		
		progDiv1Width += 1;
	    progDiv1.style.width = progDiv1Width + "px";
		imgDiv1.style.zIndex = "0";
		imgDiv5.style.zIndex = "1";
		navTitles[1].style.color = "#0000FF";
		navTitles[0].style.color = "#000000";
		
	} else if(progDiv1Width<580) {
		
		if(imgDiv3Height<264) {
	        imgDiv3Height += 22;
	        imgDiv3.style.height = imgDiv3Height + "px";
	    } else {
		    imgDiv3.style.height = "264px";
		    imgDiv3Height = 264;
			imgDiv2.style.height = "0px";
		    imgDiv2Height = 0;
	    }

	    if(progDiv2Width<384) {
	        progDiv2Width += 7;
	        progDiv2.style.width = progDiv2Width + "px";
	    } else {
		    progDiv2.style.width = "386px";
		    progDiv2Width = 386;	
	    } 
   
		progDiv1Width += 1;
	    progDiv1.style.width = progDiv1Width + "px";
		navTitles[2].style.color = "#0000FF";
		navTitles[1].style.color = "#000000";
		
	} else if(progDiv1Width<773) {
		
		if(imgDiv4Height<264) {
	        imgDiv4Height += 22;
	        imgDiv4.style.height = imgDiv4Height + "px";
	    } else {
		    imgDiv4.style.height = "264px";
		    imgDiv4Height = 264;
			imgDiv3.style.height = "0px";
		    imgDiv3Height = 0;
	    }
		
	    if(progDiv2Width<578) {
	        progDiv2Width += 7;
	        progDiv2.style.width = progDiv2Width + "px";
	    } else {
		    progDiv2.style.width = "580px";
		    progDiv2Width = 580;	
	    } 
        
		progDiv1Width += 1;
	    progDiv1.style.width = progDiv1Width + "px";
		navTitles[3].style.color = "#0000FF";
		navTitles[2].style.color = "#000000";
		
	} else if(progDiv1Width<961) {
		
		if(imgDiv5Height<264) {
	        imgDiv5Height += 22;
	        imgDiv5.style.height = imgDiv5Height + "px";
	    } else {
		    imgDiv5.style.height = "264px";
		    imgDiv5Height = 264;
			imgDiv4.style.height = "0px";
		    imgDiv4Height = 0;
	    }
		
	    if(progDiv2Width<771) {
	        progDiv2Width += 7;
	        progDiv2.style.width = progDiv2Width + "px";
	    } else {
		    progDiv2.style.width = "773px";
		    progDiv2Width = 773;	
	    } 
      
		progDiv1Width += 1;
	    progDiv1.style.width = progDiv1Width + "px";
		navTitles[4].style.color = "#0000FF";
		navTitles[3].style.color = "#000000";
	
	} else {
			
	    if(progDiv2Width<961) {
	        progDiv2Width += 7;
	        progDiv2.style.width = progDiv2Width + "px";
	    } else {
		    progDiv2.style.width = "0px";
		    progDiv2Width = 0;	
		    progDiv1Width = 0;
	    }
		progDiv1.style.width = "0px";
		imgDiv1.style.zIndex = "1";
		imgDiv5.style.zIndex = "0";
	}
},26);

var titlesClick = function() {
	
	clearInterval(makeProgress);
    var target = event.target || event.srcElement;
	navTitles[0].style.color = "#000000";
    navTitles[1].style.color = "#000000";
    navTitles[2].style.color = "#000000";
    navTitles[3].style.color = "#000000";
    navTitles[4].style.color = "#000000";
	imgDiv1.style.zIndex = "0";
	imgDiv2.style.zIndex = "0";
	imgDiv3.style.zIndex = "0";
	imgDiv4.style.zIndex = "0";
    imgDiv5.style.zIndex = "0";
	
	clearInterval(makeProgress);
	
	if(target === navTitles[0]) {
		var img1Show = setInterval(function() {
			if(imgDiv1Height<264) {
	            imgDiv1Height += 22;
	            imgDiv1.style.height = imgDiv1Height + "px";
	        } else {
		        imgDiv1.style.height = "264px";
		        imgDiv1Height = 264;
			    clearInterval(img1Show);
	            imgDiv2.style.height = "0px";
	            imgDiv3.style.height = "0px";
	            imgDiv4.style.height = "0px";
            	imgDiv5.style.height = "0px";
                imgDiv2Height = 0;
                imgDiv3Height = 0;
                imgDiv4Height = 0;
                imgDiv5Height = 0;
	        }	
		},26);
		imgDiv1.style.zIndex = "1";
		progDiv1.style.width = "193px";
		progDiv2.style.width = "0px";
		navTitles[0].style.color = "#0000FF";
	} else if(target === navTitles[1]) {
		var img2Show = setInterval(function() {
			if(imgDiv2Height<264) {
	            imgDiv2Height += 22;
	            imgDiv2.style.height = imgDiv2Height + "px";
	        } else {
		        imgDiv2.style.height = "264px";
		        imgDiv2Height = 264;
			    clearInterval(img2Show);
				imgDiv1.style.height = "0px";
	            imgDiv3.style.height = "0px";
	            imgDiv4.style.height = "0px";
            	imgDiv5.style.height = "0px";
            	imgDiv1Height = 0;
                imgDiv3Height = 0;
                imgDiv4Height = 0;
                imgDiv5Height = 0;
	        }	
		},26);
		imgDiv2.style.zIndex = "1";
		progDiv1.style.width = "386px";
		progDiv2.style.width = "193px";
		navTitles[1].style.color = "#0000FF";
	} else if(target === navTitles[2]) {
		var img3Show = setInterval(function() {
			if(imgDiv3Height<264) {
	            imgDiv3Height += 22;
	            imgDiv3.style.height = imgDiv3Height + "px";
	        } else {
		        imgDiv3.style.height = "264px";
		        imgDiv3Height = 264;
			    clearInterval(img3Show);
				imgDiv1.style.height = "0px";
	            imgDiv2.style.height = "0px";
	            imgDiv4.style.height = "0px";
            	imgDiv5.style.height = "0px";
            	imgDiv1Height = 0;
                imgDiv2Height = 0;
                imgDiv4Height = 0;
                imgDiv5Height = 0;
	        }	
		},26);
		imgDiv3.style.zIndex = "1";
		progDiv1.style.width = "580px";
		progDiv2.style.width = "384px";
		navTitles[2].style.color = "#0000FF";
	} else if(target === navTitles[3]) {
		var img4Show = setInterval(function() {
			if(imgDiv4Height<264) {
	            imgDiv4Height += 22;
	            imgDiv4.style.height = imgDiv4Height + "px";
	        } else {
		        imgDiv4.style.height = "264px";
		        imgDiv4Height = 264;
			    clearInterval(img4Show);
				imgDiv1.style.height = "0px";
	            imgDiv2.style.height = "0px";
	            imgDiv3.style.height = "0px";
            	imgDiv5.style.height = "0px";
            	imgDiv1Height = 0;
                imgDiv2Height = 0;
                imgDiv3Height = 0;
                imgDiv5Height = 0;
	        }	
		},26);
		imgDiv4.style.zIndex = "1";
		progDiv1.style.width = "773px";
		progDiv2.style.width = "578px";
		navTitles[3].style.color = "#0000FF";
	} else {
		var img5Show = setInterval(function() {
			if(imgDiv5Height<264) {
	            imgDiv5Height += 22;
	            imgDiv5.style.height = imgDiv5Height + "px";
	        } else {
		        imgDiv5.style.height = "264px";
		        imgDiv5Height = 264;
			    clearInterval(img5Show);
				imgDiv1.style.height = "0px";
	            imgDiv2.style.height = "0px";
	            imgDiv3.style.height = "0px";
	            imgDiv4.style.height = "0px";
            	imgDiv1Height = 0;
                imgDiv2Height = 0;
                imgDiv3Height = 0;
                imgDiv4Height = 0;
	        }	
		},26);
		imgDiv5.style.zIndex = "1";
		progDiv1.style.width = "961px";
		progDiv2.style.width = "771px";
		navTitles[4].style.color = "#0000FF";
	}
};
navTitles[0].onclick = titlesClick;
navTitles[1].onclick = titlesClick;
navTitles[2].onclick = titlesClick;
navTitles[3].onclick = titlesClick;
navTitles[4].onclick = titlesClick;

};
window.onload = pageOnloadFunc();

