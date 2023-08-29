import {Injectable} from '@angular/core';
import {TaskList} from "@/app/model/TaskList";
import {Task, TaskState} from "@/app/model/Task";
import {CRUDTask} from "@/app/tasks/crudtask";
import {filter, Observable, of} from "rxjs";
import {ByStatus} from "@/app/tasks/by-status";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTask, ByStatus {

  constructor() {
  }

  private taskList = new TaskList([
    new Task("Titre 1", "Description 1", TaskState.A_FAIRE, new Date()),
    new Task("Titre 2", "Description 2", TaskState.EN_COURS, new Date()),
    new Task("Titre 3", "Description 3", TaskState.TERMINE, new Date()),
  ]);


  getTaskList(): Observable<TaskList> {
    return of(this.taskList);
  }

  createTask(newTask: Task) {
    this.taskList.tasks.push(newTask);
  }

  deleteTask(title: string) {
    this.taskList.tasks = this.taskList.tasks.filter(task => task.titre !== title);
  }

  getByStatus(status: TaskState) {
    return of(
      new TaskList(
        this.taskList.tasks.filter(task => {
          return task.etat === status;
        })
      )
    )
  }

}
