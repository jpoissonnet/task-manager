import {Component} from '@angular/core';
import {CRUDTaskListService} from "@/app/c-r-u-d-task-list.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor(private taskListService: CRUDTaskListService) {
  }

  taskList = this.taskListService.getTaskList();

}
