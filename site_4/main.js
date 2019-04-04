var button = document.querySelector("#btn");
button.addEventListener("click",submit);

var pcolor = document.querySelector("p").style.color

function submit() {
	
			//alert(document.querySelector("option:nth-child(3)").selected);
			
	for(var i = 1;i<=6;i++){
		if(document.querySelector("option:nth-child(" +i+")").selected){
			
			pcolor = document.querySelector("p").style.color = document.querySelector("option:nth-child(" +i+")").value;
			}
	};

}