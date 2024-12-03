import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent{
  task!: Task; 

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['task']) {
      this.task = navigation.extras.state['task']; 
    }
  }

    // Met à jour la progression dans le service
    updateProgress() {
      console.log('Nouvelle progression de la tâche :', this.task.status);
    }

  getStatusText() {
    switch (this.task.status) {
      case 0:
        return 'À faire';
      case 100 :
        return 'Complétée';
      default:
        return 'En cours';
    }
  }

  
}
