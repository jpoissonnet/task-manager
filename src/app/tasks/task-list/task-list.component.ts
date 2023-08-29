import {Component} from '@angular/core';
import {CRUDTaskListService} from "@/app/tasks/c-r-u-d-task-list.service";
import {ByStatusTaskService} from "@/app/tasks/by-status-task.service";
import {TaskState} from "@/app/model/Task";
import {TaskFacadeService} from "@/app/tasks/task-facade.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {


  constructor(private facade: TaskFacadeService) {
  }

  taskList = this.facade.getTaskList();

  archivedTaskList = this.facade.getArchivedTaskList();

}
