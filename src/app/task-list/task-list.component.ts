import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TaskService } from '../service/taskservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() removeTask = new EventEmitter<string>();

  constructor(private router: Router) { }

  onRemoveTask(id?: string) {
    this.removeTask.emit(id);
  }

  viewDetail(task: Task) {
    this.router.navigate(['/task-detail'], { state: { task } });
  }
}
