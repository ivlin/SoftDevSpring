var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#FF00FF";
ctx.beginPath();
ctx.strokeRect(0,0,canvas.width,canvas.height);
ctx.stroke();
ctx.closePath();

var requestId;
var logo = new Image();
logo.src = "logo_dvd.jpg";
var radius=0;
var isGrowing=false;

var drawDot = function drawDot(){
    ctx.beginPath();
    if (radius >= canvas.width/2 || radius <= 0){
	isGrowing = !isGrowing;
    }
    if (isGrowing) {radius+=1;}
    else {radius-=1;ctx.clearRect(0,0,canvas.width,canvas.height);}
    ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    requestId = window.requestAnimationFrame(drawDot);
};

var xpos,ypos,dir;
var dvd = function dvd(){
    ctx.drawImage(logo,dvdx,dvdy,canvas.width/6,logo.height*canvas.width/logo.width/6);
};

var stop = function stop(){
    window.cancelAnimationFrame(requestId);
};

document.getElementById("start").addEventListener("click",drawDot);
document.getElementById("dvd").addEventListener("click",dvd);
document.getElementById("stop").addEventListener("click",stop);
