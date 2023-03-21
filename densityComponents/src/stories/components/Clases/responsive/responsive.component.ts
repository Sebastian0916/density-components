import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['../../../../stories/stylesStorybook/_clases.scss'],
})
export class ResponsiveComponent {
  @Input()
  MiniMobile = ' - ';
  Mobile = ' - ';
  Tablet = ' - ';
  Laptop = ' - ';
  Desktop = ' - ';
  Monitor = ' - ';
}
