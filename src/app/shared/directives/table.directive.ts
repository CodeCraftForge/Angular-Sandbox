import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {
  @Input() data: any[] = [];

  constructor(private el: ElementRef) { }
}
