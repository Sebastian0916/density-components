import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import { Sizes } from '../../assets/model/modelo.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../../theme/refactor-density.scss']
})
export class ListComponent {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  size!: Sizes;

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }
}
