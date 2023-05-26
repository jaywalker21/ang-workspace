import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './temp.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'pv-components-lib/button';

import { JOURNEY_METADATA_SERVICE_TOKEN } from '@pv-frontend/pv-shared-services/journey-metadata-service';
import { JourneyMetaDataServiceImpl } from './pv-journey-metadata-impl.service';

import { TelemetryModule } from '@pv-frontend/pv-shared-services/telemetry-service';
import { SegmentTelemetryProvider } from './telemetry-providers/segment-telemetry-provider';
import { SentryTelemetryProvider } from './telemetry-providers/sentry-telemetry-provider';

@NgModule({
  declarations: [AppComponent, TempComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TelemetryModule.forRoot([
      {
        telemetryProvider: SegmentTelemetryProvider,
        initConfig: {
          writeKey: 'writeKey',
          projectId: 'projectId',
        },
        enableErrorTracking: false,
        enableEventTracking: true,
        enablePageTracking: true,
      },
      {
        telemetryProvider: SentryTelemetryProvider,
        initConfig: {
          dsn: 'some url',
        },
        enableErrorTracking: true,
        enableEventTracking: false,
        enablePageTracking: false,
      },
    ]),
  ],
  providers: [
    JourneyMetaDataServiceImpl,
    SegmentTelemetryProvider,
    SentryTelemetryProvider,
    {
      provide: JOURNEY_METADATA_SERVICE_TOKEN,
      useExisting: JourneyMetaDataServiceImpl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
