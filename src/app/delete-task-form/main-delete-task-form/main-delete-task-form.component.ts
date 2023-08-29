import { Component } from '@angular/core';
import {TaskFacadeService} from "@/app/tasks/task-facade.service";

@Component({
  selector: 'app-main-delete-task-form',
  templateUrl: './main-delete-task-form.component.html',
  styleUrls: ['./main-delete-task-form.component.scss']
})
export class MainDeleteTaskFormComponent {

  constructor(private facade: TaskFacadeService) {
  }

  deleteTask(event: { title: string }) {
    this.facade.deleteTask(event.title);
  }


}
