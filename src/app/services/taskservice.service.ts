import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { AlertController } from '@ionic/angular';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksCollection = collection(this.firestore, 'tasks');

  constructor(private firestore: Firestore, private alertController: AlertController) {}

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  // Methode pour ajouter une task 
  async addTask(task: Task): Promise<void> {
    try {
      await addDoc(this.tasksCollection, task);
    } catch (error) {
      this.showError(error);
    }
  }

  // Methode pour update une task (progression, statut)
  async updateTask(task: Task): Promise<void> {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    try {
      await updateDoc(taskDocRef, { ...task });
    } catch (error) {
      this.showError(error);
    }
  }

  // Methode pour delete une task par rapport à son ID --> String parce que sur firebase c'est en string
  async deleteTask(id: string): Promise<void> {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    try {
      await deleteDoc(taskDocRef);
    } catch (error) {
      this.showError(error);
    }
  }

  // Methode pour show une erreur si il y a un problème avec l'API 
  private async showError(error: any) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: error.message || 'Une erreur est survenue',
      buttons: ['OK']
    });

    await alert.present();
  }
}