import { Component, Input, ElementRef, OnChanges } from '@angular/core';
@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['../../../theme/refactor-density.scss']
})
export class RadioButtonComponent implements OnChanges {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input ()
  size !: 'small' | 'medium';
  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
}
