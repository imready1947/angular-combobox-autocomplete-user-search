import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ComboBoxComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
