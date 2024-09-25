class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.model.bindTasksChanged(this.onTasksChanged);
      this.view.bindAddTask(this.handleAddTask);
      this.view.bindDeleteTask(this.handleDeleteTask);
      this.view.bindToggleTask(this.handleToggleTask);
  
      this.onTasksChanged(this.model.tasks);
    }
  
    onTasksChanged = tasks => {
      this.view.showTasks(tasks);
    }
  
    handleAddTask = taskText => {
      const task = {
        text: taskText,
        completed: false,
      };
      this.model.addTask(task);
    }
  
    handleDeleteTask = task => {
      this.model.deleteTask(task);
    }
  
    handleToggleTask = task => {
      this.model.toggleTask(task);
    }
  }
  