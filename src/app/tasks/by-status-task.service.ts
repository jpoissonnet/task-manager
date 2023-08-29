import {Injectable} from '@angular/core';
import {CRUDTaskListService} from "@/app/tasks/c-r-u-d-task-list.service";
import {TaskState} from "@/app/model/Task";
import {ByStatus} from "@/app/tasks/by-status";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ByStatusTaskService extends CRUDTaskListService implements ByStatus {

  constructor() {
    super();
  }

  getByStatus(status: TaskState) {
    return this.getTaskList().pipe(
      map(taskList => taskList.tasks.filter(task => task.etat === status))
    );
  }
}
