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

		this.$text = text;
		this.done = false;
		
		this.$todoLI = document.createElement('li');
		this.$todoButton = document.createElement('button');
		this.$todoP = document.createElement('p');

		$todoUL.appendChild(this.$todoLI);
		this.$todoLI.appendChild(this.$todoButton);
		this.$todoLI.appendChild(this.$todoP);
		
		this.$todoP.innerHTML = this.$text;
		this.$todoButton.innerHTML = "done";

		this.$todoButton.addEventListener(`click`, () => {
			this.markDone();
		})
	}

	markDone() {
		this.done = !this.done;
		this.updateViews()
	}

	updateViews () {
		//access this.done boolean with the li
		if (this.done) {
			this.$todoLI.classList.add('done');
		} else {
			this.$todoLI.classList.remove('done');
		}

	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);