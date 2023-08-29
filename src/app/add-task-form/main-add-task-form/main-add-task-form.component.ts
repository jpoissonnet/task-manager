import {Component} from '@angular/core';
import {Task, TaskState} from "@/app/model/Task";
import {CRUDTaskListService} from "@/app/tasks/c-r-u-d-task-list.service";

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {
  constructor(private crud: CRUDTaskListService) {
  }

  onSubmitEvent($event: Task) {
    this.crud.createTask(
      {
        ...$event,
        etat: TaskState[$event.etat as unknown as keyof typeof TaskState],
        dateDebut: new Date($event.dateDebut)
      });
    console.log($event)

  }

}
