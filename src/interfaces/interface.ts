export interface iLocationData {
  id: string;
  name: string;
  alias: string;
  textList: Array<string>;
  icon: string;
  region: string;
  move: boolean;
  onNextStep?: NextStepImpl;
}

export interface iStepperData {
    stepsList: Array<string>;
    region: string;
    currentStep?: number; // Not in the database, but will be filled in
}

export interface iTtsMessage {
  temiTtsMessage: message;
}
interface message {
  data: string;
  text: string;
}

export enum NextStep {
  DEFAULT = "Default",
  EMBED = "Embed",
  LOCATION = "Location",
  VIDEO = "Video",
  IMAGE = "Image",
  NESTED = "Nested",
}

export interface NextStepImpl {
  type: NextStep;
}

export interface EmbedNextStep extends NextStepImpl {
  url: string;
}