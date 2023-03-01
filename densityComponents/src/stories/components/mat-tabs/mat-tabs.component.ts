import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['../../../theme/stylesStorybook/_mat-tabs.component.scss'],
})
export class MatTabsComponent {
  @Input() color!: string;

  public get colors(): string[] {
    return [`tabs-${this.color}`];
  }
}
