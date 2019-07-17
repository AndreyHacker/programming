 var i =(Math.random() * 10).toFixed(0);
 var z,c;
 
 console.log(i);
while(i!=z){
	c++;
z = prompt("Enter number(0 - 10):");
if (z >10 || z<0)alert("Invalid number");
else if(i==z){audi();alert("You won :)");break}
else{
	if(i > z){alert("Number is biger")}
	if(i < z){alert("Number is smoller")}
}


}