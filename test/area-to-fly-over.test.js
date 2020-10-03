import { throws } from "assert";
import { AreaToFlyOver } from "../src/area-to-fly-over/area-to-fly-over.js";


describe('AreaToFlyOver', () => {
  const areaToFlyOver = new AreaToFlyOver(4, 3);

  it('should throw coordinate X is outside area to fly over', () => {
    /**
     * @type {import('../src/drone/drone-types').IDrone}
     */
    const drone = {
      coordinateX: 7,
      coordinateY: 2
    };

    throws(
      () => areaToFlyOver.validateDroneStartingPointIsInsideAreaToFlyOver(drone),
      new Error(`This drone can't start in this position. X: ${drone.coordinateX}, Y: ${drone.coordinateY}.`)
    );
  });

  it('should throw coordinate Y is outside area to fly over', () => {
    /**
     * @type {import('../src/drone/drone-types').IDrone}
     */
    const drone = {
      coordinateX: 2,
      coordinateY: 7
    };

    throws(
      () => areaToFlyOver.validateDroneStartingPointIsInsideAreaToFlyOver(drone),
      new Error(`This drone can't start in this position. X: ${drone.coordinateX}, Y: ${drone.coordinateY}.`)
    );
  });

  it('should not throw if drone coordinates are inside area to fly over ', () => {
    /**
     * @type {import('../src/drone/drone-types').IDrone}
     */
    const drone = {
      coordinateX: 4,
      coordinateY: 3
    };

    areaToFlyOver.validateDroneStartingPointIsInsideAreaToFlyOver(drone);
  });
});