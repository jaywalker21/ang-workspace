import { JourneyMetadataService } from '@pv-frontend/pv-shared-services/journey-metadata-service';
import { allJourneyDetails } from './journey-info';

export class JourneyMetaDataServiceImpl extends JourneyMetadataService {
  override getJourneyConfig(elementPath: string) {
    // logic to fetch data and what not
    // if we do a backend call, journeyId might be needed, hence kept here
    let rootObj = allJourneyDetails;
    const answer = elementPath.split('.').reduce((acc, curr) => {
      console.log('acc, curr', acc, curr);
      return acc[curr];
    }, allJourneyDetails);

    console.log('answer ', answer);
    return answer;
  }
}
