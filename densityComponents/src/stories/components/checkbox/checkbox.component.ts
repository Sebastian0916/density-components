import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
  styleUrls: ['../../../theme/stylesStorybook/_checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input()
  size!: string;
  color!: string;

  public get custom(): string[] {
    return [`checkbox-${this.size}`, `color-${this.color}`];
  }
}
