import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'pv-components-lib/button';

import { JOURNEY_METADATA_SERVICE_TOKEN } from '@sentinels/pv-shared-services';
import { JourneyMetaDataServiceImpl } from './pv-journey-metadata-impl.service';
import { TempComponent } from './temp.component';

@NgModule({
  declarations: [AppComponent, TempComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [
    JourneyMetaDataServiceImpl,
    {
      provide: JOURNEY_METADATA_SERVICE_TOKEN,
      useExisting: JourneyMetaDataServiceImpl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
