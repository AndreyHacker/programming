// window.location = "galery.html"
 function indez(){
  
  if(window.screen.width >= 1920){
    window.location = "index_true.html";
  }else{
   window.location = "index_false.html";
  }
}




var audio = new Audio(); 
audio.src = "sound/Arcadia.mp3";
function soundClick() {
  
   audio.play();
  
 // window.location = "galery.html"
  setTimeout("soundClick()",100000)
 
}


var audio2 = new Audio(); 
  audio2.src = "sound/Kerbal.mp3";
function soundClick2(){
	
  audio2.play(); 
   
setTimeout("soundClick2()",190000);
 // window.location.reload();
 
}


var audio3 = new Audio(); 
  audio3.src = "sound/Dreamy_Flashback.mp3";
function soundClick3(){
  
  audio3.play(); 
   
setTimeout("soundClick3()",130000);
 // window.location.reload();
 
}

  
var audio4 = new Audio(); 
  audio4.src = "sound/kosmos_krasivaya_melodiya.mp3";
function soundClick4(){
  
  audio4.play(); 
   
setTimeout("soundClick4()",90000);
 // window.location.reload();
 
}


var audio5 = new Audio(); 
  audio5.src = "sound/kosmos_melodiya_4.mp3";
function soundClick5(){
  
  audio5.play(); 
   
setTimeout("soundClick5()",268000);
 // window.location.reload();
 
}


    function a1() {
      audio.src = "sound/Arcadia.mp3";
      soundClick();
    	 //window.location.reload();
   }
    function a2(){
 	audio.pause();
    audio.src = "sound/Arcadia1.mp3";
 	}






 	function b1() {
    audio2.src = "sound/Kerbal.mp3";
    soundClick2();
    // window.location.reload();
    
    }
    function b2(){
 	audio2.pause();
 	 audio2.src = "sound/Kerbal1.mp3";
 	
 	}


  function c1() {
    audio3.src = "sound/Dreamy_Flashback.mp3";
    soundClick3();
    // window.location.reload();
    
    }
    function c2(){
  audio3.pause();
   audio3.src = "sound/Kerbal134353.mp3";
  
  }




  function d1() {
    audio4.src = "sound/kosmos_krasivaya_melodiya.mp3";
    soundClick4();
    //window.location.reload();
    
    }
    function d2(){
  audio4.pause();
   audio4.src = "sound/Kerbal1.mp3";
  
  }



  function e1() {
    audio5.src = "sound/kosmos_melodiya_4.mp3";
    soundClick5();
    // window.location.reload();
    
    }
    function e2(){
  audio5.pause();
   audio5.src = "sound/Kerbal1.mp3";
  
  }





var x = 0;
setInterval("time()", 1000);
function time(){
	document.getElementById('time').innerHTML =  "Секунд прошло: " + x; 
	x = x + 1;
}
