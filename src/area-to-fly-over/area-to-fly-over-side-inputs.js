import { validateMinLength } from "../utils/string-validations.js";
import { validateIsPositive } from "../utils/number-validations.js";
import { SIDE_A_SIDE_B_SEPARATOR } from "./area-to-fly-over-constants.js";

const SIDE_A_VARIABLE_NAME = 'sideA';
const SIDE_B_VARIABLE_NAME = 'sideB';
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

export class AreaToFlyOverSideInputs {
  /**
   * @param {string} inputDimensions
   */
  constructor(inputDimensions) {
    const [sideAInput, sideBInput] = inputDimensions.split(SIDE_A_SIDE_B_SEPARATOR);
    this.sideA = validateAndParseSideInput(sideAInput, SIDE_A_VARIABLE_NAME);
    this.sideB = validateAndParseSideInput(sideBInput, SIDE_B_VARIABLE_NAME);
  }
}
