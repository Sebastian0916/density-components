import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-slider',
  template: `<mat-slider [ngClass]="sizes"
    ><input matSliderThumb
  /></mat-slider>`,
  styleUrls: ['../../../theme/stylesStorybook/_slider.component.scss'],
})
export class SliderComponent {
  @Input() size!: string;
  @Input() color!: string;
  public get sizes(): string[] {
    return [
      'mat-slider',
      `slider--${this.size}`,
      'mat-slider',
      `slider--${this.color}`,
    ];
  }
}
