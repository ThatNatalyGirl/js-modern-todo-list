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
	
		this.$todoUL = document.querySelector(`.todo ul`)
		this.items = []
		this.$input = document.querySelector('input[name="new-item"]')

		this.$input.addEventListener(`keypress`, (event) => {
			if (event.keyCode === 13){
				var newItem = new TodoItem(this.$input.value)
				this.$input.value = '';
				this.items.push(newItem);
				// console.log(this.items)
				this.updateView()
			}
		});
		// listen for an event from below about a change, and call the custom event
	}

//managing where all the to do list items go
//going to manage the counters
	updateView() {
		for (var i = 0; i < this.items.length; i++) {
			this.$todoUL.appendChild(this.items[i].$todoLI);
			// console.log( this.items[i].$todoLI )
		}
		console.log(this.items.length);
		//update total items
		this.$totalItems = document.querySelector(".total");
		this.$totalItems.innerHTML = this.items.length;

		//update done items
		this.$doneItems = document.querySelector("span.done");
		this.allDoneItems = document.querySelectorAll("li.done");
		console.log(this.allDoneItems.length)
		

		for (var i = 0; i < this.allDoneItems.length; i++) {
			this.document.querySelector("button").addEventListener(`keypress`, () => {
				this.$doneItems.innerHTML = this.allDoneItems.length
			}
		}
	}
}

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

		//any time something changes down here
		//yell to the world "something has changed"
		//create a custom event
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
// let todoItem1 = new TodoItem(`Milk`);
// let todoItem2 = new TodoItem(`Eggs`);
// let todoItem3 = new TodoItem(`Diapers`);