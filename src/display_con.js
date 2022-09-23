export default class displayController {
  addTodo = (mainDiv) => {
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

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
}