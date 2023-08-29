import {Component, OnInit} from '@angular/core';
import {TaskFacadeService} from "@/app/tasks/task-facade.service";
import {TaskList} from "@/app/model/TaskList";
import {Subscription} from "rxjs";

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
    this.$archivedTaskListSubscription = this.facade.archivedTaskList.subscribe(taskList => this.archivedTaskList = new TaskList(taskList));
  }

}
