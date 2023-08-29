import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TaskFacadeService} from "@/app/tasks/task-facade.service";
import {TaskList} from "@/app/model/TaskList";

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.scss']
})
export class DeleteTaskFormComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter();
  form = this.fb.group({
    title: [null],
  });

  tasks$ = this.facade.getTaskList();
  tasks!: TaskList;

  constructor(private fb: FormBuilder, private facade: TaskFacadeService) {
  }
  ngOnInit(): void {
    this.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onSubmit() {
    this.deleteEvent.emit(this.form.value);
  }


}
