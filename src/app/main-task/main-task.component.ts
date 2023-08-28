import { Component } from '@angular/core';
import {Task, TaskState} from "@/app/model/Task";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent {
  task = new Task("Main titre", "Main description", TaskState.EN_COURS);

}
