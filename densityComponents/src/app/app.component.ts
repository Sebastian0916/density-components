import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _FormBuilder: FormBuilder) {}
  title = 'densityComponents';
  
  panelOpenState = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  firstFormGroup = this._FormBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._FormBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
