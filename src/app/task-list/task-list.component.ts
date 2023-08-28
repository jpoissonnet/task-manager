import {Component} from '@angular/core';
import {TaskList} from "@/app/model/TaskList";
import {Task, TaskState} from "@/app/model/Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskList = new TaskList([
    new Task( "Titre 1",  "Description 1",  TaskState.A_FAIRE),
    new Task( "Titre 2",  "Description 2",  TaskState.EN_COURS),
    new Task( "Titre 3",  "Description 3",  TaskState.TERMINE),
  ]);

}
