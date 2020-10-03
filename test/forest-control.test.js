import sinon from "sinon";
import { strictEqual } from "assert";
import { MOVE } from "../src/drone/drone-actions-constants.js";
import { EAST_DIRECTION } from "../src/drone/direction-constants.js";
import { ForestControl } from "../src/forest-control/forest-control.js";

describe('ForestControl', () => {
  const createForestControl = () => {
    /** @type {import('../src/area-to-fly-over/area-to-fly-over-types').IAreaToFlyOver} */
    const areaToFlyOverCreated = {
      validateDroneStartingPointIsInsideAreaToFlyOver: sinon.fake()
    };
    /** @type {import('../src/area-to-fly-over/area-to-fly-over-types').IAreaToFlyOverFactory} */
    const areaToFlyOverFactory = {
      create: sinon.fake.returns(areaToFlyOverCreated)
    }
    /** @type {import('../src/drone/drone-types').IDrone} */
    const droneCreated = {
      coordinateX: 2,
      coordinateY: 2,
      direction: EAST_DIRECTION,
      do: sinon.fake()
    }
    /** @type {import('../src/drone/drone-types').IDroneFactory} */
    const droneFactory = {
      create: sinon.fake.returns(droneCreated)
    }
    /** @type {import('../src/drone/drone-types').DroneActionTypes[]} */
    const droneActionsResult = [MOVE]
    /** @type {import('../src/drone/drone-types').IDroneActions} */
    const droneActions = {
      getActions: sinon.fake.returns(droneActionsResult)
    }

    const forestControl = new ForestControl(
      areaToFlyOverFactory,
      droneFactory,
      droneActions
    );

    return {
      areaToFlyOverFactory,
      areaToFlyOverCreated,
      droneActionsResult,
      droneActions,
      droneCreated,
      droneFactory,
      forestControl
    };
  }

  const instructions = "5 5\n3 3 E\nL";

  it('should call the factory to create the area to fly over', () => {
    const { forestControl, areaToFlyOverFactory } = createForestControl();

    forestControl.process(instructions);

    /** @type {sinon.SinonSpy} */
    const spy = areaToFlyOverFactory.create;
    const [areaToFlyOverDimensions] = spy.firstCall.args;
    strictEqual(areaToFlyOverDimensions, "5 5");
  });

  it('should call drone actions to get the actions', () => {
    const { forestControl, droneActions } = createForestControl();

    forestControl.process(instructions);

    /** @type {sinon.SinonSpy} */
    const spy = droneActions.getActions;
    const [actionsInput] = spy.firstCall.args;
    strictEqual(actionsInput, "L");
  });

  it('should call the factory to create the drone', () => {
    const { forestControl, droneFactory } = createForestControl();

    forestControl.process(instructions);

    /** @type {sinon.SinonSpy} */
    const spy = droneFactory.create;
    const [droneCoordinatesAndDirection] = spy.firstCall.args;
    strictEqual(droneCoordinatesAndDirection, "3 3 E");
  });

  it('should call the drone to do actions', () => {
    const { forestControl, droneActionsResult, droneCreated } = createForestControl();

    forestControl.process(instructions);

    /** @type {sinon.SinonSpy} */
    const spy = droneCreated.do;
    const [actions] = spy.firstCall.args;
    strictEqual(actions, droneActionsResult[0]);
  });

  it('should return drones', () => {
    const { forestControl, droneCreated } = createForestControl();

    const drones = forestControl.process(instructions);

    strictEqual(drones[0], droneCreated);
  });
});