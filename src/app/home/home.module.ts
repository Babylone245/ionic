import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TaskDetailComponent, TaskListComponent, AddTaskComponent],
  bootstrap: [HomePage,AddTaskComponent,TaskDetailComponent,TaskListComponent],
})
export class HomePageModule {}
