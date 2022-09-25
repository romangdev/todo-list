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

    this.addTodoDeleteBtn(todoDiv);
  }

  // Add a delete button to a todo item
  addTodoDeleteBtn = (todoDiv) => {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-todo');
    todoDiv.appendChild(deleteBtn);
  }

  removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  // display all existing projects 
  displayProjects = (projects, mainDiv) => {
    projects.forEach((project) => {
      let newProjectPara = document.createElement('button');
      newProjectPara.classList.add('project-btn')
      mainDiv.appendChild(newProjectPara);
      newProjectPara.innerText = `${project.name}`;
    });
  }

  // update the main h1 tag project title over project list user is viewing
  updateTitle = (title, project, mainDiv) => {
    title.textContent = project.name;
    mainDiv.appendChild(title);
  }
}