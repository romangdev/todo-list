export default class displayController {
  // Display todo item to user
  displayTodo = (mainDiv) => {
    let todoDiv = document.createElement('div');
    mainDiv.appendChild(todoDiv);
    return todoDiv;
  };

  // Add individual todo properties to todo item display
  addTodoProp = (todoPropCall, todoDiv, count) => {
    let todoProp = document.createElement('p');
    if (count === 0) {
      todoProp.innerText = `TITLE:\n${todoPropCall}`;
    } else if (count === 1) {
      todoProp.innerText = `DESC:\n${todoPropCall}`;
    } else if (count === 2) {
      todoProp.innerText = `PROJECT:\n${todoPropCall}`;
    } else if (count === 3) {
      todoProp.innerText = `DUE DATE:\n${todoPropCall}`;
    } else {
      todoProp.innerText = `PRIORITY:\n${todoPropCall}`;
    }
    todoDiv.appendChild(todoProp);
    return ++count;
  };

  // Combine all todo properties into one todo display object
  combineTodoProps = (title, description, project, dueDate, priority, todoDiv, mainDiv) => {
    let count = 0;
    todoDiv = this.displayTodo(mainDiv);
    count = this.addTodoProp(title, todoDiv, count);
    count = this.addTodoProp(description, todoDiv, count);
    count = this.addTodoProp(project, todoDiv, count);
    count = this.addTodoProp(dueDate, todoDiv, count);
    this.addTodoProp(priority, todoDiv, count);
    count = 0;
  }

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  displayProjects = (projects, mainDiv) => {
    projects.forEach((project) => {
      let newProjectPara = document.createElement('button');
      mainDiv.appendChild(newProjectPara);
      newProjectPara.innerText = `${project.name}`;
    });
  }

  updateTitle = (title, project, mainDiv) => {
    title.textContent = project.name;
    mainDiv.appendChild(title);
  }
}