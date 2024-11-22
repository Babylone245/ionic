import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {
  @Input() tasks: string[] = [];
  @Output() removeTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}
  
  onRemoveTask(index: number) {
    this.removeTask.emit(index); 
  }


}
