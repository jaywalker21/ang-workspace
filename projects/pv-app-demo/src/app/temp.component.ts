import { Component, Inject } from '@angular/core';
import { BaseComponent } from '@sentinels/pv-shared-services';
import { JourneyMetaDataServiceImpl } from './pv-journey-metadata-impl.service';

const PATH_INFO = 'giftcards.landingPage.limitedTimeOffers';

@Component({
  selector: 'app-temp',
  template: `<pv-button [style]="this.styleConfiguration['claimButton']">
    Hey there
  </pv-button>`,
  styles: [],
})
export class TempComponent extends BaseComponent {
  constructor(
    public override journeyMetadataService: JourneyMetaDataServiceImpl
  ) {
    super(journeyMetadataService, PATH_INFO);
  }
}
