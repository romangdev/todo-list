// This module is used for the user to create projects and todos
import Todo from './todo.js'

export default class Create {
  // Create new todo object and associate it with project if appropriate
  createNewTodo = (defaultProject, projects) => {
    let title = this.getTitle();
    let desc = this.getDescription();
    let date = this.getDueDate();
    let priority = this.getPriority();
    let project = this.getProject();

    let projectExists = this.checkIfProjectExists(projects, project);
    if (projectExists === false) {
      alert("That project does not currently exist. Assigning todo project to 'None.'")
      project = "None";
    }

    let newTodo = new Todo(title, desc, date, priority, project);
    defaultProject.todos.push(newTodo);

    if (projectExists) {
      this.pushNewTodoOnProject(projects, newTodo, project);
    }
  }

  getTitle = () => {
    let flag = true;
    while (flag) {
      let title = prompt("Name your todo task (40 chars or less):");
      if (title.length > 40) {
        alert("Your title is too long! Please make sure it's under 40 characters and try again.");
      } else {
        return title;
      }
    }
  }

  getDescription = () => {
    let flag = true;
    while (flag) {
      let desc = prompt("Describe your todo task (150 chars or less):");
      if (desc.length > 150) {
        alert("Your description is too long! Please make sure it's under 150 characters and try again.");
      } else {
        return desc;
      }
    }
  }

  getDueDate = () => {
    let flag = true;
    let datePattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/
    while (flag) {
      let dueDate = prompt("Enter the due date (in MM/DD/YYYY format, e.g. 08/21/2022):");
      if (!(dueDate.match(datePattern))) {
        alert("Your due date was entered incorrectly. Please ensure it's in MM/DD/YYYY format, e.g. 08/21/2022) and try again.");
      } else {
        return dueDate;
      }
    }
  }

  getPriority = () => {
    let flag = true;
    while (flag) {
      let priority = prompt("What priority is this task (low, medium, or high)?");
      priority = priority.toUpperCase();
      if (priority !== 'LOW' && priority !== 'MEDIUM' && priority !== 'HIGH') {
        alert("Your priority was typed incorrectly. Please type 'Low, 'Medium', or 'High.'");
      } else {
        return priority;
      }
    }
  }

  getProject = () => {
    let flag = true;
    while (flag) {
      let project = prompt("Do want want to add this task to a specific project? (Type project name if yes, or just hit 'enter' if no)");
      if (project.length > 40) {
        alert("Your project name is too long! Please make sure it's under 40 characters and try again.");
      } else {
        return project;
      }
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