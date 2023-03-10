import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['../../../../theme/stylesStorybook/_clases.scss'],
})
export class IconComponent {
  @Input()
  filled = ' - ';
  outline = ' - ';
  two_tone = ' - ';
}
