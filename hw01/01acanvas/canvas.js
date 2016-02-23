//ivan lin's test page
var canvas = document.getElementById("ftb2maga");
var ctx = canvas.getContext("2d");

ctx.fillStyle="#44AAAA";
//ctx.fillRect(xcor,ycor,width,height);
//draw solid rectangle with fillStyle color
ctx.fillRect(0,0,400,400);
ctx.fillStyle="#22CCCC";
ctx.fillRect(50,50,400,400);

ctx.strokeStyle="#000000";
//ctx.strokeRect(xcor,ycor,width,height);
//draw transparent rectangle with strokeStyle border
ctx.strokeRect(100,100,400,400);

//ctx.beginPath(); Initialize "turtle" for drawing
ctx.beginPath();
//ctx.moveTo(xcor,ycor); Set xcor and ycor of pen
ctx.moveTo(50,50);
//ctx.moveTo(xcor,ycor); Draw line to new xcor ycor
ctx.lineTo(450,450);
ctx.moveTo(450,50);
ctx.lineTo(50,450);
ctx.lineTo(50,50);
//ctx.stroke(); Draws over the lines with strokeStyle color
ctx.stroke();
ctx.fillStyle="#668866";
//ctx.fill(); Fills in areas enclosed by the lines with fillStyle color
ctx.fill();


//ctx.arc(xcor,ycor,radius,startPosition,endPosition);
//draw arc with strokeStyle
ctx.arc(250,250,200,0,3);
ctx.stroke();

//ctx.closePath(); Stop drawing
ctx.closePath();

ctx.fillStyle="#FF9955";
ctx.font="30px sans-serif";
//ctx.fillText(text,xcor,ycor); Writes text using font property at coords
ctx.fillText("Leonardo daCaprio",100,100);
