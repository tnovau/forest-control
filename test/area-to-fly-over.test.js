import { throws, strictEqual } from "assert";
import { AreaToFlyOver } from "../src/area-to-fly-over/area-to-fly-over.js";

describe('AreaToFlyOver', () => {
  it('should create a valid Area to fly over with valid input dimensions', () => {
    const expectedSideA = 5;
    const expectedSideB = 4;

    const areaToFlyOver = new AreaToFlyOver(`${expectedSideA} ${expectedSideB}`);

    strictEqual(areaToFlyOver.sideA, expectedSideA);
    strictEqual(areaToFlyOver.sideB, expectedSideB);
  });

  describe('should validate that the input dimensions', () => {
    it('is an string', () => {
      throws(() => new AreaToFlyOver(55), new Error('inputDimensions should be an string.'));
    });

    it('has a minimum of 3 characters - side A, space, side B -', () => {
      throws(() => new AreaToFlyOver('55'), new Error('inputDimensions should be at least 3 characters length.'));
    });

    it('has an space to separate side A and side B', () => {
      throws(() => new AreaToFlyOver('555'), new Error('inputDimensions should includes " ".'));
    });
  });

  describe('should validate each side input', () => {
    it('sideAInput is an string with at least one character', () => {
      throws(() => new AreaToFlyOver(' 55'), new Error('sideA should be at least 1 characters length.'));
    });

    it('sideBInput is an string with at least one character', () => {
      throws(() => new AreaToFlyOver('55 '), new Error('sideB should be at least 1 characters length.'));
    });

    it('sideAInput results in a number', () => {
      throws(() => new AreaToFlyOver('A 5'), new Error('sideA should be a positive value. Received: NaN.'));
    });

    it('sideBInput results in a number', () => {
      throws(() => new AreaToFlyOver('55 B'), new Error('sideB should be a positive value. Received: NaN.'));
    });

    it('sideAInput results in a positive number', () => {
      throws(() => new AreaToFlyOver('-55 5'), new Error('sideA should be a positive value. Received: -55.'));
    });

    it('sideBInput results in a positive number', () => {
      throws(() => new AreaToFlyOver('55 -5'), new Error('sideB should be a positive value. Received: -5.'));
    });
  });
});