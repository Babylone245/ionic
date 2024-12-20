import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../../src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, TaskDetailComponent, TaskListComponent, AddTaskComponent],
    providers: [
      provideFirebaseApp(() => initializeApp(environment.firebase)), 
      provideFirestore(() => getFirestore()),
      DatePipe
    ],
  bootstrap: [HomePage,AddTaskComponent,TaskDetailComponent,TaskListComponent],
})
export class HomePageModule {}
