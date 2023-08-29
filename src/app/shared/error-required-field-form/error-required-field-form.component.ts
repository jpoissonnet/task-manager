import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-required-field-form',
  templateUrl: './error-required-field-form.component.html',
  styleUrls: ['./error-required-field-form.component.scss']
})
export class ErrorRequiredFieldFormComponent {
  @Input() isDisplayed = false;


}
