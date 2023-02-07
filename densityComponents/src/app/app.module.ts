import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent            } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule          } from './material.module';
import { RadioButtonComponent } from 'src/stories/components/button/radio-button.component';
@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
