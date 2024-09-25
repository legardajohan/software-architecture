class View {
    constructor() {

      this.app = document.getElementById('app');
      this.form = document.createElement('form');
      this.input = document.createElement('input');
      this.input.type = 'text';
      this.input.placeholder = 'Agregar una tarea...';
      this.submitButton = document.createElement('button');
      this.submitButton.textContent = 'Agregar';
  
      this.form.append(this.input, this.submitButton);
      this.app.append(this.form);
  
      this.taskList = document.createElement('ul');
      this.app.append(this.taskList);
    }
  
    get _taskText() {
      return this.input.value;
    }
  
    resetInput() {
      this.input.value = '';
    }
  
    showTasks(tasks) {

      this.taskList.innerHTML = '';
  
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
          li.style.textDecoration = 'line-through';
        }
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Completado';
  
        li.append(toggleButton, deleteButton);
        this.taskList.append(li);
  
        toggleButton.addEventListener('click', () => {
          this.onToggleTask(task);
        });
  
        deleteButton.addEventListener('click', () => {
          this.onDeleteTask(task);
        });
      });
    }
  
    bindAddTask(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
  
        if (this._taskText) {
          handler(this._taskText);
          this.resetInput();
        }
      });
    }
  
    bindDeleteTask(handler) {
      this.onDeleteTask = handler;
    }
  
    bindToggleTask(handler) {
      this.onToggleTask = handler;
    }
  }
  