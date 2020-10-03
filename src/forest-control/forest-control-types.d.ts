import { IDrone } from "../drone/drone-types";

export interface IForestControl {
  process(instructionsInput: string): IDrone[];
}