import {TaskState, Task} from "@/app/model/Task";

export interface ByStatus {
  getByStatus(status: TaskState): Task[];

}
