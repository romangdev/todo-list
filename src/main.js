import Todo from './todo.js'
import Project from './project.js'
import Create from './create.js'
import displayController from './display_con.js'

let displayCon = new displayController;
let create = new Create;
let projects = [];

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
projects.push(defaultProject);

let mainDiv = document.querySelector('.main');
let title = document.createElement('h1');
title.textContent = defaultProject.name;
mainDiv.appendChild(title);

let todoDiv = null;

defaultProject.todos.forEach((todo) => {
  displayCon.combineTodoProps(todo.title, todo.description, todo.dueDate, 
                              todo.priority, todoDiv, mainDiv);
});

// If the 'Add a Todo' button is clicked, create new todo based on user response
// and then append it onto appropriate project displays
document.addEventListener('click', (e) => {
  if (e.target.className === "btn-add-todo") {
    create.createNewTodo(defaultProject, projects);
    displayCon.removeAllChildNodes(mainDiv);

    defaultProject.todos.forEach((todo) => {
      displayCon.combineTodoProps(todo.title, todo.description, todo.dueDate, 
                                  todo.priority, todoDiv, mainDiv);
    });
  }
});

// If 'Create a Project' button is clicked, get project name from user, create 
// new project object, and append it onto projects display
document.addEventListener('click', (e) => {
  if (e.target.className === "btn-create-project") {
    let newProjectName = prompt("What do you want to name your project?");
    let newProject = new Project(newProjectName, []);
    projects.push(newProject);
    console.log(projects);
  }
});
