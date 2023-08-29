import {Task} from "@/app/model/Task";
import {TaskList} from "@/app/model/TaskList";
import {Observable} from "rxjs";

export interface CRUDTask {

  createTask(newTask: Task): void

  getTaskList(): Observable<TaskList>

  deleteTask(task:Task): void

}
