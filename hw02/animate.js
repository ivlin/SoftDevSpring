var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";

var radius=0;
var isGrowing=true;

var drawCircle = function(x,y){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
};

document.getElementById("start").addEventListener("click",function(){
    if (radius == width/2){
	isGrowing = !isGrowing;
    }
    if (isGrowing) {radius+=1;}
    else {radius-=1;}
    window.requestAnimationFrame(drawDot);
});

document.getElementById("stop").addEventListener("click",function(){

});
