import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteTaskFormComponent} from './delete-task-form/delete-task-form.component';
import {MainDeleteTaskFormComponent} from './main-delete-task-form/main-delete-task-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DeleteTaskFormComponent,
    MainDeleteTaskFormComponent
  ],
  exports: [
    DeleteTaskFormComponent,
    MainDeleteTaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule]
})
export class DeleteTaskFormModule {
}
