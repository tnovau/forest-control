import sinon from "sinon";
import { strictEqual } from "assert";
import { Drone } from "../src/drone/drone.js";
import { DroneFactory } from "../src/drone/drone-factory.js";
import { EAST_DIRECTION } from "../src/drone/direction-constants.js";

describe('DroneFactory', () => {
  it('should setCoordinatesAndDirectionInput', () => {
    /** @type {import('../src/drone/drone-types').IDroneCoordinatesAndDirection} */
    const droneCordinatesAndDirectionMock = {
      parseCoordinatesAndDirection: sinon.fake.returns({
        coordinateX: 5,
        coordinateY: 4,
        direction: EAST_DIRECTION
      })
    };
    /** @type {import('../src/drone/drone-types').IDroneRotation} */
    const droneRotationMock = {
      getRotateTo: sinon.fake()
    };
    /** @type {import('../src/drone/drone-types').IDroneTranslation} */
    const droneTranslationMock = {
      getTranslateTo: sinon.fake()
    };
    const droneFactory = new DroneFactory(
      droneRotationMock,
      droneTranslationMock,
      droneCordinatesAndDirectionMock
    );

    const drone = droneFactory.create("");

    strictEqual(drone instanceof Drone, true);
    strictEqual(drone.coordinateX, 5);
    strictEqual(drone.coordinateY, 4);
    strictEqual(drone.direction, EAST_DIRECTION);
  });
});
