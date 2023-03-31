import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-checkbox',
  template: `<mat-checkbox [ngClass]="custom"></mat-checkbox>`,
})
export class CheckboxComponent {
  @Input()
  size!: string;
  color!: string;

  public get custom(): string[] {
    return [`${this.size}`, `color-${this.color}`];
  }
}
