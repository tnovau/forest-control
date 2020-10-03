import { strictEqual } from "assert";
import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "../src/drone/direction-constants.js";
import { DroneTranslation } from "../src/drone/drone-translation.js";

describe('DroneTranslation', () => {
  const droneTranslation = new DroneTranslation();
  it(`move 1 to the ${EAST_DIRECTION}`, () => {
    const { x, y } = droneTranslation.getTranslateTo(EAST_DIRECTION, 5, 2)
    strictEqual(x, 6);
    strictEqual(y, 2);
  });

  it(`move 1 to the ${WEST_DIRECTION}`, () => {
    const { x, y } = droneTranslation.getTranslateTo(WEST_DIRECTION, 5, 2)
    strictEqual(x, 4);
    strictEqual(y, 2);
  });

  it(`move 1 to the ${NORTH_DIRECTION}`, () => {
    const { x, y } = droneTranslation.getTranslateTo(NORTH_DIRECTION, 5, 2)
    strictEqual(x, 5);
    strictEqual(y, 3);
  });

  it(`move 1 to the ${SOUTH_DIRECTION}`, () => {
    const { x, y } = droneTranslation.getTranslateTo(SOUTH_DIRECTION, 5, 2)
    strictEqual(x, 5);
    strictEqual(y, 1);
  });
});
