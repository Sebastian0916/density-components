import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SizeDirective } from 'src/theme/size.directive';
import { RadioButtonComponent } from '../stories/components/radio-button/radio-button.component';
import { ListComponent } from 'src/stories/components/list/list.component';
import { ExpansionPanelComponent } from 'src/stories/components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeDirective, 
    RadioButtonComponent,
    ListComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
