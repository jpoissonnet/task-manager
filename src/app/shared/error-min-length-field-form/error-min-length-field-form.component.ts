import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-min-length-field-form',
  templateUrl: './error-min-length-field-form.component.html',
  styleUrls: ['./error-min-length-field-form.component.scss']
})
export class ErrorMinLengthFieldFormComponent {
  @Input() isDisplayed = false;


}
