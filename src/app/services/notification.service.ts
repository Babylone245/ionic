import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private alertController: AlertController, private datePipe: DatePipe) { }

  async scheduleNotification(task: Task) {
    const endDate = new Date(task.endDate);
    const notificationTime =  new Date(endDate.getTime() - 24 * 60 * 60 * 1000);;
    const permission = await LocalNotifications.checkPermissions();
    if (permission.display  === 'granted') {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Rappel de tâche',
            body: `Votre tâche "${task.title}" se termine dans 24 heures.`,
            id: 1,
            schedule: { at: notificationTime },
            sound: 'default',
          },
        ],
      });
      const alert = await this.alertController.create({
        header: 'Notification',
        message: 'Notification programmée pour ' + this.datePipe.transform(notificationTime, 'dd/MM/yyyy'),
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Permission',
        message: 'Permission pour les notifications locales refusée',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

    // Vérifie les permissions pour les notifications locales et demande si nécessaire
    async checkAndRequestPermissions() {
      try {
        const permission = await LocalNotifications.requestPermissions();
        if (permission.display === 'granted') {
          console.log('Permission pour les notifications locales accordée');
        } else {
          console.log('Permission pour les notifications locales refusée');
        }
      } catch (error) {
        console.error('Erreur lors de la demande de permissions :', error);
      }
    }
}
