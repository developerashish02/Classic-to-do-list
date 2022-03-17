"use strict";

// All selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listener 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteToDo);
todoList.addEventListener('click', check)

// -----------------Add to do-------------------------//  
function addTodo(event) {
    // prevent defualt 
    event.preventDefault()
    // creating div and its class 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI 
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    // Completed button (Checkmark) 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = ' <i class="fas fa-check"></i> ';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    console.log(completedButton);

    // deleted button  
    const deletedButton = document.createElement('button');
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
    console.log(item);
    if (item.classList[0] == 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}


