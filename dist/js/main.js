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
			// 13 is the Enter Key
			if (event.keyCode === 13) {
				// console.log(this.input.value);
				_this.$input.value = "";
				_this.items.push(_this.$input.value);
				console.log(_this.items);
				_this.updateView(_this.$todoUL);
			}
		});
	}

	_createClass(TodoList, [{
		key: 'updateView',
		value: function updateView(todoUL) {
			for (var i = 0; i < this.items.length; i++) {
				// this.items.push(this.items[i]);
				this.$todoLI = document.createElement('li');
				this.$todoButton = document.createElement('button');
				this.$todoP = document.createElement('p');

				todoUL.appendChild(this.$todoLI);
				this.$todoLI.appendChild(this.$todoButton);
				this.$todoLI.appendChild(this.$todoP);

				this.$todoP.innerHTML = this.$input;
				this.$todoButton.innerHTML = "done";
			}
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
		_classCallCheck(this, TodoItem);

		this.$text = text;
		this.done = false;

		// this.$todoLI = document.createElement('li');
		// this.$todoButton = document.createElement('button');
		// this.$todoP = document.createElement('p');

		// $todoUL.appendChild(this.$todoLI);
		// this.$todoLI.appendChild(this.$todoButton);
		// this.$todoLI.appendChild(this.$todoP);

		// this.$todoP.innerHTML = this.$text;
		// this.$todoButton.innerHTML = "done";

		// this.$todoButton.addEventListener(`click`, () => {
		// 	this.markDone();
		// })
	}

	_createClass(TodoItem, [{
		key: 'markDone',
		value: function markDone() {
			this.done = !this.done;
			this.updateViews();
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
var todoItem1 = new TodoItem('Milk');
var todoItem2 = new TodoItem('Eggs');
var todoItem3 = new TodoItem('Diapers');
//# sourceMappingURL=main.js.map
