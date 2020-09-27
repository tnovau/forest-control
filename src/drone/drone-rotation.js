import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "./direction-constants.js";
import { RIGHT } from "./drone-actions-constants.js";

const rotateToRightMap = {
  [EAST_DIRECTION]: SOUTH_DIRECTION,
  [SOUTH_DIRECTION]: WEST_DIRECTION,
  [WEST_DIRECTION]: NORTH_DIRECTION,
  [NORTH_DIRECTION]: EAST_DIRECTION
}

const rotateToLeftMap = {
  [EAST_DIRECTION]: NORTH_DIRECTION,
  [NORTH_DIRECTION]: WEST_DIRECTION,
  [WEST_DIRECTION]: SOUTH_DIRECTION,
  [SOUTH_DIRECTION]: EAST_DIRECTION
}

export class DroneRotation {
  /**
   * @param {import('./drone-types').DroneActionTypes} action
   * @param {import('./drone-types').DirectionTypes} direction
   */
  getRotateTo(action, direction) {
    if (action === RIGHT) {
      return rotateToRightMap[direction];
    }
    return rotateToLeftMap[direction];
  }
}