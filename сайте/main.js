// var a, b, c, k, elem;
// b = 0;

// var string = "Add";
// var str = "Adk";

// function Add() {

// 	a = document.getElementById('Add').value;
// 	document.getElementById('Add').value = "";
// 	b = String(b);
// 	document.getElementById('Completed').innerHTML += "<div style=" + "display:none;" + " id=" + "Adk" + b + ">" + "<span >" + a + "</span>" + "<button onclick=" + "elem=document.getElementById(str+" + b + ");elem.parentNode.removeChild(elem);k=parseInt(k);" + ">Delete</button></div>";
// 	document.getElementById('Todo').innerHTML += "<div id=" + "Add" + b + ">" + "<span><br>" + a + "</span>" + " <button onclick=" + "document.getElementById(\"" + str + b + "\").style.display=\"block\";elem=document.getElementById(string+" + b + ");elem.parentNode.removeChild(elem);b=parseInt(b);" + " >Delete</button></div>";

// 	b++;

// }

// function Todo() {

// 	elem = document.getElementById(string + b);
// 	elem.parentNode.removeChild(elem);

// 	b = parseInt(b);

// }



var task = document.getElementById('Add'),
	activeTaskList = document.getElementById('Todo'),
	completedTask = document.getElementById('Completed'),
	clearButton = document.getElementById('clear');

function addToCurrentList() {
	var _messageValue = task.value,
		_tasksListItem = document.createElement('li');

	addTask(_messageValue, _tasksListItem, activeTaskList);
	deleteTask(activeTaskList, _tasksListItem);
}

function deleteTask(block, item) {
	var _button = item.querySelector('button');

	_button.addEventListener('click', function () {
		block.removeChild(item);
		addToCommplitedList(_button, item, completedTask)
	});

}

function addTask(message, item, list) {
	var _removeButton = document.createElement('button');

	if (message != '') {
		createTask(_removeButton, item, list, message);
	} else {
		var _task = prompt('write your task');
		createTask(_removeButton, item, list, _task);
	}
}

function createTask(button, item, list, message) {
	button.innerText = ' delete';
	item.innerHTML = message;
	item.appendChild(button);
	list.appendChild(item);
}

function addToCommplitedList(target, message, block) {
	message.removeChild(target);
	block.appendChild(message);
}

function clearComplitedTasks(target, list) {
	target.addEventListener('click', function () {
		list.innerHTML = '';
	});
}

clearComplitedTasks(clearButton, completedTask);