import {Component, OnInit} from '@angular/core';
import {TaskFacadeService} from "@/app/tasks/task-facade.service";
import {TaskList} from "@/app/model/TaskList";
import {Subscription} from "rxjs";
import {TaskState} from "@/app/model/Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  $taskListSubscription!: Subscription;
  $archivedTaskListSubscription!: Subscription;
  taskList!: TaskList;
  archivedTaskList!: TaskList;

  constructor(private facade: TaskFacadeService) {
  }


  ngOnInit(): void {
    this.$taskListSubscription = this.facade.taskList.subscribe(taskList => this.taskList = taskList);
    this.$archivedTaskListSubscription = this.facade.getByStatus(TaskState.TERMINE).subscribe(taskList => this.archivedTaskList = taskList);
  }

}
