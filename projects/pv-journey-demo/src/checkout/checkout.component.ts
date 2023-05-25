import { Component, Inject } from '@angular/core';
import {
  JOURNEY_METADATA_SERVICE_TOKEN,
  JourneyMetadataService,
  JourneyBase,
} from 'pv-shared-services';

const PATH_INFO = 'giftcards.checkout';

@Component({
  selector: 'gc-journey-checkout',
  template: `
    <div class="journey-checkout">
      <pv-button
        [style]="this.styleConfig['submitButton']"
        buttonType="button"
        buttonText="Hello from checkout!"
      ></pv-button>
    </div>
  `,
})
export class CheckoutComponent implements JourneyBase {
  public styleConfig: Record<string, any> = {};

  constructor(
    @Inject(JOURNEY_METADATA_SERVICE_TOKEN)
    public journeyMetadataService: JourneyMetadataService
  ) {
    this.setStyleConfig(PATH_INFO);
  }

  public setStyleConfig(pathToView: string) {
    this.styleConfig = this.journeyMetadataService.getJourneyConfig(pathToView);
  }
}
