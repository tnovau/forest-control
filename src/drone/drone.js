import { MOVE } from "./drone-actions-constants.js";

export class Drone {
  /** @type {import('./drone-types').IDroneRotation}*/
  #droneRotation;
  /** @type {import('./drone-types').IDroneTranslation} */
  #droneTranslation;

  /**
   * @param {import('./drone-types').IDroneRotation} droneRotation
   * @param {import('./drone-types').IDroneTranslation} droneTranslation
   * @param {number} coordinateX
   * @param {number} coordinateY
   * @param {import('./drone-types').DirectionTypes} direction
   */
  constructor(
    droneRotation,
    droneTranslation,
    coordinateX,
    coordinateY,
    direction
  ) {
    this.#droneRotation = droneRotation;
    this.#droneTranslation = droneTranslation;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.direction = direction;
  }

  /**
   * @param {import('./drone-types').DroneActionTypes} action
   */
  do(action) {
    if (action === MOVE) {
      const { x, y } = this.#droneTranslation.getTranslateTo(
        this.direction,
        this.coordinateX,
        this.coordinateY
      );
      this.coordinateX = x;
      this.coordinateY = y;
    } else {
      this.direction = this.#droneRotation.getRotateTo(action, this.direction);
    }
  }
}
