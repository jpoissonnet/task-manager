import {Task} from "@/app/model/Task";
import {TaskList} from "@/app/model/TaskList";

export interface CRUDTask {

  createTask(newTask: Task): void

  getTaskList(): TaskList

  updateTask(task: Task): TaskList

  deleteTask(task:Task): Task

}
