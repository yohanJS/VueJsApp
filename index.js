const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Tasks for today', 
        todoList : [],
        newTask: ''
      };
    },
    methods: {
      addTask() {
        this.todoList.push(this.newTask);
        this.newTask = '';
      }
    }
  }).mount('#app')