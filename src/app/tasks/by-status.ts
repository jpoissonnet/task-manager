import {TaskState, Task} from "@/app/model/Task";
import {Observable} from "rxjs";

export interface ByStatus {
  getByStatus(status: TaskState): Observable<Task[]>;

}
