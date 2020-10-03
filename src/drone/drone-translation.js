import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "./direction-constants.js";

/**
 * @type {Record<import('./drone-types').DirectionTypes, (x: number, y: number) => ({ x: number, y: number })>}
 */
const TranslationFunctionMap = {
  [EAST_DIRECTION]: (x, y) => ({ x: x + 1, y }),
  [NORTH_DIRECTION]: (x, y) => ({ x, y: y + 1 }),
  [SOUTH_DIRECTION]: (x, y) => ({ x, y: y - 1 }),
  [WEST_DIRECTION]: (x, y) => ({ x: x - 1, y }),
};

export class DroneTranslation {
  /**
   * @param {import('./drone-types').DirectionTypes} direction
   * @param {number} coordinateX
   * @param {number} coordinateY
   */
  getTranslateTo(direction, coordinateX, coordinateY) {
    return TranslationFunctionMap[direction](coordinateX, coordinateY);
  }
}