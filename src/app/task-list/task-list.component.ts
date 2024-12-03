import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() removeTask = new EventEmitter<number>();

  constructor(private router : Router) { }

  ngOnInit() {}
  
  onRemoveTask(index: number) {
    this.removeTask.emit(index); 
  }

  viewDetail(task : Task){
    this.router.navigate(['/task-detail'], { state: { task } });
  }

}
