AllEvents();
function AllEvents() {
	document.querySelector('form').addEventListener('submit', submit);
	document.getElementById('clear').addEventListener('click', clearList);
	document.querySelector('ul').addEventListener('click', deleteIt);
	//document.getElementById('edit').addEventListener('click', edit);
}

function addTask(task) {
	var ul = document.querySelector('ul');
	var li = document.createElement('li');
	li.innerHTML = `<input type="checkbox" />${task} <i class='fas fa-pencil-alt edit' style='font-size:24px'></i><i class='fas fa-trash delete' style='font-size:24px'></i>`;
	ul.appendChild(li);
	document.querySelector('.tasklist').style.display = 'block';
}

function submit(e) {
	e.preventDefault();
	var input = document.querySelector('input');
	if (input.value != '') addTask(input.value);
	input.value = '';
}

function clearList(e) {
	var ul = (document.querySelector('ul').innerHTML = '');
}
function deleteIt(e) {
	if (e.target.className == 'fas fa-trash delete') deleteTask(e);
	else if (e.target.className == 'fas fa-pencil-alt edit') {
		document.querySelector('input').value = e.target.parentNode.textContent;
		deleteTask(e);
	}
}
function deleteTask(e) {
	var remove = e.target.parentNode;
	var parentNode = remove.parentNode;
	parentNode.removeChild(remove);
}
