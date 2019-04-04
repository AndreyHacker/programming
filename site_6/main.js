var n = 1;
var img;
var imgto;
next.onclick = function () {
 img = document.querySelector("img:nth-child("+n +")");
  img.style.display = "none";
n++;
if(n==4){n=1}
 imgto = document.querySelector("img:nth-child("+n +")");
  imgto.style.display = "inline-block";
};
prev.onclick = function() {

 img = document.querySelector("img:nth-child("+n +")");
  img.style.display = "none";
n--;
if(n == 0){n = 3}
 imgto = document.querySelector("img:nth-child("+n +")");
  imgto.style.display = "inline-block";
};

let j =document.querySelectorAll("img")[1].style.length;
console.log(j);

document.querySelectorAll("span").forEach((el,i)=>{el.onclick = ()=>{

	document.querySelectorAll('img').forEach((g,i)=>{

		document.querySelectorAll("img")[i].style.display = "none";
	})	
	document.querySelectorAll("img")[i].style.display = "inline-block";
	n=i+1;

}});