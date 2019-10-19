import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsdComponent } from '../usd/usd.component';
import { JpnComponent } from '..jpn/jpn.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsdComponent, JpnComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
