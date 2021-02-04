import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './taskList/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
