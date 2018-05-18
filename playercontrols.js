var vid = document.getElementById("myVideo");

function pauseVid() {
    vid.pause();
	document.getElementById("pause").style.display = "none";
	document.getElementById("play").style.display = "block";
	document.getElementById("hideandshow").style.display = "block";
}

function playVid() {
    vid.play();
	document.getElementById("play").style.display = "none";
	document.getElementById("pause").style.display = "block";
	document.getElementById("hideandshow").style.display = "none";
}
  
function volumenull() { 
    vid.volume = 0.0;
	document.getElementById("mutesound").style.display = "none";
	document.getElementById("raisesound").style.display = "block";
} 
  
function setFullVolume() { 
    vid.volume = 1.0;
	document.getElementById("raisesound").style.display = "none";
	document.getElementById("mutesound").style.display = "block";
}

vid.onended = function() {
	document.getElementById("hideandshow").style.display = "block";
	
};