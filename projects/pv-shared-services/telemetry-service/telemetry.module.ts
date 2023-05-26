import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import {
  TELEMETRY_PROVIDER_TOKENS,
  TelemetryRegistrationConfig,
} from './telemetry.types';
import { TelemetryImplService } from './telemetry-impl.service';
import { TelemetryService } from './telemetry.service';

@NgModule()
export class TelemetryModule {
  public constructor(
    @Inject(TELEMETRY_PROVIDER_TOKENS)
    providerConfigs: TelemetryRegistrationConfig<unknown>[],
    telemetryService: TelemetryImplService
  ) {
    telemetryService.register(providerConfigs);
  }

  public static forRoot(
    providerConfigs: TelemetryRegistrationConfig<unknown>[]
  ): ModuleWithProviders<TelemetryModule> {
    return {
      ngModule: TelemetryModule,
      providers: [
        {
          provide: TelemetryService,
          useExisting: TelemetryImplService,
        },
        {
          provide: TELEMETRY_PROVIDER_TOKENS,
          useValue: providerConfigs,
        },
      ],
    };
  }
}
