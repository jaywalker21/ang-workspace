import { InjectionToken } from "@angular/core";

export const JOURNEY_METADATA_SERVICE_TOKEN = new InjectionToken<JourneyMetadataService>('Journey Metadata Service');

export abstract class JourneyMetadataService {
    abstract getJourneyConfig(journeyId: string): any;
}