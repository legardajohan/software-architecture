class Model {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.onTasksChanged(this.tasks);
    }
  
    deleteTask(taskToDelete) {
      this.tasks = this.tasks.filter(task => task !== taskToDelete);
      this.onTasksChanged(this.tasks);
    }
  
    toggleTask(taskToToggle) {
      this.tasks = this.tasks.map(task =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      );
      this.onTasksChanged(this.tasks);
    }
  
    bindTasksChanged(callback) {
      this.onTasksChanged = callback;
    }
  }
  
  