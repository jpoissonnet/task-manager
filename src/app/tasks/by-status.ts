import {TaskState} from "@/app/model/Task";

export interface ByStatus {
  getByStatus(status: TaskState): any;

}
