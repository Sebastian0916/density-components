import { Component, Input } from '@angular/core';

@Component({
  selector: ' mat-button',
  template: `<button mat-raised-button [ngClass]="sizes">{{ label }}</button>`,
  styleUrls: ['../../../theme/stylesStorybook/_button.component.scss'],
})
export class ButtonComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return ['mat-button', `button-${this.size}`, `button-${this.color}`];
  }
}
