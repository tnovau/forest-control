import { throws, strictEqual } from "assert";
import { DroneCoordinatesAndDirection } from "../src/drone/drone-coordinates-and-direction.js";

describe('DroneCoordinatesAndDirection', () => {
  const droneCoordinatesAndDirection = new DroneCoordinatesAndDirection();

  it('should parse coordinates and direction inputs', () => {
    const { coordinateX, coordinateY, direction } = droneCoordinatesAndDirection.parseCoordinatesAndDirection('5 4 N');

    strictEqual(coordinateX, 5);
    strictEqual(coordinateY, 4);
    strictEqual(direction, 'N');
  });

  describe('should validate that the coordinates and direction input', () => {
    it('is an string', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection(55), new Error('coordinatesAndDirectionInput should be an string.'));
    });

    it('has a minimum of 5 characters - pos X, pos Y and direction -', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('5 5 '), new Error('coordinatesAndDirectionInput should be at least 5 characters length.'));
    });

    it('has two spaces to separate pos X, pos Y and direction', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('555 5'), new Error('coordinatesAndDirectionInput should includes " " 2 times.'));
    });
  });

  describe('should validate that the coordinate X', () => {
    it('is a number', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('A 5 N'), new Error('coordinateX should be a positive value. Received: NaN.'));
    });

    it('is postive or zero number', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('-1 5 N'), new Error('coordinateX should be a positive value. Received: -1.'));
    });
  });

  describe('should validate that the coordinate Y', () => {
    it('is a number', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('5 A N'), new Error('coordinateY should be a positive value. Received: NaN.'));
    });

    it('is postive or zero number', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('5 -1 N'), new Error('coordinateY should be a positive value. Received: -1.'));
    });
  });

  describe('should validate the direction', () => {
    it('is E, N, S or O', () => {
      throws(() => droneCoordinatesAndDirection.parseCoordinatesAndDirection('5 5 A'), new Error('direction should be one of these: E, N, S, O.'));
    });
  });
});
