import { throws, strictEqual } from "assert";
import { AreaToFlyOverSides } from "../src/area-to-fly-over/area-to-fly-over-sides.js";

describe('AreaToFlyOverSides', () => {
  it('should return the area sides parsed', () => {
    const expectedSideX = 5;
    const expectedSideY = 4;

    const { sideX, sideY } = new AreaToFlyOverSides().getAreaSides(`${expectedSideX} ${expectedSideY}`);

    strictEqual(sideX, expectedSideX);
    strictEqual(sideY, expectedSideY);
  });

  describe('should validate each side input', () => {
    it('sideXInput is an string with at least one character', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides(' 55'), new Error('sideX should be at least 1 characters length.'));
    });

    it('sideYInput is an string with at least one character', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides('55 '), new Error('sideY should be at least 1 characters length.'));
    });

    it('sideXInput results in a number', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides('A 5'), new Error('sideX should be a positive value. Received: NaN.'));
    });

    it('sideYInput results in a number', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides('55 B'), new Error('sideY should be a positive value. Received: NaN.'));
    });

    it('sideXInput results in a positive number', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides('-55 5'), new Error('sideX should be a positive value. Received: -55.'));
    });

    it('sideYInput results in a positive number', () => {
      throws(() => new AreaToFlyOverSides().getAreaSides('55 -5'), new Error('sideY should be a positive value. Received: -5.'));
    });
  });
});
