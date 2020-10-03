import { strictEqual } from "assert";
import { LEFT, RIGHT } from "../src/drone/drone-actions-constants.js";
import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "../src/drone/direction-constants.js";
import { DroneRotation } from "../src/drone/drone-rotation.js";

describe('DroneRotation', () => {
  const droneRotation = new DroneRotation();
  const recursiveRotate = (action, direction, n = 1) => {
    if (n === 1) {
      return droneRotation.getRotateTo(action, direction);
    }
    return recursiveRotate(action, droneRotation.getRotateTo(action, direction), n - 1)
  }

  it(`should rotate from ${EAST_DIRECTION} to ${SOUTH_DIRECTION} 90º`, () => {
    strictEqual(recursiveRotate(RIGHT, EAST_DIRECTION), SOUTH_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${WEST_DIRECTION} 180º`, () => {
    strictEqual(recursiveRotate(RIGHT, EAST_DIRECTION, 2), WEST_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${NORTH_DIRECTION} 270º`, () => {
    strictEqual(recursiveRotate(RIGHT, EAST_DIRECTION, 3), NORTH_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${EAST_DIRECTION} 360º`, () => {
    strictEqual(recursiveRotate(RIGHT, EAST_DIRECTION, 4), EAST_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${NORTH_DIRECTION} -90º`, () => {
    strictEqual(recursiveRotate(LEFT, EAST_DIRECTION), NORTH_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${WEST_DIRECTION} -180º`, () => {
    strictEqual(recursiveRotate(LEFT, EAST_DIRECTION, 2), WEST_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${SOUTH_DIRECTION} -270º`, () => {
    strictEqual(recursiveRotate(LEFT, EAST_DIRECTION, 3), SOUTH_DIRECTION);
  });

  it(`should rotate from ${EAST_DIRECTION} to ${EAST_DIRECTION} -360º`, () => {
    strictEqual(recursiveRotate(LEFT, EAST_DIRECTION, 4), EAST_DIRECTION);
  });
});
