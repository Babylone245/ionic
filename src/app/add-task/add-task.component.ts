import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent  implements OnInit {
  @Output() addTask = new EventEmitter<string>();
  constructor() { }
  title: string = '';
  ngOnInit() {
    this.title = 'Test';
  }



  add() {
    if (this.title.trim()) {
      this.addTask.emit(this.title);
      this.title = ''; // Réinitialiser le champ
    }
  }
}
