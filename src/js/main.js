/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
class TodoList {
	constructor() {
		
	}
}


let $todoUL = document.querySelector(`.todo ul`)


/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */
class TodoItem {

	constructor(text) {

		this.$text = document.querySelector(text);
		if (!this.$text) {
			console.warn(`Couldn't find an element with text`, text);
			return false;
		}
		
		this.$todoUL = this.$text.parentElement.querySelector('.updateView');

		//make an element to show errors in
		if(!this.$todoUL) {
		this.$todoUL = document.createElement('ul');
		this.$todoUL.classList.add('updateView');
		this.$text.parentElement.appendChild(this.$todoUL);
		}
		this.$todoLI = document.createElement('li');
		$todoUL.appendChild(this.li);

		this.$field.addEventListener(`keyup`, this.validate.bind(this))
		this.$field.addEventListener(`blur`, this.validate.bind(this))

		//if (this.$todoUL.className === updateView){
			//this.$todoLI.classList.add('done')
			//} else {}
	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);