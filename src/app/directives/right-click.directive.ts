import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[rightClick]'
})
export class RightClickDirective {
  host: any;

  @Output() rightClick = new EventEmitter<any>()

  @HostListener('contextmenu') onRightClick(value: any) {
    this.rightClick.emit(value);
    return false;
  }

  constructor() { }

}
