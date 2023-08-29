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
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
