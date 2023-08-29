import {Injectable} from '@angular/core';
import {TaskList} from "@/app/model/TaskList";
import {Task, TaskState} from "@/app/model/Task";
import {CRUDTask} from "@/app/tasks/crudtask";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTask {

  constructor() {
  }

  private taskList = of(new TaskList([
    new Task("Titre 1", "Description 1", TaskState.A_FAIRE, new Date()),
    new Task("Titre 2", "Description 2", TaskState.EN_COURS, new Date()),
    new Task("Titre 3", "Description 3", TaskState.TERMINE, new Date()),
  ]));

  getTaskList(): Observable<TaskList> {
    return this.taskList;
  }

  createTask(newTask: Task) {
    this.taskList.subscribe(taskList => taskList.tasks.push(newTask));
  }

  deleteTask(title: string) {
    this.taskList.subscribe(taskList => taskList.tasks = taskList.tasks.filter(task => {
      return task.titre !== title;
    }));
  }

}
