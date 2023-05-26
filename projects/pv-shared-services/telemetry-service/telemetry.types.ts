import { InjectionToken, ProviderToken } from '@angular/core';
import { ActivatedRouteSnapshot, Data, Route } from '@angular/router';

export interface UserTraits extends Record<string, unknown> {
  name?: string;
  mobile?: string;
  email?: string;
}

export interface TelemetryProvider<TInitConfig = unknown> {
  initialize(config: TInitConfig): void;
  identify(userTraits: UserTraits): void;
  trackEvent?(eventMetadata: Record<string, unknown>): void;
  trackPage?(eventMetadata: Record<string, unknown>): void;
  trackError?(eventMetadata: Record<string, unknown>): void;
  shutdown?(): void;
}

export interface TelemetryRegistrationConfig<TInitConfig = unknown> {
  telemetryProvider: ProviderToken<TelemetryProvider>;
  initConfig: TInitConfig;
  enablePageTracking: boolean;
  enableEventTracking: boolean;
  enableErrorTracking: boolean;
}

export interface TelemetryInteralConfig<InitConfig = unknown>
  extends Omit<TelemetryRegistrationConfig<InitConfig>, 'telemetryProvider'> {
  telemetryProvider: TelemetryProvider<InitConfig>;
}

export const TELEMETRY_PROVIDER_TOKENS = new InjectionToken<
  TelemetryRegistrationConfig<unknown>[][]
>('TELEMETRY_PROVIDER_TOKENS');

export interface AnalyticsConfig {
  /** Whether analytics should be enabled or not for a particular route */
  enabled: boolean;
  /** The information about the page provided by the Product team to be sent for analytics, generally the page name */
  pageInformation: string;
  /** Function which takes snapshot as argument and decides whether analytics to be performed or not based on information available from snapshot */
  validator?: (snapshot?: ActivatedRouteSnapshot) => boolean;
  /** For some use cases, depending upon value of fields within snapshot, you would want to update the pageInformation dynamically (ex. modal popup for login) */
  pageInformationOverrideFunction?: (
    snapshot?: ActivatedRouteSnapshot
  ) => Record<string, string> | null;
}

export interface AnalyticsDrivenRoute extends Route {
  data?: AnalyticsData;
}

interface AnalyticsData extends Data {
  analyticsConfig?: AnalyticsConfig;
}
