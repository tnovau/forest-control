import { throws } from "assert";
import { EAST_DIRECTION } from "../src/drone/direction-constants.js";
import { DroneActions } from "../src/drone/drone-actions.js";

describe('DroneActions', () => {
  describe('should validate the drone actions', () => {
    const droneActions = new DroneActions();
    it('is L, M, R', () => {
      throws(() => {
        droneActions.getActions(`5 4 ${EAST_DIRECTION}`);
      }, new Error('action should be one of these: L, M, R.'));
    });
  });
});
