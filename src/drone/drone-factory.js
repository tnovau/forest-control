import { Drone } from "./drone.js";

export class DroneFactory {
  /** @type {import('./drone-types').IDroneRotation}*/
  #droneRotation;
  /** @type {import('./drone-types').IDroneTranslation} */
  #droneTranslation;
  /** @type {import('./drone-types').IDroneCoordinatesAndDirection} */
  #droneCoordinatesAndDirection;

  /**
   * @param {import('./drone-types').IDroneRotation} droneRotation
   * @param {import('./drone-types').IDroneTranslation} droneTranslation
   * @param {import('./drone-types').IDroneCoordinatesAndDirection} droneCoordinatesAndDirection
   */
  constructor(
    droneRotation,
    droneTranslation,
    droneCoordinatesAndDirection
  ) {
    this.#droneRotation = droneRotation;
    this.#droneTranslation = droneTranslation;
    this.#droneCoordinatesAndDirection = droneCoordinatesAndDirection;
  }

  /**
   * @param {string} coordinatesAndDirectionInput
   */
  create(coordinatesAndDirectionInput) {
    const {
      coordinateX,
      coordinateY,
      direction
    } = this.#droneCoordinatesAndDirection.parseCoordinatesAndDirection(coordinatesAndDirectionInput);
    return new Drone(this.#droneRotation, this.#droneTranslation, coordinateX, coordinateY, direction);
  }
}