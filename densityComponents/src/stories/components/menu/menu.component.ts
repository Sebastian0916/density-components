import { Component, Input } from '@angular/core';

@Component({
  selector: ' mat-menu',
  template: `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item [ngClass]="sizes">Item 1</button>
    <button mat-menu-item [ngClass]="sizes">Item 2</button>
  </mat-menu>
  `,
})
export class MatMenuComponent {
  @Input() size!: string;

  public get sizes(): string[] {
    return [`${this.size}`];
  }
}
