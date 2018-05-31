'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
var TodoList = function TodoList() {
	_classCallCheck(this, TodoList);
};

var $todoUL = document.querySelector('.todo ul');

/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */

var TodoItem = function TodoItem(text) {
	_classCallCheck(this, TodoItem);

	this.$text = text;
	this.done = false;

	// this.$text = document.querySelector(text);
	// if (!this.$text) {
	// 	console.warn(`Couldn't find an element with text`, text);
	// 	return false;
	// }

	// this.$todoUL = this.$text.parentElement.querySelector('.updateView');
	// this.$todoUL = this.$text.querySelector('ul');

	//make an element to show errors in
	if (!this.$todoUL) {
		this.$todoUL = document.createElement('ul');
		this.$todoUL.classList.add('updateView');
		// this.$text.parentElement.appendChild(this.$todoUL);
	}

	this.$todoLI = document.createElement('li');
	$todoUL.appendChild(this.$todoLI);

	this.$todoButton = document.createElement('button');
	$todoUL.appendChild(this.$todoButton);

	// this.$field.addEventListener(`keyup`, this.validate.bind(this))
	// this.$field.addEventListener(`blur`, this.validate.bind(this))

	// if (this.$todoUL.className === updateView){
	// 	this.$todoLI.classList.add('done')
	// 	} else {}
};

var todoList = new TodoList();
var todoItem1 = new TodoItem('Milk');
var todoItem2 = new TodoItem('Eggs');
var todoItem3 = new TodoItem('Diapers');
//# sourceMappingURL=main.js.map
