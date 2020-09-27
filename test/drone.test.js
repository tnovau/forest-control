import { throws, strictEqual } from "assert";
import { Drone } from "../src/drone/drone.js";
import {
  EAST_COORDINATE,
  NORTH_COORDINATE,
  SOUTH_COORDINATE,
  WEST_COORDINATE
} from "../src/drone/coordinates-constants.js";

describe('Drone', () => {
  [
    EAST_COORDINATE,
    NORTH_COORDINATE,
    SOUTH_COORDINATE,
    WEST_COORDINATE
  ].forEach(coordinate => {
      it(`should read the coordinateX, coordinateY and ${coordinate} direction`, () => {
        const drone = new Drone(`5 4 ${coordinate}`);
        strictEqual(drone.coordinateX, 5);
        strictEqual(drone.coordinateY, 4);
        strictEqual(drone.direction, coordinate);
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
});