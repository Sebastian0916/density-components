import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip color="primary" [ngClass]="sizes">{{
    label
  }}</mat-chip>`,
})
export class MatChipComponent {
  @Input() size!: string;
  @Input() label!: string;
  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
