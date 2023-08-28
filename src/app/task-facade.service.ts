import { Injectable } from '@angular/core';
import {ByStatusTaskService} from "@/app/by-status-task.service";
import {CRUDTaskListService} from "@/app/c-r-u-d-task-list.service";
import {TaskState} from "@/app/model/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {

  constructor(private taskListService: CRUDTaskListService, private byStatusTaskService: ByStatusTaskService) {
  }

  taskList = this.taskListService.getTaskList();
  archivedTaskList = this.byStatusTaskService.getByStatus(TaskState.TERMINE);

  getTaskList() {
    return this.taskList;
  }

getArchivedTaskList() {
    return this.archivedTaskList;
  }

}
