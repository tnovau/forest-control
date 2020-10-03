export interface GetAreaSidesResult {
  sideX: number;
  sideY: number;
}

export interface IAreaToFlyOverSides {
  getAreaSides(inputDimensions: string): GetAreaSidesResult;
}
