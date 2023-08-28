import {Component} from '@angular/core';
import {CRUDTaskListService} from "@/app/c-r-u-d-task-list.service";
import {ByStatusTaskService} from "@/app/by-status-task.service";
import {TaskState} from "@/app/model/Task";
import {TaskFacadeService} from "@/app/task-facade.service";

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
