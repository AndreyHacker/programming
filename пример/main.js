/* 
* массив с данными наших студентов
*/
var studentsAndPoints = ['Алексей Петров', 0, 
						 'Ирина Овчинникова', 60, 
						 'Глеб Стукалов', 30, 
						 'Антон Павлович', 30, 
						 'Виктория Заровская', 30, 
						 'Алексей Левенец', 70, 
						 'Тимур Вамуш', 30, 
						 'Евгений Прочан', 60, 
						 'Александр Малов', 0];

/* 
* Инициализируем наш контейнер для таблицы,
* студентов и баллы наших студентов
*/
var studentsInfoBlock = document.querySelector('#students-info');
var students = getElements(studentsAndPoints, true);
var points = getElements(studentsAndPoints, false);
var inputName = document.querySelector('#new-name');
var inputPoints = document.querySelector('#new-points');
var addBtn = document.querySelector('.add-user');


function newStudent(name, points) {
	if(!isNaN(points)) {
		studentsAndPoints.push(name, points);
	}
	else {
		studentsAndPoints.push(name, 0);
	}
}

/* 
* создаем класс студент,  
* у которого будет свое имя и количество баллов
*/
function Student(name, points) {
	this.name = name;
	this.points = points;

	this.addPoints = function(points) {
		if (!isNaN(points)) {
			return this.points += +points;
		} else {
			return;
		}
	}
}


/* 
* создаем функцию которая в зависимости от аргументов,  
* будет возвращать массив с именами студентов,
* либо с баллами
*/
function getElements(array, isNumber) {
	var _newArray = []; // создаем локальную перменную в которой будут храниться наши данные

	array.forEach((item)=>{
		if (isNaN(item) && isNumber === true) {
			_newArray.push(item);
		}
		if (!isNaN(item) && isNumber === false) {
			_newArray.push(item);
		}
	})

	return _newArray;
}

/* 
* с помощью данной функции,
* создаем студентов на основе созданного выше класса,
* в котором у каждого студента будет поле name и points
*/
function allStudentsList(allStudents, points) {
	var _studentsInfo = [] // создаем локальную перменную в которой будут храниться наши данные
	allStudents.forEach((item, i)=> {
		_studentsInfo.push(new Student(item, points[i]));
	});

	return _studentsInfo;
	
}

/* 
* создаем функцию с помощью которой, 
* будем сортировать наших студентов
*
*/
function compare(a, b) {
	if (a.points > b.points) {
		return -1;
	}
	if (a.points < b.points) {
		return 1;
	}
	return 0;
}

/* 
* функция непосредственно в которой
* и сортируем наших студентов по количеству баллов
* 
*/
function sortStudents(students, customSortFunction) {
	var _sortStudents;

	_sortStudents = students.sort(customSortFunction);
	return _sortStudents;
}

/* 
* выводим в консоль информацию о студенте, 
* с лучшими показателями
* 
*/
function studentWithHightPoints(sortedStudents) {
	var _name = sortedStudents[0].name,
		_points = sortedStudents[0].points;

	// выводим информацию в консоль, изменив стили вывода
	console.log('%c Student with hight points ' + `${_name} (${_points} points)`,
				'font-size: 33px; color: orange; text-transform: uppercase;'
				);
}

function updateMainArray(oldArray, newArray) {
	oldArray = newArray;

	return oldArray;
}

var allStudents = allStudentsList(
	getElements(studentsAndPoints, true),  
	getElements(studentsAndPoints, false)
);

/* 
* выводим таблицу на страницу 
* 
*/
function renderTableOnPage(items, block, topList) {
	block.innerHTML = '';

	if (topList === true) {
		items.forEach((item, i)=>{
			var _node = `<tr>
							<td>${i+1}: ${item.name}</td>
							<td class="points">${item.points}</td>
						</tr>`;
			block.innerHTML +=  _node;
		});	
	} else {
		items.forEach((item)=>{
			var _node = `<tr>
							<td>${item.name}</td>
							<td class="points">${item.points}</td>
							<td><input class ="test" type="text" value =""></td>
							<td><button class="btn" type="button">add</button></td>
						</tr>`;
			block.innerHTML +=  _node;
		});	
	}
}

/* 
* главная функция, где мы выводим массив со студентами 
* на страницу и генерируем события в зависимости от происходящего
*/
function buildStudentsList(students, block) {
	var _items = students;
	renderTableOnPage(_items, block);

	var _input = document.querySelectorAll('.test');
	var btn = document.querySelectorAll('.btn');
	var ptn = document.querySelectorAll('.points');

	btn.forEach((item, i)=>{
		item.addEventListener('click',()=>{
			_items[i].addPoints(_input[i].value);
			ptn[i].innerHTML = _items[i].points;
		});
	});

	/* 
	* Сортируем студентов не выходя из главной функции.
	* 
	*/
	var btnMax = document.querySelector('.max');

	btnMax.addEventListener('click', () => {
		renderTableOnPage(sortStudents(students, compare), studentsInfoBlock);
		buildStudentsList(allStudents, studentsInfoBlock);
		studentWithHightPoints(sortStudents(students, compare));
		btnMax.innerText = 'Sort';
	});

	/* 
	* Выводим топ студентов не выходя из главной функции.
	* 
	*/
	var topStudents = document.querySelector('.top-students');
	var topInput = document.querySelector('.top-input');

	topStudents.addEventListener('click', ()=>{
		if (topInput.value != '' || topInput.value != 0) {
			renderTableOnPage(sortStudents(students, compare)
			.slice(0, topInput.value), 
			studentsInfoBlock, true);
			btnMax.innerText = 'back';
		}
	});
}


studentWithHightPoints(sortStudents(allStudents, compare));
buildStudentsList(allStudents, studentsInfoBlock);

