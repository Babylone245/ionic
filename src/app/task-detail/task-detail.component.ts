import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent  implements OnInit {
  @Input() task!: Task;  
  constructor() { }

  ngOnInit() {}

  toggleCompleted() {
    this.task.completed = !this.task.completed;
  }
}
