import {NgModule, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorMinLengthFieldFormComponent } from './error-min-length-field-form/error-min-length-field-form.component';
import { ErrorMaxLengthFieldFormComponent } from './error-max-length-field-form/error-max-length-field-form.component';
import { ErrorRequiredFieldFormComponent } from './error-required-field-form/error-required-field-form.component';


@NgModule({
  declarations: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ],
  exports: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AddTaskFormModule {
}
