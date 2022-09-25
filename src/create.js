// This module is used for the user to create projects and todos
import Todo from './todo.js'

export default class Create {
  // Create new todo object and associate it with project if appropriate
  createNewTodo = (defaultProject, projects) => {
    let title = prompt("Name your todo task:");
    let desc = prompt("Describe your todo task:");
    let date = prompt("Enter the due date (e.g. 08/21/2022):");
    let priority = prompt("What priority is this task (low, medium, or high)?");
    let project = prompt("Do want want to add this task to a specific project? (Type project name if yes, or just hit 'enter' if no)");

    let projectExists = this.checkIfProjectExists(projects, project);
    if (projectExists === false) {
      project = "None";
    }

    let newTodo = new Todo(title, desc, date, priority, project);
    defaultProject.todos.push(newTodo);

    if (projectExists) {
      this.pushNewTodoOnProject(projects, newTodo, project);
    }
  }

  // Check and see if user typed project exists
  checkIfProjectExists = (projects, project) => {
    let projectExists = false;
    projects.forEach((projectArr) => {
      if (projectArr.name === project) {
        projectExists = true;
      }
    });
    return projectExists;
  };

  // Push the newly created todo object into existing, specified project
  pushNewTodoOnProject = (projects, newTodo, project) => {
    projects.forEach((projectArr) => {
      if (projectArr.name === project) {
        projectArr.todos.push(newTodo)
      } 
    });
  };

  addDataIdToBtns = () => {
    let deleteBtns = document.querySelectorAll('.delete-todo');
    let n = 0;
    deleteBtns.forEach((btn) => {
      btn.dataset.id = n;
      ++n;
    });
  }
}