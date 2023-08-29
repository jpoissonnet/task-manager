import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {
  @Output() submitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  form = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(2)]],
    etat: ['EN_COURS', [Validators.required]],
    dateDebut: ['2018-07-22', [Validators.required]],
  });

  onSubmit() {
    this.submitEvent.emit(this.form.value);
  }

}
