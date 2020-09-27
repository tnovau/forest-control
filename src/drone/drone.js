import { DroneActions } from "./drone-actions.js";
import { DroneCoordinatesAndDirection } from "./drone-coordinates-and-direction-input.js";
import { DroneRotation } from "./drone-rotation.js";
import { MOVE } from "./drone-actions-constants.js";
import { DroneTranslation } from "./drone-translation.js";

export class Drone {
  /** @type {import('./drone-rotation').DroneRotation}*/
  #droneRotation;
  /** @type {import('./drone-translation').DroneTranslation} */
  #droneTranslation;

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
    this.#droneRotation = new DroneRotation();
    this.#droneTranslation = new DroneTranslation();
  }

  /**
   * @param {string} actionsInput
   */
  do(actionsInput) {
    new DroneActions(actionsInput)
      .actions
      .forEach(action => {
        if (action === MOVE) {
          const { x, y } = this.#droneTranslation.translate(
            this.direction,
            this.coordinateX,
            this.coordinateY
          );
          this.coordinateX = x;
          this.coordinateY = y;
        } else {
          this.direction = this.#droneRotation.getRotateTo(action, this.direction);
        }
      });
  }
}
