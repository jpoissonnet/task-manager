import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component';
import { MainTaskComponent } from './tasks/main-task/main-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ColorByStateDirective } from './color-by-state.directive';
import { DateToJMYPipe } from './date-to-jmy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    ColorByStateDirective,
    DateToJMYPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
