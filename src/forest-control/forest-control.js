const INSTRUCTIONS_CHAR_TO_SANITIZE = '\r\n';
const INSTRUCTIONS_CHAR_TO_SPLIT = '\n';

export class ForestControl {
  /** @type {import('../area-to-fly-over/area-to-fly-over-types').IAreaToFlyOverFactory} */
  #areaToFlyOverFactory;
  /** @type {import('../drone/drone-types').IDroneFactory} */
  #droneFactory
  /** @type {import('../drone/drone-types').IDroneActions} */
  #droneActions

  /**
   * @param {import('../area-to-fly-over/area-to-fly-over-types').IAreaToFlyOverFactory} areaToFlyOverFactory
   * @param {import('../drone/drone-types').IDroneFactory} droneFactory
   * @param {import('../drone/drone-types').IDroneActions} droneActions
   */
  constructor(areaToFlyOverFactory, droneFactory, droneActions) {
    this.#areaToFlyOverFactory = areaToFlyOverFactory;
    this.#droneFactory = droneFactory;
    this.#droneActions = droneActions;
  }

  /**
   * @param {string} instructionsInput
   */
  process(instructionsInput) {
    const [
      areaToFlyOverDimensions,
      ...droneConfigurations
    ] = instructionsInput
      .split(INSTRUCTIONS_CHAR_TO_SANITIZE)
      .join(INSTRUCTIONS_CHAR_TO_SPLIT)
      .split(INSTRUCTIONS_CHAR_TO_SPLIT);

    const areaToFlyOver = this.#areaToFlyOverFactory.create(areaToFlyOverDimensions);

    /**
     * @type {import('../drone/drone-types').IDrone[]}
     */
    const drones = [];

    for (let i = 0; i < droneConfigurations.length; i += 2) {
      const coordinatesAndDirectionInput = droneConfigurations[i];
      const actionsToDo = this.#droneActions.getActions(droneConfigurations[i + 1]);

      const drone = this.#droneFactory.create(coordinatesAndDirectionInput);
      areaToFlyOver.validateDroneStartingPointIsInsideAreaToFlyOver(drone);
      actionsToDo.forEach(actionToDo => drone.do(actionToDo));
      drones.push(drone);
    }

    return drones;
  }
}