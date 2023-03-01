import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-chip',
  template: `<mat-chip [ngClass]="sizes">{{ label }}</mat-chip>`,
  styleUrls: ['../../../theme/main.scss'],
})
export class MatChipComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;
  public get sizes(): string[] {
    return [
      'mat-chip',
      `mat-chip--${this.size}` || 'mat-chip',
      `mat-chip--${this.color}`,
    ];
  }
}
