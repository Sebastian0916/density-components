import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autcomplete',
  templateUrl: './autocomplete.html',
  styleUrls: ['../../../theme/stylesStorybook/_autocomplete.component.scss'],
})
export class AutocompleteComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  @Input() label!: string;
  @Input() size!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`form-field-${this.size}` || `form-field-${this.color}`];
  }
}
