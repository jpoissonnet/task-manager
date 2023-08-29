import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TasksRoutingModule} from './tasks-routing.module';
import {TaskListComponent} from "@/app/tasks/task-list/task-list.component";
import {CRUDTaskListService} from "@/app/tasks/c-r-u-d-task-list.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [
    CRUDTaskListService
  ],
})
export class TasksModule {
}
