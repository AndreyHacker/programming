 var randnumber =(Math.random() * 10).toFixed(0);
 var usernumber,count,info;

 count = 0;

 var _button = document.querySelector('button');
_button.addEventListener('click',game);

 console.log(randnumber);

;
info = "DLO";
function game() {

 count++;
 usernumber = document.querySelector(".textarea").value;
 if(randnumber == usernumber)
 {
   document.querySelector('.info').innerHTML = "You win!";
 }else
 {
	if (randnumber > usernumber)
	{
		document.querySelector('.info').innerHTML = "number is bigger";
	}
	else
	{
		document.querySelector('.info').innerHTML = "number is smoller";
	}
 }


}



