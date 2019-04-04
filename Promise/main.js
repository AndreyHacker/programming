/*var p1 = new Promise(function(resolve, reject) {
var a = 5;
  if(a==5){
  resolve("Успех!");
   }else{ reject("Ошибка!");}

});

p1.then(function(value) {console.log(value);}, function(reason) { console.log(reason);});

var xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonware.com/json/3e4479324140381a1aa4fe5b3f1eeb07.json',false);
xhr.send();
console.log(xhr.status);
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
   xhr.responseText = '[{"a": 1}, {"b": 1}]';
   
   // responseText -- текст ответа.
  
}*/
url = 'https://jsonware.com/json/3e4479324140381a1aa4fe5b3f1eeb07.json';
fetch(url)
	.then(responsee => response.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))              