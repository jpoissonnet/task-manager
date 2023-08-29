import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component';
import { MainTaskComponent } from './tasks/main-task/main-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ColorByStateDirective } from './color-by-state.directive';
import { DateToJMYPipe } from './date-to-jmy.pipe';
import { AddTaskFormComponent } from './add-task-form/add-task-form/add-task-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainAddTaskFormComponent } from './add-task-form/main-add-task-form/main-add-task-form.component';
import {CommonModule} from "@angular/common";
import {AddTaskFormModule} from "@/app/add-task-form/add-task-form.module";
import {DeleteTaskFormModule} from "@/app/delete-task-form/delete-task-form.module";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    ColorByStateDirective,
    DateToJMYPipe,
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AddTaskFormModule,
    DeleteTaskFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
