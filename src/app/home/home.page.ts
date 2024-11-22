import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  tasks: Task[] = [];
  selectedTask: string = '';

  addTask(title: string) {
    if (title.trim()) {
    const newTask: Task = {
      title: title,
      completed: false,
    };
    this.tasks.push(newTask);  
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); 
  }

  selectTask(task: string) {
    this.selectedTask = task;
  }
}
