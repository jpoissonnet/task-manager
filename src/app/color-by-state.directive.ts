import {Directive, ElementRef, Input} from '@angular/core';
import {TaskState} from "@/app/model/Task";


const colorByState = {
  [TaskState.A_FAIRE]: '#bd341f',
  [TaskState.EN_COURS]: '#3496f5',
  [TaskState.TERMINE]: '#45b274',
};

@Directive({
  selector: '[appColorByState]'
})
export class ColorByStateDirective {
  @Input() appColorByState = TaskState.A_FAIRE;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.color = colorByState[this.appColorByState];
  }


}
