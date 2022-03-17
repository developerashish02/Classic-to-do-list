"use strict";

// All selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const taskCounter = document.getElementById('count');
let taskCount = 0;

// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteToDo);
todoList.addEventListener("click", checkToDo);

// list counter

function listTaskCounter() {
	taskCounter.innerText = taskCount;
}
// -----------------Add to do-------------------------//
function addTodo(event) {
	// when input field is empty 
	if (todoInput.value === '') {
		alert("The task is not should  empty");
		return;
	}

	// increase taskCount if task is added
	taskCount += 1;
	listTaskCounter();

	// prevent defualt
	event.preventDefault();
	// creating div and its class
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	// create LI
	const newToDo = document.createElement("li");
	newToDo.innerText = todoInput.value;
	newToDo.classList.add("todo-item");
	todoDiv.appendChild(newToDo);

	// Completed button (Checkmark)
	const completedButton = document.createElement("button");
	completedButton.innerHTML = ' <i class="fas fa-check"></i> ';
	completedButton.classList.add("completed-btn");
	todoDiv.appendChild(completedButton);
	console.log(completedButton);

	// deleted button
	const deletedButton = document.createElement("button");
	deletedButton.innerHTML = `<i class="fas fa-trash"></i>`;
	deletedButton.classList.add("delete-btn");
	todoDiv.appendChild(deletedButton);
	console.log(deletedButton);

	// Append to list
	todoList.appendChild(todoDiv);

	// clear to do input
	todoInput.value = "";

}

// delete todo//
function deleteToDo(event) {

	const item = event.target;
	if (item.classList[0] === "delete-btn") {
		const todo = item.parentElement;
		todo.remove();
	}

	// when task is zero we return it
	if (taskCount === 0) {
		return;
	}

	// decrease taskCount if task is deleted
	taskCount -= 1;
	listTaskCounter();
}

// checked todo task
function checkToDo(event) {

	const item = event.target;
	if (item.classList[0] === 'completed-btn') {
		const todo = item.parentElement;
		console.log(todo);
		todo.classList.toggle("completed");
	}

	// when task is zero we return it
	if (taskCount === 0) {
		return;
	}

}

