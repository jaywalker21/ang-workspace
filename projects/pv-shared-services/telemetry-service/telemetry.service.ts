import { UserTraits } from './telemetry.types';

export abstract class TelemetryService {
  public abstract initialize(): void;
  public abstract identify(userTraits: UserTraits): void;
  public abstract trackEvent(eventMetadata: Record<string, unknown>): void;
  public abstract trackPage(eventMetadata: Record<string, unknown>): void;
  public abstract shutdown(): void;
}
