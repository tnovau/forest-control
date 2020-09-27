import { DroneCoordinatesAndDirection } from "./drone-coordinates-and-direction-input.js";

export class Drone {
  /**
   * @param {string} coordinatesAndDirectionInput
   */
  constructor(coordinatesAndDirectionInput) {
    const {
      coordinateX,
      coordinateY,
      direction
    } = new DroneCoordinatesAndDirection(coordinatesAndDirectionInput);
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.direction = direction;
  }
}