import { Component, Inject } from '@angular/core';
import {
  JourneyMetadataService,
  JOURNEY_METADATA_SERVICE_TOKEN,
  JourneyBase,
} from 'pv-shared-services';

const PATH_INFO = 'giftcards.landingPage.limitedTimeOffers';

@Component({
  selector: 'gc-journey-home',
  template: `
    <div class="journey-home">
      <pv-button
        [style]="this.styleConfig['claimButton']"
        buttonType="button"
        buttonText="Hello from home!"
        pvTrackLabel="gc.landong"
      >
        <span>Does this override</span>
      </pv-button>
    </div>
  `,
})
export class HomeComponent implements JourneyBase {
  public styleConfig: Record<string, any> = {};

  constructor(
    @Inject(JOURNEY_METADATA_SERVICE_TOKEN)
    public journeyMetadataService: JourneyMetadataService
  ) {
    this.setStyleConfig(PATH_INFO);
  }

  public setStyleConfig(pathToView: string): void {
    throw new Error('Method not implemented.');
  }
}
