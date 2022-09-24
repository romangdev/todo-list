export default class displayController {
  displayTodo = (mainDiv) => {
    let todoDiv = document.createElement('div');
    mainDiv.appendChild(todoDiv);
    return todoDiv;
  };

  addTodoProp = (todoPropCall, todoDiv, count) => {
    let todoProp = document.createElement('p');
    if (count === 0) {
      todoProp.innerText = `TITLE:\n${todoPropCall}`;
    } else if (count === 1) {
      todoProp.innerText = `DESC:\n${todoPropCall}`;
    } else if (count === 2) {
      todoProp.innerText = `DUE DATE:\n${todoPropCall}`;
    } else {
      todoProp.innerText = `PRIORITY:\n${todoPropCall}`;
    }
    todoDiv.appendChild(todoProp);
    return ++count;
  };

  combineTodoProps = (title, description, dueDate, priority, todoDiv, mainDiv) => {
    let count = 0;
    todoDiv = this.displayTodo(mainDiv);
    count = this.addTodoProp(title, todoDiv, count);
    count = this.addTodoProp(description, todoDiv, count);
    count = this.addTodoProp(dueDate, todoDiv, count);
    this.addTodoProp(priority, todoDiv, count);
    count = 0;
  }

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
}