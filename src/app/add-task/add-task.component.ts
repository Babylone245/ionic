import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.taskForm.get('title')?.setValue('Test');
  }

  add() {
    const title = this.taskForm.get('title')?.value;
    if (title.trim()) {
      this.addTask.emit(title);
      this.taskForm.get('title')?.setValue('');
    }
  }
}