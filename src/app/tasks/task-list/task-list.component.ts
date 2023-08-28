import {Component} from '@angular/core';
import {CRUDTaskListService} from "@/app/c-r-u-d-task-list.service";
import {ByStatusTaskService} from "@/app/by-status-task.service";
import {TaskState} from "@/app/model/Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {


  constructor(private taskListService: CRUDTaskListService, private byStatusTaskService: ByStatusTaskService) {
  }

  taskList = this.taskListService.getTaskList();
  archivedTaskList = this.byStatusTaskService.getByStatus(TaskState.TERMINE);

}
