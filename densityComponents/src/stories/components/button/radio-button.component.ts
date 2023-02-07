import { Component, Input } from '@angular/core';
import { Sizes } from '../../assets/model/modelo.model';
@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['../../../theme/_theme.scss']
})
export class RadioButtonComponent {
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary' ;
  @Input ()
  size ?: Sizes;

  public get colorOption(): string[] {
    return [`radioButton--${this.color}`]
  }
}
