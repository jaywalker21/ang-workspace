import {
  UserTraits,
  TelemetryProvider,
} from '@pv-frontend/pv-shared-services/telemetry-service';

export interface SentryInitConfig {
  dsn: string;
  traceSampleRate: number;
  replaysOnErrorSampleRate: number;
}

export class SentryTelemetryProvider
  implements TelemetryProvider<SentryInitConfig>
{
  constructor() {
    console.log('sentry constructor');
  }

  public initialize(config: SentryInitConfig): void {
    // this is where you do sentry.init()
    console.log('config key for sentry ', config);
  }

  public identify(userTraits: UserTraits): void {
    // this is where you call sentry.setUser() method
    console.log('call identify for userTraits ', userTraits);
  }

  public trackError(eventMetadata: Record<string, unknown>): void {
    // this is where you call sentry.captureException() method
    console.log('error ', eventMetadata);
  }

  public shutdown(): void {
    console.log('graceful shutdown');
  }
}
