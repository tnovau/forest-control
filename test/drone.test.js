import { throws, strictEqual } from "assert";
import { Drone } from "../src/drone/drone.js";
import { LEFT, MOVE, RIGHT } from "../src/drone/drone-actions-constants.js";
import {
  EAST_DIRECTION,
  NORTH_DIRECTION,
  SOUTH_DIRECTION,
  WEST_DIRECTION
} from "../src/drone/direction-constants.js";

describe('Drone', () => {
  [
    EAST_DIRECTION,
    NORTH_DIRECTION,
    SOUTH_DIRECTION,
    WEST_DIRECTION
  ].forEach(coordinate => {
      it(`should read the coordinateX, coordinateY and ${coordinate} direction`, () => {
        const drone = new Drone(`5 4 ${coordinate}`);
        strictEqual(drone.coordinateX, 5);
        strictEqual(drone.coordinateY, 4);
        strictEqual(drone.direction, coordinate);
      });
    });

  describe('Rotation', () => {
    it(`should rotate from ${EAST_DIRECTION} to ${SOUTH_DIRECTION} 90º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(RIGHT);
      strictEqual(drone.direction, SOUTH_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${WEST_DIRECTION} 180º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${RIGHT}${RIGHT}`);
      strictEqual(drone.direction, WEST_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${NORTH_DIRECTION} 270º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${RIGHT}${RIGHT}${RIGHT}`);
      strictEqual(drone.direction, NORTH_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${EAST_DIRECTION} 360º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${RIGHT}${RIGHT}${RIGHT}${RIGHT}`);
      strictEqual(drone.direction, EAST_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${NORTH_DIRECTION} -90º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(LEFT);
      strictEqual(drone.direction, NORTH_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${WEST_DIRECTION} -180º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${LEFT}${LEFT}`);
      strictEqual(drone.direction, WEST_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${SOUTH_DIRECTION} -270º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${LEFT}${LEFT}${LEFT}`);
      strictEqual(drone.direction, SOUTH_DIRECTION);
    });

    it(`should rotate from ${EAST_DIRECTION} to ${EAST_DIRECTION} -360º`, () => {
      const drone = new Drone(`5 4 ${EAST_DIRECTION}`);
      drone.do(`${LEFT}${LEFT}${LEFT}${LEFT}`);
      strictEqual(drone.direction, EAST_DIRECTION);
    });
  });

  describe('Translation', () => {
    it(`move 1 to the ${EAST_DIRECTION}`, () => {
      const drone = new Drone(`5 2 ${EAST_DIRECTION}`);
      drone.do(MOVE);
      strictEqual(drone.coordinateX, 6);
      strictEqual(drone.coordinateY, 2);
    });

    it(`move 1 to the ${WEST_DIRECTION}`, () => {
      const drone = new Drone(`5 2 ${WEST_DIRECTION}`);
      drone.do(MOVE);
      strictEqual(drone.coordinateX, 4);
      strictEqual(drone.coordinateY, 2);
    });

    it(`move 1 to the ${NORTH_DIRECTION}`, () => {
      const drone = new Drone(`5 2 ${NORTH_DIRECTION}`);
      drone.do(MOVE);
      strictEqual(drone.coordinateX, 5);
      strictEqual(drone.coordinateY, 3);
    });

    it(`move 1 to the ${SOUTH_DIRECTION}`, () => {
      const drone = new Drone(`5 2 ${SOUTH_DIRECTION}`);
      drone.do(MOVE);
      strictEqual(drone.coordinateX, 5);
      strictEqual(drone.coordinateY, 1);
    });
  });

  describe('should validate that the coordinates and direction input', () => {
    it('is an string', () => {
      throws(() => new Drone(55), new Error('coordinatesAndDirectionInput should be an string.'));
    });

    it('has a minimum of 5 characters - pos X, pos Y and direction -', () => {
      throws(() => new Drone('5 5 '), new Error('coordinatesAndDirectionInput should be at least 5 characters length.'));
    });

    it('has two spaces to separate pos X, pos Y and direction', () => {
      throws(() => new Drone('555 5'), new Error('coordinatesAndDirectionInput should includes " " 2 times.'));
    });
  });

  describe('should validate that the coordinate X', () => {
    it('is a number', () => {
      throws(() => new Drone('A 5 N'), new Error('coordinateX should be a positive value. Received: NaN.'));
    });

    it('is postive or zero number', () => {
      throws(() => new Drone('-1 5 N'), new Error('coordinateX should be a positive value. Received: -1.'));
    });
  });

  describe('should validate that the coordinate Y', () => {
    it('is a number', () => {
      throws(() => new Drone('5 A N'), new Error('coordinateY should be a positive value. Received: NaN.'));
    });

    it('is postive or zero number', () => {
      throws(() => new Drone('5 -1 N'), new Error('coordinateY should be a positive value. Received: -1.'));
    });
  });

  describe('should validate the direction', () => {
    it('is E, N, S or O', () => {
      throws(() => new Drone('5 5 A'), new Error('direction should be one of these: E, N, S, O.'));
    });
  });

  describe('should validate the drone actions', () => {
    it('is L, M, R', () => {
      throws(() => new Drone(`5 4 ${EAST_DIRECTION}`).do('LRLRMA'), new Error('action should be one of these: L, M, R.'));
    });
  });
});