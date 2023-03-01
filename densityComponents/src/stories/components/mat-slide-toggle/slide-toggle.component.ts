import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  template: `<mat-slide-toggle [ngClass]="sizes">{{
    label
  }}</mat-slide-toggle> `,
  styleUrls: ['../../../theme/stylesStorybook/_slide-toggle.component.scss'],
})
export class SlideToggleComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`slide-${this.size}`, `slide-${this.color}`];
  }
}
