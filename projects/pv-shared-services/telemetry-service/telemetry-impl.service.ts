import { Injectable, Injector, OnDestroy } from '@angular/core';
import { TelemetryService } from './telemetry.service';
import {
  AnalyticsConfig,
  TelemetryInteralConfig,
  TelemetryRegistrationConfig,
  UserTraits,
} from './telemetry.types';
import { Subscription, delay, filter } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TelemetryImplService
  extends TelemetryService
  implements OnDestroy
{
  private allTelemetryProviders: TelemetryInteralConfig[] = [];
  private _routeListener: Subscription = new Subscription();

  public constructor(
    private readonly injector: Injector,
    private readonly router: Router
  ) {
    super();
    this.setupAutomaticPageTracking();
    console.log('constructor');
  }

  public override initialize(): void {
    this.allTelemetryProviders.forEach((provider) => {
      provider.telemetryProvider.initialize(provider.initConfig);
    });
    console.log('initialise');
  }

  public override identify(userTraits: UserTraits): void {
    this.allTelemetryProviders.forEach((provider) => {
      provider.telemetryProvider.identify(userTraits);
    });
    console.log({ userTraits });
  }

  public override trackEvent(eventMetadata: Record<string, unknown>): void {
    this.allTelemetryProviders
      .filter((provider) => provider.enableEventTracking)
      .forEach((eventTrackingEnabledProvider) => {
        eventTrackingEnabledProvider.telemetryProvider.trackEvent?.(
          eventMetadata
        );
      });
    console.log({ eventMetadata });
  }

  public override trackPage(eventMetadata: Record<string, unknown>): void {
    this.allTelemetryProviders
      .filter((provider) => provider.enablePageTracking)
      .forEach((eventTrackingEnabledProvider) => {
        eventTrackingEnabledProvider.telemetryProvider.trackPage?.(
          eventMetadata
        );
      });
    console.log({ eventMetadata });
  }

  public override shutdown(): void {
    this.allTelemetryProviders.forEach((provider) => {
      provider.telemetryProvider.shutdown?.();
    });
    this.allTelemetryProviders = [];
    console.log('shutdown');
  }

  public register(configs: TelemetryRegistrationConfig<unknown>[]): void {
    try {
      this.allTelemetryProviders = [
        ...this.allTelemetryProviders,
        ...configs.map((config) => this.buildTelemetryProvider(config)),
      ];
    } catch (error) {
      console.error({ error });
    }
  }

  private buildTelemetryProvider(
    config: TelemetryRegistrationConfig<unknown>
  ): TelemetryInteralConfig {
    const providerInstance = this.injector.get(config.telemetryProvider);

    return {
      ...config,
      telemetryProvider: providerInstance,
    };
  }

  private setupAutomaticPageTracking() {
    this._routeListener.add(
      this.router?.events
        .pipe(
          filter(
            (event): event is ActivationEnd => event instanceof ActivationEnd
          ),
          delay(50)
        )
        .subscribe((event) => {
          const {
            enabled: analyticsEnabled,
            validator,
            pageInformationOverrideFunction,
            pageInformation,
          } = (event.snapshot.data['analyticsConfig'] as AnalyticsConfig) ?? {};
          const overridenPageInfo = pageInformationOverrideFunction
            ? pageInformationOverrideFunction.call(null, event.snapshot) ?? null
            : null;
          if (analyticsEnabled) {
            if ((validator && validator(event.snapshot)) || !validator) {
              this.trackPage({
                pageInformation,
                ...overridenPageInfo,
                ...event.snapshot.queryParams,
              });
            }
          }
          return;
        })
    );
  }

  public ngOnDestroy(): void {
    this.shutdown();
    this._routeListener.unsubscribe();
  }
}
