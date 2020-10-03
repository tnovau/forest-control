import { strictEqual } from "assert";
import sinon from "sinon";
import { EAST_DIRECTION, NORTH_DIRECTION } from "../src/drone/direction-constants.js";
import { LEFT, MOVE } from "../src/drone/drone-actions-constants.js";
import { Drone } from "../src/drone/drone.js";

describe('Drone', () => {
  const getDroneWithMocks = () => {
    /** @type {import('../src/drone/drone-types').IDroneRotation} */
    const droneRotationMock = {
      getRotateTo: sinon.fake.returns(NORTH_DIRECTION)
    };
    /** @type {import('../src/drone/drone-types').IDroneTranslation} */
    const droneTranslationMock = {
      getTranslateTo: sinon.fake.returns({
        x: 2,
        y: 7
      })
    };

    const drone = new Drone(droneRotationMock, droneTranslationMock, 4, 3, EAST_DIRECTION)

    return {
      drone,
      droneRotationMock,
      droneTranslationMock
    }
  }

  it(`should do ${LEFT}`, () => {
    const { drone, droneRotationMock } = getDroneWithMocks();

    drone.do(LEFT);

    /** @type {sinon.SinonSpy} */
    const spy = droneRotationMock.getRotateTo;
    const [action, direction] = spy.firstCall.args;
    strictEqual(drone.direction, NORTH_DIRECTION);
    strictEqual(action, LEFT)
    strictEqual(direction, EAST_DIRECTION);
  });

  it(`should do ${MOVE}`, () => {
    const { drone, droneTranslationMock } = getDroneWithMocks();

    drone.do(MOVE);

    /** @type {sinon.SinonSpy} */
    const spy = droneTranslationMock.getTranslateTo;
    const [direction, x, y] = spy.firstCall.args;
    strictEqual(drone.coordinateX, 2);
    strictEqual(drone.coordinateY, 7)
    strictEqual(direction, EAST_DIRECTION);
    strictEqual(x, 4);
    strictEqual(y, 3);
  });
});