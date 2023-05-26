import {
  UserTraits,
  TelemetryProvider,
} from '@pv-frontend/pv-shared-services/telemetry-service';

export interface SegmentInitConfig {
  writeKey: string;
  projectId: string;
}

export class SegmentTelemetryProvider
  implements TelemetryProvider<SegmentInitConfig>
{
  constructor() {
    console.log('segment constructor');
  }

  public initialize(config: SegmentInitConfig): void {
    console.log('initialise segment using config ', config);
  }

  public identify(userTraits: UserTraits): void {
    console.log('call identify for userTraits ', userTraits);
  }

  public trackEvent(eventMetadata: Record<string, unknown>): void {
    console.log('track event service call ', eventMetadata);
  }

  public trackPage(eventMetadata: Record<string, unknown>): void {
    console.log('track page service call ', eventMetadata);
  }

  public shutdown(): void {
    console.log('graceful shutdown');
  }
}
