import { AreaToFlyOverInputDimensionsValidator } from "./area-to-fly-over-input-dimensions-validator.js";
import { AreaToFlyOverSideInputs } from "./area-to-fly-over-side-inputs.js";

export class AreaToFlyOver {
  /**
   * @param {string} inputDimensions
   */
  constructor(inputDimensions) {
    new AreaToFlyOverInputDimensionsValidator().validateInputDimensions(inputDimensions);
    const { sideA, sideB } = new AreaToFlyOverSideInputs(inputDimensions);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}