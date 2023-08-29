import {Injectable} from '@angular/core';
import {CRUDTaskListService} from "@/app/tasks/c-r-u-d-task-list.service";
import {TaskState} from "@/app/model/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {

  constructor(private taskListService: CRUDTaskListService) {
  }

  taskList = this.taskListService.getTaskList();

  getTaskList() {
    return this.taskList;
  }

  deleteTask(title: string) {
    this.taskListService.deleteTask(title);
  }

  getByStatus(status: TaskState) {
    return this.taskListService.getByStatus(status);
  }

}
