import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<{ title: string, endDate: string }>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  add() {
    const title = this.taskForm.get('title')?.value;
    const endDate = this.taskForm.get('endDate')?.value;
    if (title.trim() && endDate) {
      this.addTask.emit({ title, endDate });
      this.taskForm.reset();
    }
  }
}