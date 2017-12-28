var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listItems = document.getElementsByTagName('li');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = ' item ' + listItems.length;
	list.appendChild(element);
});