/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
class TodoList {
	constructor() {
		//this big thing is managing the little items
		//the biggest thing is taking the input field and when the person types in it becomes an LI item. So the new ones down at the bottom is going to go away
		//when we make them we'll put them in an array and update the numb ers at the bottom
		//it will have it's own update views method that access the item and done count down at the bottom and update them to see it.
	
				
		this.items = []
		this.$input = document.querySelector('input[name="new-item"]')

		this.$input.addEventListener(`keypress`, (event) => {
			// 13 is the Enter Key
			if (event.keyCode === 13){
				// console.log(this.input.value);
				this.items.push(this.$input.value);
				this.$input.value = ""
				console.log(this.items)
			}
		});
	}

		
	// }
	// updateView() {
	// 	for (var i = 0; i < items.length; i++) {
	// 		// items.push(items[i]);
	// 		this.$todoLI = document.createElement('li');
	// 		this.$todoButton = document.createElement('button');
	// 		this.$todoP = document.createElement('p');

	// 		$todoUL.appendChild(this.$todoLI);
	// 		this.$todoLI.appendChild(this.$todoButton);
	// 		this.$todoLI.appendChild(this.$todoP);
			
	// 		this.$todoP.innerHTML = this.$text;
	// 		this.$todoButton.innerHTML = "done";

	// 	}
	// 	console.log(items)
	// }


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