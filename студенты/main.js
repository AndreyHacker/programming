var studentsAndPoints = ['Алексей Петров', 0
, 'Ирина Овчинникова', 60, 'Глеб Стукалов', 30,
 'Антон Павлович', 30, 'Виктория Заровская', 30, 
 'Алексей Левенец', 70, 'Тимур Вамуш', 30, 
 'Евгений Прочан', 60, 'Александр Малов', 0];
 
 var  z=0,s=0,t=0,points = [8],students =[8];
 
 studentsAndPoints.forEach(function(x,y,z) {console.log(y);
if(y%2 == 0){students[y/2] = x}else if(y %2 !=0){points[((y+1)/2)-1]=x;}

  
});
 console.log(students);
  console.log(points);
 
 document.write("Список студентов:")
  studentsAndPoints.forEach(function(x,y,z) {
  	
if(y%2 == 0){
  document.write("<br>"+students[y/2]+" набрал ")
  document.write(points[y/2]+" балов")
}

  
});
 





for(k=0;k!=points.length;k++){
	for(j=0;j!=points.length;j++){
		if(points[j] >= points[j+1]){z=points[j];points[j]=points[j+1];points[j+1]=z;s=students[j];students[j]=students[j+1];students[j+1]=s;}

	}

}

/*document.write("<br>Студент набравший максимальное количевство балов - "+ students[8]+":"+points[8]);

var studentsAndPoints1 = studentsAndPoints.map(function (x,y,z) {
	if(z[y-1] == 'Ирина Овчинникоа' ||z[y-1] == 'Алесандр Малов'){x += 30}
	return x;
})

studentsAndPoints1.forEach(function(x,y,z) {console.log(y);
if(y%2 == 0){students[y/2] = x}else if(y %2 !=0){points[((y+1)/2)-1]=x;}

  
});
 */
 
/* document.write("<br>Измененный cписок студентов:")
  studentsAndPoints.forEach(function(x,y,z) {
  	
if(y%2 == 0){
  document.write("<br>"+students[y/2]+" набрал ")
  document.write(points[y/2]+" балов")
}

  
});

*/

var button = document.querySelector('#knopka');
var numtop;  // сколько лучших студентов выводить
function getTop()     //  Функция топ
{ 
  document.querySelector('#top').innerHTML = ""; // очищаем поля
  numtop = document.getElementById('numtop').value;  // узнаем скольких студентов выводить
  for (var i = 8;i != 8 - numtop ; i--) {

     document.querySelector('#top').innerHTML += students[i]+" : "+  points[i]+ "<br>";  // выводим топ

  }
}

button.addEventListener("click",getTop);


