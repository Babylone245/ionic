import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<{ title: string, endDate: string }>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder,private alertController: AlertController) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  async add() {
    const title = this.taskForm.get('title')?.value;
    const endDate = this.taskForm.get('endDate')?.value;
    if (title != null && title.trim() && endDate) {
      this.addTask.emit({ title, endDate });
      this.taskForm.reset();
    }
    else{
      const alert = await this.alertController.create({
        header: 'Information manquante',
        message: "La date ou le titre de la tâche n'est pas renseigné",
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}