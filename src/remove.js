export default class Remove {
  removeBtnFromProject = (projects, projectName, todoName) => {
    projects.forEach((project) => {
      if (project.name === projectName) {
        for (let i = 0; i < project.todos.length; i++) {
          if (project.todos[i].title === todoName) {
            project.todos.splice(i, 1);
          }
        }
      }
    });
  }
}