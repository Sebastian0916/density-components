import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-icon',
  template: `<mat-icon [ngClass]="sizes">home</mat-icon> `,
  styleUrls: ['../../../theme/stylesStorybook/_icon.component.scss'],
})
export class IconComponent {
  @Input() size!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [
      'Mat-icon',
      `mat-icon--${this.size}` || 'Mat-icon',
      `mat-icon--${this.color}`,
    ];
  }
}
