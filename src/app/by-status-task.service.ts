import { Injectable } from '@angular/core';
import {CRUDTaskListService} from "@/app/c-r-u-d-task-list.service";
import {TaskState} from "@/app/model/Task";

@Injectable({
  providedIn: 'root'
})
export class ByStatusTaskService extends CRUDTaskListService {

  constructor() {
    super();
  }

  getByStatus(status: TaskState) {
    return this.getTaskList().tasks.filter(task => task.etat === status);
  }
}
