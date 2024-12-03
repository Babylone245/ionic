import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from '../service/taskservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Task[] = [];
  selectedTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

  addTask(title: string) {
    if (title.trim()) {
      const newTask: Task = {
        title: title,
        completed: false,
        status: 0,
      };

      this.taskService.addTask(newTask).then(() => {
        // Recharge les tâches après ajout
        this.loadTasks();
      });
    }
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).then(() => {
      // Mise à jour locale des tâches après suppression
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}