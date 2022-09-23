import Todo from './todo.js'
import Project from './project.js'
import Create from './create.js'
import displayController from './display_con.js'

let displayCon = new displayController;

let todo1 = new Todo(
  'Fix sink',
  'Fix the broken valve under the sink',
  '07/12/2022',
  'Medium'
);

let todo2 = new Todo(
  'Take out trash',
  'The trash needs to be taken out to the curb',
  '07/19/2022',
  'Low'
);

let todo3 = new Todo(
  'Replace toilet paper',
  'The toilet paper is almost gone. Incoming crisis!',
  '07/14/2022',
  'High'
);

let defaultProject = new Project('All Todos', [todo1, todo2, todo3]);

let mainDiv = document.querySelector('.main');
let title = document.createElement('h1');
title.textContent = defaultProject.name;
mainDiv.appendChild(title);

let todoDiv = null;

defaultProject.todos.forEach((todo) => {
  let count = 0;
  todoDiv = displayCon.addTodo(mainDiv);
  count = displayCon.addTodoProp(todo.title, todoDiv, count);
  count = displayCon.addTodoProp(todo.description, todoDiv, count);
  count = displayCon.addTodoProp(todo.dueDate, todoDiv, count);
  displayCon.addTodoProp(todo.priority, todoDiv, count);
  count = 0;
});

document.addEventListener('click', (e) => {
  if (e.target.className === "btn-add-todo") {
    let title = prompt("Name your todo task:");
    let desc = prompt("Describe your todo task:");
    let date = prompt("Enter the due date (e.g. 08/21/2022):");
    let priority = prompt("What priority is this task (low, medium, or high)?");

    let newTodo = new Todo(title, desc, date, priority);
    defaultProject.todos.push(newTodo);

    defaultProject.todos.forEach((todo) => {
      let count = 0;
      todoDiv = displayCon.addTodo(mainDiv);
      count = displayCon.addTodoProp(todo.title, todoDiv, count);
      count = displayCon.addTodoProp(todo.description, todoDiv, count);
      count = displayCon.addTodoProp(todo.dueDate, todoDiv, count);
      displayCon.addTodoProp(todo.priority, todoDiv, count);
      count = 0;
    });
  }
});
