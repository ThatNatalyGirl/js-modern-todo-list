'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */

var TodoList = function () {
	function TodoList() {
		var _this = this;

		_classCallCheck(this, TodoList);

		//this big thing is managing the little items
		//the biggest thing is taking the input field and when the person types in it becomes an LI item. So the new ones down at the bottom is going to go away
		//when we make them we'll put them in an array and update the numb ers at the bottom
		//it will have it's own update views method that access the item and done count down at the bottom and update them to see it.

		this.$todoUL = document.querySelector('.todo ul');
		this.items = [];
		this.$input = document.querySelector('input[name="new-item"]');

		this.$input.addEventListener('keypress', function (event) {
			if (event.keyCode === 13) {
				var newItem = new TodoItem(_this.$input.value);
				_this.$input.value = '';
				_this.items.push(newItem);
				// console.log(this.items)
				_this.updateView();
			}
		});
		// listen for an event from below about a change, and call the custom event
		window.addEventListener('gotMarkedDone', function (event) {
			_this.updateView();
		});
	}

	//managing where all the to do list items go
	//going to manage the counters


	_createClass(TodoList, [{
		key: 'updateView',
		value: function updateView() {
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
			console.log(this.allDoneItems.length);

			this.$doneItems.innerHTML = this.allDoneItems.length;
			// for (var i = 0; i < this.allDoneItems.length; i++) {
			// 	this.document.querySelector("button").addEventListener(`click`, () => {
			// this.$doneItems.innerHTML = this.allDoneItems.length
			// }
			// } 
		}
	}]);

	return TodoList;
}();

/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */


var TodoItem = function () {
	function TodoItem(text) {
		var _this2 = this;

		_classCallCheck(this, TodoItem);

		this.$text = text;
		this.done = false;

		this.$todoLI = document.createElement('li');
		this.$todoButton = document.createElement('button');
		this.$todoP = document.createElement('p');

		this.$todoLI.appendChild(this.$todoButton);
		this.$todoLI.appendChild(this.$todoP);

		this.$todoP.innerHTML = this.$text;
		this.$todoButton.innerHTML = "done";

		this.$todoButton.addEventListener('click', function () {
			_this2.markDone();
		});
	}

	_createClass(TodoItem, [{
		key: 'markDone',
		value: function markDone() {
			this.done = !this.done;
			this.updateViews();

			//https://javascript.info/dispatch-events
			var event = new Event('gotMarkedDone');
			window.dispatchEvent(event);
			console.log('test2');

			//any time something changes down here
			//yell to the world "something has changed"
			//create a custom event
		}
	}, {
		key: 'updateViews',
		value: function updateViews() {
			//access this.done boolean with the li
			if (this.done) {
				this.$todoLI.classList.add('done');
			} else {
				this.$todoLI.classList.remove('done');
			}
		}
	}]);

	return TodoItem;
}();

var todoList = new TodoList();
// let todoItem1 = new TodoItem(`Milk`);
// let todoItem2 = new TodoItem(`Eggs`);
// let todoItem3 = new TodoItem(`Diapers`);
//# sourceMappingURL=main.js.map
