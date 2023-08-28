import {Directive, ElementRef, Input} from '@angular/core';
import {TaskState} from "@/app/model/Task";


const colorByState = {
  [TaskState.A_FAIRE]: 'red',
  [TaskState.EN_COURS]: 'blue',
  [TaskState.TERMINE]: 'green',
};

@Directive({
  selector: '[appColorByState]'
})
export class ColorByStateDirective {
  @Input() appColorByState: TaskState = TaskState.A_FAIRE;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = colorByState[this.appColorByState];
  }



}
