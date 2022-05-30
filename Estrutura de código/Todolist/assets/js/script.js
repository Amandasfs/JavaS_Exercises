const form = document.getElementById('formItem');
const listItem = document.getElementById('itens');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('inputItem');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const itemContainer = document.createElement('div');
	const novoItem = document.createElement('input');
	const itemLabel = document.createElement('label');
	const itemDescriptionNode = document.createTextNode(description);

	novoItem.setAttribute('type', 'checkbox');
	novoItem.setAttribute('name', description);
	novoItem.setAttribute('id', description);

	itemLabel.setAttribute('for', description);
	itemLabel.appendChild(itemDescriptionNode);

	itemContainer.classList.add('task-item');
	itemContainer.appendChild(novoItem);
	itemContainer.appendChild(itemLabel);

	listItem.appendChild(itemContainer);
}