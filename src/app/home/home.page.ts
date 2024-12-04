import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from '../services/taskservice.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Task[] = [];
  selectedTask: string = '';

  constructor(private taskService: TaskService, private notificationService : NotificationService) { }

  ngOnInit() {
    this.notificationService.checkAndRequestPermissions();
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(taskData: { title: string, endDate: string }) {
    if (taskData.title.trim() && taskData.endDate) {
      const newTask: Task = {
        title: taskData.title,
        completed: false,
        status: 0,
        order: this.tasks.length,
        endDate: taskData.endDate,
      };

      this.taskService.addTask(newTask).then(() => {
        this.loadTasks();
        this.notificationService.scheduleNotification(newTask);
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