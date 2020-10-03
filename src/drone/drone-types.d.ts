import { LEFT, MOVE, RIGHT } from "./drone-actions-constants";
import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "./direction-constants";

export type DroneActionTypes = typeof LEFT | typeof MOVE | typeof RIGHT;
export type DirectionTypes = typeof EAST_DIRECTION | typeof NORTH_DIRECTION | typeof SOUTH_DIRECTION | typeof WEST_DIRECTION;

export interface IDroneActions {
  getActions(actionsInput: string): DroneActionTypes[]
}

export interface IDroneRotation {
  getRotateTo(action: DroneActionTypes, direction: DirectionTypes): DirectionTypes;
}

export interface IDroneTranslation {
  getTranslateTo(direction: DirectionTypes, coordinateX: number, coordinateY: number): { x: number; y: number; }
}

export interface IDroneCoordinatesAndDirection {
  parseCoordinatesAndDirection(coordinatesAndDirectionInput: string): {
    coordinateX: number,
    coordinateY: number,
    direction: DirectionTypes
  }
}

export interface IDrone {
  coordinateX: number;
  coordinateY: number;
  direction: DirectionTypes;
  do: (action: DroneActionTypes) => void;
}