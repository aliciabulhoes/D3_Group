//JavaScript Document 

(function(){
"use strict";
	
	console.log("SEAF Fired");//important as a debugging tool//this is a shell

var gg = "#mainLogo";
var tg = "#tagLine";
var cast = "#calltoact";
var music = document.getElementById("gilmoremusic");
var tl = new TimelineMax();
var musicBut = document.getElementById("musicControls");
var graph = ("#graph");
var musicPlaying = true;


 function playMusic(){
 	music.play();
}


function togglePlay(){
	if (musicPlaying) {
		music.pause()
	} else {
		music.play()
	}
};

music.onplaying = function(){
	musicPlaying = true;
};

music.onpause = function(){
	musicPlaying = false;
}

tl.add(TweenMax.staggerFrom(gg, 1, { scale: 0.5, opacity:0, delay:0, ease:Circ.easeOut}, 0.1));
tl.add(TweenMax.staggerFrom(tg, 1, { scale: 0.5, opacity:0, delay:0, ease:Circ.easeOut}, 0.1));
tl.add(TweenMax.staggerFrom(cast, 1, { scale:0.5, opacity:0, delay:0.2, ease:Circ.easeOut}, 0.1));
//tl.add(TweenMax.staggerFrom(graph, 1, { scale:0.5, opacity:0, delay:0.2, ease:Circ.easeOut}, 0.1));

window.addEventListener("load", playMusic, false);
musicBut.addEventListener("click", togglePlay, false);

})();