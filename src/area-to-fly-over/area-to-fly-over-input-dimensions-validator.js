import { validateIncludesString, validateMinLength, validateStringType } from "../utils/string-validations.js";
import { SIDE_A_SIDE_B_SEPARATOR } from "./area-to-fly-over-constants.js";

const INPUT_DIMENSIONS_VARIABLE_NAME = 'inputDimensions';
const MINIMUM_INPUT_DIMENSION_LENGTH = 3;

export class AreaToFlyOverInputDimensionsValidator {
  /**
   * @param {string} inputDimensions
   */
  validateInputDimensions(inputDimensions) {
    validateStringType(inputDimensions, INPUT_DIMENSIONS_VARIABLE_NAME);
    validateMinLength(inputDimensions, MINIMUM_INPUT_DIMENSION_LENGTH, INPUT_DIMENSIONS_VARIABLE_NAME);
    validateIncludesString(inputDimensions, SIDE_A_SIDE_B_SEPARATOR, INPUT_DIMENSIONS_VARIABLE_NAME);
  }
}