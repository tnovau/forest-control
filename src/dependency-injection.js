import pkg from 'rsdi';
const { object, get, default: DIContainer } = pkg;
import { AreaToFlyOverFactory } from "./area-to-fly-over/area-to-fly-over-factory.js";
import { AreaToFlyOverSides } from "./area-to-fly-over/area-to-fly-over-sides.js";
import { DroneActions } from "./drone/drone-actions.js";
import { DroneCoordinatesAndDirection } from "./drone/drone-coordinates-and-direction.js";
import { DroneFactory } from "./drone/drone-factory.js";
import { DroneRotation } from "./drone/drone-rotation.js";
import { DroneTranslation } from "./drone/drone-translation.js";
import { ForestControl } from "./forest-control/forest-control.js";

export const configureDI = () => {
  const container = new DIContainer();
  container.addDefinitions({
    [AreaToFlyOverSides.name]: object(AreaToFlyOverSides),
    [AreaToFlyOverFactory.name]: object(AreaToFlyOverFactory).construct(
      get(AreaToFlyOverSides.name)
    ),
    [DroneActions.name]: object(DroneActions),
    [DroneRotation.name]: object(DroneRotation),
    [DroneTranslation.name]: object(DroneTranslation),
    [DroneCoordinatesAndDirection.name]: object(DroneCoordinatesAndDirection),
    [DroneFactory.name]: object(DroneFactory).construct(
      get(DroneRotation.name),
      get(DroneTranslation.name),
      get(DroneCoordinatesAndDirection.name)
    ),
    [ForestControl.name]: object(ForestControl).construct(
      get(AreaToFlyOverFactory.name),
      get(DroneFactory.name),
      get(DroneActions.name)
    )
  });
  return container;
};
