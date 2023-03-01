import { Component, Input } from '@angular/core';
@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['../../../theme/stylesStorybook/_radio-buttons.scss'],
})
export class RadioButtonComponent {
  @Input() color!: string;
  @Input() size!: string;

  public get sizes(): string[] {
    return [`radio-${this.size}` || `radio-${this.color}`];
  }
}
