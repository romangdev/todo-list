// This module is used for the user to create projects and todos
import Todo from './todo.js'

export default class Create {
  createNewTodo = (defaultProject) => {
    let title = prompt("Name your todo task:");
    let desc = prompt("Describe your todo task:");
    let date = prompt("Enter the due date (e.g. 08/21/2022):");
    let priority = prompt("What priority is this task (low, medium, or high)?");

    let newTodo = new Todo(title, desc, date, priority);
    defaultProject.todos.push(newTodo);
  }
}