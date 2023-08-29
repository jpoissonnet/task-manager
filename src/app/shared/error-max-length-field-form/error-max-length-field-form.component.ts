import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-max-length-field-form',
  templateUrl: './error-max-length-field-form.component.html',
  styleUrls: ['./error-max-length-field-form.component.scss']
})
export class ErrorMaxLengthFieldFormComponent {
  @Input() isDisplayed = false;

}
