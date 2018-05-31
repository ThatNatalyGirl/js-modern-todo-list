'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var TodoItem = function () {
	function TodoItem(text) {
		var _this = this;

		_classCallCheck(this, TodoItem);

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

		this.$todoButton.addEventListener('click', function () {
			_this.markDone();
		});
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
