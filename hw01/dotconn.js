var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var lastX, lastY;

//draw black canvas border
ctx.strokeStyle="#000000";
ctx.fillStyle="#FF0000";
ctx.strokeRect(0,0,canvas.width,canvas.height);

var drawDot = function drawDot(x,y){
    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fill();
    if (lastX){
	ctx.moveTo(lastX,lastY);
	ctx.lineTo(x,y);
    }
    ctx.stroke();
    lastX = x;
    lastY = y;
    ctx.closePath();
};

//add click listener to canvas
//draw dot at point
canvas.addEventListener("click",function(e){
    drawDot(e.clientX,e.clientY);
});

//add click listener to clear button
//it will clear the canvas on click
document.getElementById("clear").addEventListener("click", function(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    lastX=null;
});
