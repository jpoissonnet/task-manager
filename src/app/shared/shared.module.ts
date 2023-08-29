import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ErrorMinLengthFieldFormComponent
} from "@/app/shared/error-min-length-field-form/error-min-length-field-form.component";
import {
  ErrorMaxLengthFieldFormComponent
} from "@/app/shared/error-max-length-field-form/error-max-length-field-form.component";
import {
  ErrorRequiredFieldFormComponent
} from "@/app/shared/error-required-field-form/error-required-field-form.component";


@NgModule({
  declarations: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent],
  exports: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
