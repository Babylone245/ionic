import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent  implements OnInit {
  @Output() addTask = new EventEmitter<string>();
  constructor() { }
  task: string = '';
  ngOnInit() {
    this.task = 'Test';
  }



  add() {
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = ''; // Réinitialiser le champ
    }
  }
}
