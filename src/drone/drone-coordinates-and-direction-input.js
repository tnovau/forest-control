import { validateIsZeroOrPositive } from "../utils/number-validations.js";
import {
  validateIncludesString,
  validateMinLength,
  validateStringType,
  validateStringIsOneOf
} from "../utils/string-validations.js";
import { EAST_COORDINATE, NORTH_COORDINATE, SOUTH_COORDINATE, WEST_COORDINATE } from "./coordinates-constants.js";

const COORDINATES_AND_DIRECTION_INPUT_FIELD_NAME = "coordinatesAndDirectionInput";
const COORDINATE_X_FIELD_NAME = "coordinateX";
const COORDINATE_Y_FIELD_NAME = "coordinateY";
const DIRECTION_FIELD_NAME = "direction";
const COORDINATES_AND_DIRECTION_INPUT_SEPARATOR = " ";
const COORDINATES_AND_DIRECTION_INPUT_NUMBER_OF_SEPARATORS = 2;
const COORDINATES_AND_DIRECTION_INPUT_NUMBER_MIN_LENGTH = 5;
const COORDINATES_INPUT_MIN_LENGTH = 1;

/**
 * @param {string} coordinatesAndDirectionInput
 */
const validateDroneCoordinatesAndDirectionInput = coordinatesAndDirectionInput => {
  validateStringType(coordinatesAndDirectionInput, COORDINATES_AND_DIRECTION_INPUT_FIELD_NAME);
  validateMinLength(
    coordinatesAndDirectionInput,
    COORDINATES_AND_DIRECTION_INPUT_NUMBER_MIN_LENGTH,
    COORDINATES_AND_DIRECTION_INPUT_FIELD_NAME);
  validateIncludesString(
    coordinatesAndDirectionInput,
    COORDINATES_AND_DIRECTION_INPUT_SEPARATOR,
    COORDINATES_AND_DIRECTION_INPUT_FIELD_NAME,
    COORDINATES_AND_DIRECTION_INPUT_NUMBER_OF_SEPARATORS);
}

/**
 * @param {string} coordinateInput
 * @param {string} coordinateInputName
 */
const validateAndParseCoordinateInput = (coordinateInput, coordinateInputName) => {
  validateMinLength(coordinateInput, COORDINATES_INPUT_MIN_LENGTH, coordinateInputName);
  const side = parseInt(coordinateInput);
  validateIsZeroOrPositive(side, coordinateInputName);
  return side;
}

const VALID_DIRECTIONS_LOOKUP = {
  [EAST_COORDINATE]: true,
  [NORTH_COORDINATE]: true,
  [SOUTH_COORDINATE]: true,
  [WEST_COORDINATE]: true
}

/**
 * @param {string} directionInput
 */
const validateDirectionInput = directionInput => {
  validateStringIsOneOf(directionInput, VALID_DIRECTIONS_LOOKUP, DIRECTION_FIELD_NAME);
}

export class DroneCoordinatesAndDirection {
  /**
   * @param {string} coordinatesAndDirectionInput
   */
  constructor(coordinatesAndDirectionInput) {
    validateDroneCoordinatesAndDirectionInput(coordinatesAndDirectionInput);
    const [coordinateXInput, coordinateYInput, directionInput] = coordinatesAndDirectionInput.split(
      COORDINATES_AND_DIRECTION_INPUT_SEPARATOR
    );
    this.coordinateX = validateAndParseCoordinateInput(coordinateXInput, COORDINATE_X_FIELD_NAME);
    this.coordinateY = validateAndParseCoordinateInput(coordinateYInput, COORDINATE_Y_FIELD_NAME);
    validateDirectionInput(directionInput);
    this.direction = directionInput;
  }
}