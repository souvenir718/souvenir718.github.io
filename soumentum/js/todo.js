const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'TODOS';

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function loadTodo() {
    const strTodo = localStorage.getItem(TODOS_LS);

    if (strTodo !== null) {
        const parsedTodos = JSON.parse(strTodo);
        parsedTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function addTodo(event) {
    event.preventDefault();
    const todoText = toDoInput.value;
    paintTodo(todoText);
    toDoInput.value = '';
}

function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);
    const cleanList = todos.filter(function (todo) {
        return todo.id !== li.id;
    });
    todos = cleanList;
    saveTodo();
}

function paintTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const newId = Math.random().toString(36).slice(2);
    const delBtn = document.createElement('button');

    delBtn.innerHTML = '❌';
    span.innerHTML = `${text}  `;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    li.classList.add('todo');
    delBtn.classList.add('delBtn');
    delBtn.addEventListener('click', deleteTodo);

    const todoObj = {
        id: newId,
        text: text,
    };
    toDoList.appendChild(li);
    todos.push(todoObj);

    saveTodo();
}

function init() {
    loadTodo();
}

toDoForm.addEventListener('submit', addTodo);
init();
