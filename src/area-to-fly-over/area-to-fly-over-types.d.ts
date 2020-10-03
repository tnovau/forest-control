import { IDrone } from "../drone/drone-types";

export interface GetAreaSidesResult {
  sideX: number;
  sideY: number;
}

export interface IAreaToFlyOver {
  sideX: number;
  sideY: number;
  validateDroneStartingPointIsInsideAreaToFlyOver(drone: IDrone): void;
}

export interface IAreaToFlyOverSides {
  getAreaSides(inputDimensions: string): GetAreaSidesResult;
}

export interface IAreaToFlyOverFactory {
  create(inputDimensions: string): IAreaToFlyOver;
}