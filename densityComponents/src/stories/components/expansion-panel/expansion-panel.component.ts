import { Component, Input, ElementRef, OnChanges } from '@angular/core';
import { Sizes } from '../../assets/model/modelo.model';
@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  panelOpenState = false;
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  size!: Sizes;

  ngOnChanges() {
    this.el.nativeElement.classList.add(this.size);
  }

}
