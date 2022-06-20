import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cloak]'
})
export class CloakDirective {
  host: any;

  @Input() set cloak (value: boolean) {
    this.host.style.visibility = value ? "hidden" : "visible";
  };

  constructor(readonly el: ElementRef) {
    this.host = el.nativeElement;
  }

}
