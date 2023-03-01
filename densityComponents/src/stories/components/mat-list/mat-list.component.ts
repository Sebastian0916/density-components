import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['../../../theme/stylesStorybook/_mat-list.component.scss'],
})
export class MatListComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`list-${this.size}`];
  }
}
  