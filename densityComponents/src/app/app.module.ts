import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SizeDirective } from 'src/theme/size.directive';

import { ButtonComponent } from 'src/stories/components/mat-button/button.component';
import { MatChipComponent } from 'src/stories/components/mat-chip/mat-chip.component';
import { IconComponent } from 'src/stories/components/mat-icon/icon.component';
import { SliderComponent } from 'src/stories/components/mat-slider/slider.component';
import { StepperComponent } from 'src/stories/components/mat-stepper/stepper.component';
import { ToolbarComponent } from 'src/stories/components/mat-toolbar/toolbar.component';
import { TogglebuttonComponent } from 'src/stories/components/mat-toggle-button/togglebutton.component';
import { SlideToggleComponent } from 'src/stories/components/mat-slide-toggle/slide-toggle.component';
import { MatTabsComponent } from 'src/stories/components/mat-tabs/mat-tabs.component';
import { RadioButtonComponent } from 'src/stories/components/radio-button/radio-button.component';
import { FormFieldComponent } from 'src/stories/components/form-field/form-field.component';
import { TipografiaComponent } from 'src/stories/components/tipografia/tipografia.component';
import { ProgressSpinnerComponent } from 'src/stories/components/progress-spinner/progress-spinner.component';
import { TableComponent } from 'src/stories/components/table/table.component';
import { ClasesGlobalesComponent } from 'src/stories/components/Clases/clases-globales/clases-globales.component';
import { CheckboxComponent } from 'src/stories/components/checkbox/checkbox.component';
import { LayoutComponent } from 'src/stories/components/Clases/layoutt/layout.component';
import { MatListComponent } from 'src/stories/components/mat-list/mat-list.component';
import { MatMenuComponent } from 'src/stories/components/menu/menu.component';

@NgModule({
  declarations: [
    MatMenuComponent,
    LayoutComponent,
    CheckboxComponent,
    ClasesGlobalesComponent,
    TableComponent,
    ProgressSpinnerComponent,
    TipografiaComponent,
    FormFieldComponent,
    RadioButtonComponent,
    MatListComponent,
    MatTabsComponent,
    SlideToggleComponent,
    TogglebuttonComponent,
    ToolbarComponent,
    StepperComponent,
    SliderComponent,
    ButtonComponent,
    MatChipComponent,
    IconComponent,
    AppComponent,
    SizeDirective,
  ],
  imports: [
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
