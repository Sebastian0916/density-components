import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-toggle-group',
  template: `<mat-button-toggle-group
    [ngClass]="sizes"
    #group="matButtonToggleGroup"
  >
    <mat-button-toggle value="left" aria-label="Text align left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center" aria-label="Text align center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right" aria-label="Text align right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
  </mat-button-toggle-group> `,
  styleUrls: ['../../../theme/stylesStorybook/_togglebutton.component.scss'],
})
export class TogglebuttonComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`toggle-${this.size}`];
  }
}
