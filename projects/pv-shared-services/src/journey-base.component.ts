import { Component, Inject } from '@angular/core';
import {
  JOURNEY_METADATA_SERVICE_TOKEN,
  JourneyMetadataService,
} from './pv-journey-metadata.service';

@Component({
  selector: 'journey-base',
  template: ` <p>base works!</p> `,
  styles: [],
})
export class BaseComponent {
  public styleConfiguration: Record<string, any> = {};

  constructor(
    @Inject(JOURNEY_METADATA_SERVICE_TOKEN)
    public journeyMetadataService: JourneyMetadataService,
    @Inject(String)
    public pathKeyInformation: string
  ) {
    this.styleConfiguration = this.getStylesConfiguration(
      this.pathKeyInformation
    );
  }

  public getStylesConfiguration(pathToKey: string): Record<string, any> {
    return this.journeyMetadataService.getJourneyConfig(pathToKey);
  }
}
