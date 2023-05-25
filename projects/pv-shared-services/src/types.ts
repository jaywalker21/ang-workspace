export interface JourneyMetaInformation {
  journeyId: string;
  journeyConfiguration: Record<string, any>;
}

export interface JourneyBase {
  styleConfig: Record<string, any>;
  setStyleConfig(pathToView: string): void;
}
