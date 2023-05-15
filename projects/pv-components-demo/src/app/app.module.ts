import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TypographyModule } from 'pv-components-lib/typography';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
