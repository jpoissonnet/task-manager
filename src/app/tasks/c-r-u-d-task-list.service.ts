import {Injectable} from '@angular/core';
import {TaskList} from "@/app/model/TaskList";
import {Task, TaskState} from "@/app/model/Task";
import {CRUDTask} from "@/app/tasks/crudtask";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTask {

  constructor() {
  }

  private taskList =
    new TaskList([
      new Task("Titre 1", "Description 1", TaskState.A_FAIRE, new Date()),
      new Task("Titre 2", "Description 2", TaskState.EN_COURS, new Date()),
      new Task("Titre 3", "Description 3", TaskState.TERMINE, new Date()),
    ]);

  getTaskList(): TaskList {
    return this.taskList;
  }

  createTask(newTask: Task) {
    this.taskList.tasks.push(newTask);
  }

  deleteTask(task: Task) {
    this.taskList.tasks.filter(inPlace => inPlace !== task);
    return task;
  }

  updateTask(task: Task) {
    this.taskList.tasks.filter(inPlace => inPlace === task);
    this.taskList.tasks.push(task);
    return this.taskList;
  }
}
