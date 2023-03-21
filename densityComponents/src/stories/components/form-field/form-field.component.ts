import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input() appearance!: 'fill' | 'outline';

  @Input() size!: string;

  public get Appearance(): string[] {
    return [`${this.appearance}`];
  }
  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
