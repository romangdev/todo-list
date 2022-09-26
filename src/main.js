import Todo from './todo.js'
import Project from './project.js'
import Create from './create.js'
import displayController from './display_con.js'
import Remove from './remove.js'

let displayCon = new displayController;
let create = new Create;
let remove = new Remove;
let projects = [];

let todo1 = new Todo(
  'Fix sink',
  'Fix the broken valve under the sink',
  '07/12/2022',
  'Medium',
  'None'
);

let todo2 = new Todo(
  'Take out trash',
  'The trash needs to be taken out to the curb',
  '07/19/2022',
  'Low',
  'None'
);

let todo3 = new Todo(
  'Replace toilet paper',
  'The toilet paper is almost gone. Incoming crisis!',
  '07/14/2022',
  'High',
  'None'
);

let defaultProject = new Project('All Todos', [todo1, todo2, todo3]);
projects.push(defaultProject);

let mainDiv = document.querySelector('.main');
let title = document.createElement('h1');
displayCon.updateTitle(title, defaultProject, mainDiv);

let todoDiv = null;

// Display all todos as default page when user first loads up site
defaultProject.todos.forEach((todo) => {
  displayCon.combineTodoProps(todo.title, todo.description, todo.project, todo.dueDate, 
                              todo.priority, todoDiv, mainDiv);

  create.addDataIdToBtns();
});

// If the 'Add a Todo' button is clicked, create new todo based on user response
// and then append it onto appropriate project displays
document.addEventListener('click', (e) => {
  if (e.target.className === "btn-add-todo") {
    create.createNewTodo(defaultProject, projects);
    displayCon.removeAllChildNodes(mainDiv);

    displayCon.updateTitle(title, defaultProject, mainDiv);

    defaultProject.todos.forEach((todo) => {
      displayCon.combineTodoProps(todo.title, todo.description, todo.project, todo.dueDate, 
                                  todo.priority, todoDiv, mainDiv);
    });
    create.addDataIdToBtns();
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

// If 'View All Projects' button is clicked, then display all user generated
// project names as buttons
document.addEventListener('click', (e) => {
  if (e.target.className === "btn-all-projects") {
    displayCon.removeAllChildNodes(mainDiv);
    displayCon.displayProjects(projects, mainDiv);
  }
});

// When a project is chosen from the 'View All Projects' list, update the project
// title and only show todo tasks for that project
mainDiv.addEventListener('click', (e) => {
  if (e.target.className === 'project-btn') {
    displayCon.removeAllChildNodes(mainDiv);
    projects.forEach((project) => {
      if (project.name === e.target.innerText) {
        displayCon.updateTitle(title, project, mainDiv);
        project.todos.forEach((todo) => {
          displayCon.combineTodoProps(todo.title, todo.description, todo.project, todo.dueDate, 
                                      todo.priority, todoDiv, mainDiv);
        });
        create.addDataIdToBtns();
      }
    });
  }
});

// Remove todo item from appropriate projects when corresponding delete button is clicked
mainDiv.addEventListener('click', (e) => {
  if (e.target.className === 'delete-todo') {

    let headerName = document.querySelector('h1');
    let currentProject = null;
    projects.forEach((project) => {
      if (project.name === headerName.innerText) {
        currentProject = project;
      }
    });

    let todoName = null;
    let projectName = null;

    let firstProject = null;

    // Go into the project array that matches the current heading the user sees
    // and delete the relevant todo item
    projects.forEach((projectArr) => {
      if (projectArr.name === currentProject.name) {
        projectName = projectArr.todos[e.target.dataset.id].project;
        todoName = projectArr.todos[e.target.dataset.id].title;
        firstProject = projectArr.name;

        projectArr.todos.splice(e.target.dataset.id, 1);
      }
    });

    // If todo task has an assigned project, delete it from that project
    // and from the 'All Todos' list
    if (projectName !== 'None') {
      if (firstProject !== 'All Todos') {
        remove.removeBtnFromProject(projects, 'All Todos', todoName);
      } else {
        remove.removeBtnFromProject(projects, projectName, todoName);
      }
    }

    displayCon.removeAllChildNodes(mainDiv);
    displayCon.updateTitle(title, currentProject, mainDiv);
    currentProject.todos.forEach((todo) => {
      displayCon.combineTodoProps(todo.title, todo.description, todo.project, todo.dueDate, 
                                  todo.priority, todoDiv, mainDiv);
    });
    create.addDataIdToBtns();
  }
});