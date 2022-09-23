export default class displayController {
  addTodo = (mainDiv) => {
    let todoDiv = document.createElement('div');
    mainDiv.appendChild(todoDiv);
    return todoDiv;
  };

  addTodoProp = (todoPropCall, todoDiv) => {
    let todoProp = document.createElement('p');
    todoProp.textContent = todoPropCall;
    todoDiv.appendChild(todoProp);
  };
}