import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-icon',
  template: `<mat-icon [ngClass]="sizes">home</mat-icon> `,
})
export class IconComponent {
  @Input() size!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`${this.size}`, `mat-icon--${this.color}`];
  }
}
