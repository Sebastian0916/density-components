import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['../../../theme/stylesStorybook/progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
  @Input()
  color!: string;

  public get colors(): string[] {
    return [`spinner-${this.color}`];
  }
}
