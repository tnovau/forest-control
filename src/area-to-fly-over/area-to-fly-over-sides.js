import { validateMinLength } from "../utils/string-validations.js";
import { validateIsPositive } from "../utils/number-validations.js";
import { SIDE_X_SIDE_Y_SEPARATOR } from "./area-to-fly-over-constants.js";

const SIDE_X_VARIABLE_NAME = 'sideX';
const SIDE_Y_VARIABLE_NAME = 'sideY';
const SIDE_MIN_LENGTH = 1;

/**
 * @param {string} sideInput
 * @param {string} sideName
 */
const validateAndParseSideInput = (sideInput, sideName) => {
  validateMinLength(sideInput, SIDE_MIN_LENGTH, sideName);
  const side = parseInt(sideInput);
  validateIsPositive(side, sideName);
  return side;
}

export class AreaToFlyOverSides {
  /**
   * @param {string} inputDimensions
   */
  getAreaSides(inputDimensions) {
    const [sideXInput, sideYInput] = inputDimensions.split(SIDE_X_SIDE_Y_SEPARATOR);
    return {
      sideX: validateAndParseSideInput(sideXInput, SIDE_X_VARIABLE_NAME),
      sideY: validateAndParseSideInput(sideYInput, SIDE_Y_VARIABLE_NAME)
    };
  }
}
