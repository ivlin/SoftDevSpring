/*
Ivan Lin
SoftDev2 pd3
HW4 -- SVG Animation
2016-2-29
*/

var svg = document.getElementById("vimage");
var animate;

var animateDot = function animateDot(){
    svg.innerHTML="";
    var x = 250;
    var y = 250;
    var radius = 0;
    var change = 1;
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
dot.setAttribute("r",radius);
    svg.appendChild(dot);
    animate= window.setInterval(function(){
	var radius = dot.getAttribute("r");
	if (radius < 0 || radius == x || radius == y){
	    change *= -1;
	}
	
	dot.setAttribute("r",(parseInt(dot.getAttribute("r"))+change));
    },16);
};

var stopAnimate = function stopAnimate(){
    window.clearInterval(animate);
};

var animateDvd = function animateDvd(){
    svg.innerHTML="";
    var logo = document.createElementNS("http://www.w3.org/2000/svg","image");
    var xpos = 0;
    var ypos = 0;
    logo.setAttributeNS("http://www.w3.org/1999/xlink","href","logo_dvd.jpg");
    logo.setAttribute("x",xpos);
    logo.setAttribute("y",ypos);        
    logo.setAttribute("width",100);    
    logo.setAttribute("height",50);
    logo.setAttribute("visibility","visible");
    svg.appendChild(logo);
    var maxX = 400;
    var maxY = 450;
    var vx=1;
    var vy=1;
    animate= window.setInterval(function(){
	if (xpos<0||ypos>=maxX){
	    vx *= -1;
	}
	if (ypos<0||ypos>=maxY){
	    vy *= -1;
	}
	xpos+=vx;
	ypos+=vy;
	logo.setAttribute("x",xpos);
	logo.setAttribute("y",ypos);
    },1000/60);
};

document.getElementById("animate-dot").addEventListener("click",animateDot);
document.getElementById("stop-animate").addEventListener("click",stopAnimate);
document.getElementById("animate-dvd").addEventListener("click",animateDvd);
