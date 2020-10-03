export class AreaToFlyOver {
  /**
   * @param {number} sideX
   * @param {number} sideY
   */
  constructor(sideX, sideY) {
    this.sideX = sideX;
    this.sideY = sideY;
  }

  /**
   * @param {import('../drone/drone-types').IDrone} drone
   */
  validateDroneStartingPointIsInsideAreaToFlyOver(drone) {
    if (drone.coordinateX > this.sideX || drone.coordinateY > this.sideY) {
      throw new Error(`This drone can't start in this position. X: ${drone.coordinateX}, Y: ${drone.coordinateY}.`);
    }
  }
}