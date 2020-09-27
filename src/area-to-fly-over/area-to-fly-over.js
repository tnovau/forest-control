import { validateIncludesString, validateMinLength, validateStringType } from "../utils/string-validations.js";
import { AreaToFlyOverSideInputs } from "./area-to-fly-over-side-inputs.js";
import { SIDE_A_SIDE_B_SEPARATOR } from "./area-to-fly-over-constants.js";

const INPUT_DIMENSIONS_VARIABLE_NAME = 'inputDimensions';
const MINIMUM_INPUT_DIMENSION_LENGTH = 3;

/**
 * @param {string} inputDimensions
 */
const validateInputDimensions = inputDimensions => {
  validateStringType(inputDimensions, INPUT_DIMENSIONS_VARIABLE_NAME);
  validateMinLength(inputDimensions, MINIMUM_INPUT_DIMENSION_LENGTH, INPUT_DIMENSIONS_VARIABLE_NAME);
  validateIncludesString(inputDimensions, SIDE_A_SIDE_B_SEPARATOR, INPUT_DIMENSIONS_VARIABLE_NAME);
}

export class AreaToFlyOver {
  /**
   * @param {string} inputDimensions
   */
  constructor(inputDimensions) {
    validateInputDimensions(inputDimensions);
    const { sideA, sideB } = new AreaToFlyOverSideInputs(inputDimensions);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}