import { LEFT, MOVE, RIGHT } from "./drone-actions-constants";
import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "./direction-constants";

export type DroneActionTypes = typeof LEFT | typeof MOVE | typeof RIGHT;
export type DirectionTypes = typeof EAST_DIRECTION | typeof NORTH_DIRECTION | typeof SOUTH_DIRECTION | typeof WEST_DIRECTION;
