var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF00FF";

var animate=false;
var radius=0;
var isGrowing=false;

var drawDot = function(){
    ctx.beginPath();
    if (radius >= canvas.width/2 || radius <= 0){
	isGrowing = !isGrowing;
    }
    if (isGrowing) {radius+=1;}
    else {radius-=1;ctx.clearRect(0,0,canvas.width,canvas.height);}
    ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    if (animate){
	window.requestAnimationFrame(drawDot);
    }
};

document.getElementById("start").addEventListener("click",function(){
    animate=true;
    window.requestAnimationFrame(drawDot);
});

document.getElementById("stop").addEventListener("click",function(){
    animate=false;
});
