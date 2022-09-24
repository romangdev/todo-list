// This module is used for the user to create projects and todos
import Todo from './todo.js'

export default class Create {
  createNewTodo = (defaultProject, projects) => {
    let title = prompt("Name your todo task:");
    let desc = prompt("Describe your todo task:");
    let date = prompt("Enter the due date (e.g. 08/21/2022):");
    let priority = prompt("What priority is this task (low, medium, or high)?");
    let project = prompt("Do want want to add this task to a specific project? (Type project name if yes, or just hit 'enter' if no)");

    if (project === null || project === "no" || project === "n") {
      project = "None"
    }
    
    let newTodo = new Todo(title, desc, date, priority, project);
    defaultProject.todos.push(newTodo);

    projects.forEach((projectArr) => {
      if (projectArr.name === project) {
        projectArr.todos.push(newTodo)
      } 
    });
  }
}