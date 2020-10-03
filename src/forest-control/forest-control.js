import { AreaToFlyOver } from "../area-to-fly-over/area-to-fly-over.js";
import { Drone } from "../drone/drone.js";

export class ForestControl {
  /**
   * @param {string} instructionsInput
   */
  process(instructionsInput) {
    const [
      areaToFlyOverDimensions,
      ...droneConfigurations
    ] = instructionsInput
      .split('\r\n')
      .join('\n')
      .split('\n');

    const areaToFlyOver = new AreaToFlyOver(areaToFlyOverDimensions);

    for (let i = 0; i < droneConfigurations.length; i += 2) {
      const coordinatesAndDirectionInput = droneConfigurations[i];
      const actionsToDo = droneConfigurations[i + 1];

      const drone = new Drone(coordinatesAndDirectionInput);
      areaToFlyOver.validateDroneStartingPointIsInsideAreaToFlyOver(drone);
      drone.do(actionsToDo);
      console.log(drone.coordinateX, drone.coordinateY, drone.direction);
    }
  }
}