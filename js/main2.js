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
var spring = document.getElementById("springBut");
var hero = document.querySelector(".hero");
var scroll = document.querySelectorAll(".button");
var top = document.getElementById("toBut");

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

function changeBackground(){
	hero.classList.toggle('backSpring');
};

music.onplaying = function(){
	musicPlaying = true;
};

music.onpause = function(){
	musicPlaying = false;
}



function Scroll(){
	TweenLite.to(window, 2, {scrollTo:"#graph"});
}

function buttonScroll(){
	TweenLite.to(window, 1, {scrollTo:".hero"});
}



tl.add(TweenMax.staggerFrom(gg, 1, { scale: 0.5, opacity:0, delay:0, ease:Circ.easeOut}, 0.1));
tl.add(TweenMax.staggerFrom(tg, 1, { scale: 0.5, opacity:0, delay:0, ease:Circ.easeOut}, 0.1));
tl.add(TweenMax.staggerFrom(cast, 1, { scale:0.5, opacity:0, delay:0.2, ease:Circ.easeOut}, 0.1));


top.addEventListener("click", buttonScroll, false);

scroll[0].addEventListener("click", Scroll, false);
scroll[1].addEventListener("click", Scroll, false);
scroll[2].addEventListener("click", Scroll, false);
scroll[3].addEventListener("click", Scroll, false);

window.addEventListener("load", playMusic, false);
musicBut.addEventListener("click", togglePlay, false);

spring.addEventListener('click', changeBackground, false);

})();