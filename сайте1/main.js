var a ,b, c,k,elem;
b=0;

var string = "Add";
var str = "Adk";
function Add(){

	a = document.getElementById('Add').value ;
	 document.getElementById('Add').value = "";
	 b = String(b);
	 document.getElementById('Completed').innerHTML +="<div style="+"display:none;"+" id="+"Adk"+b+">"+"<span >"+a+"</span>"+"<button onclick="+"elem=document.getElementById(str+"+b+");elem.parentNode.removeChild(elem);k=parseInt(k);"+">Delete</button></div>";
	  document.getElementById('Todo').innerHTML += "<div id="+"Add"+b+">"+"<span><br>"+a+"</span>"+" <button onclick="+ "document.getElementById(\""+str+b+"\").style.display=\"block\";elem=document.getElementById(string+"+b+");elem.parentNode.removeChild(elem);b=parseInt(b);"+" >Delete</button></div>";
	  
	 b++;

}      

function Todo(){

	 elem = document.getElementById(string + b);elem.parentNode.removeChild(elem);

 b = parseInt(b);

}

	 
	 
	 

    

/*function Completed(){

///"document.getElementById('Completed').innerHTML +="+"<div id="+"Add"+k+">"+"<span><br>"+a+"</span>"+"<button onclick="+"elem=document.getElementById(string+"+k+");elem.parentNode.removeChild(elem);k=parseInt(k);"+">Delete</button></div>";
document.getElementById('Completed').innerHTML +="<div style="+"display:none;"+" id="+"Adk"+b+">"+"<span ><br>"+a+"</span>"+"<button onclick="+"elem=document.getElementById(str+"+b+");elem.parentNode.removeChild(elem);k=parseInt(k);"+">Delete</button></div>";
}*/