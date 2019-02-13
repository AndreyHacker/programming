document.querySelector('body').addEventListener('keydown', entkey);
var canv = document.querySelector('canvas');
ctx = canvas.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
ctx.fillStyle = "#D74022";
var i = setTimeout(right,10);
var w  = 50, h = 50, left = 50 ,up = 25;
 	

function right(){
	ctx.clearRect(0,0,canv.width,canv.height);
	ctx.fillStyle = "yellow";
    ctx.fillRect(1000,100,150,100);
    ctx.fillStyle = "#D74022";
	left+=8;
	ctx.fillRect(left,up,w,h);
	if(left>=950&&up>=45&&up<=180&&left<=1150){finis()};
		console.log(left);
}
function lef(){
	ctx.clearRect(0,0,canv.width,canv.height);
	ctx.fillStyle = "yellow";
    ctx.fillRect(1000,100,150,100);
    ctx.fillStyle = "#D74022";
	left-=8;
	ctx.fillRect(left,up,w,h);
	if(left>=950&&up>=45&&up<=180&&left<=1150){finis()};
}
function upward(){
	ctx.clearRect(0,0,canv.width,canv.height);
 	ctx.fillStyle = "yellow";
    ctx.fillRect(1000,100,150,100);
    ctx.fillStyle = "#D74022";
	up-=8;
	ctx.fillRect(left,up,w,h);
	if(left>=950&&up>=45&&up<=180&&left<=1150){finis()};
}
function down(){
	ctx.clearRect(0,0,canv.width,canv.height);
	ctx.fillStyle = "yellow";
    ctx.fillRect(1000,100,150,100);
    ctx.fillStyle = "#D74022";
	up+=8;
	ctx.fillRect(left,up,w,h);
	if(left>=950&&up>=45&&up<=180&&left<=1150){finis()};
}

function entkey(event){
	switch(event.keyCode) {
  case 87:  
    upward();  
    break;
  case 83:  
    down();
	break;
 
 case 68:  
    right();
   
	break;
 
 case 65:  
    lef();
    
	break;
	
 }

}
var text = document.querySelector('#text');
function finis(){
		document.querySelector('body').removeEventListener('keydown', entkey);
	ctx.clearRect(0,0,canv.width,canv.height);
	var tfgh = setInterval(100,finis);

	text.innerHTML = "You win!";
	text.style.fontSize = "100px";
	text.style.color = "blue";

	text.style.left= "700px";
	text.style.top= "400px";
}



