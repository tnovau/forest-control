import { validateIncludesString, validateMinLength, validateStringType } from "../utils/string-validations.js";
import { SIDE_X_SIDE_Y_SEPARATOR } from "./area-to-fly-over-constants.js";
import { AreaToFlyOver } from "./area-to-fly-over.js";

const INPUT_DIMENSIONS_VARIABLE_NAME = 'inputDimensions';
const MINIMUM_INPUT_DIMENSION_LENGTH = 3;

/**
 * @param {string} inputDimensions
 */
const validateInputDimensions = inputDimensions => {
  validateStringType(inputDimensions, INPUT_DIMENSIONS_VARIABLE_NAME);
  validateMinLength(inputDimensions, MINIMUM_INPUT_DIMENSION_LENGTH, INPUT_DIMENSIONS_VARIABLE_NAME);
  validateIncludesString(inputDimensions, SIDE_X_SIDE_Y_SEPARATOR, INPUT_DIMENSIONS_VARIABLE_NAME);
}

export class AreaToFlyOverFactory {
  /** @type {import('./area-to-fly-over-types').IAreaToFlyOverSides} */
  #areaToFlyOverSides;

  /**
   * @param {import('./area-to-fly-over-types').IAreaToFlyOverSides} areaToFlyOverSides
   */
  constructor(areaToFlyOverSides) {
    this.#areaToFlyOverSides = areaToFlyOverSides;
  }

  /**
   * @param {string} inputDimensions
   */
  create(inputDimensions) {
    validateInputDimensions(inputDimensions);
    const { sideX, sideY } = this.#areaToFlyOverSides.getAreaSides(inputDimensions);
    return new AreaToFlyOver(sideX, sideY);
  }
}