import sinon from "sinon";
import { throws, strictEqual } from "assert";
import { AreaToFlyOver } from "../src/area-to-fly-over/area-to-fly-over.js";
import { AreaToFlyOverFactory } from "../src/area-to-fly-over/area-to-fly-over-factory.js";

describe('AreaToFlyOverFactory', () => {
  /**
   * @type {import('../src/area-to-fly-over/area-to-fly-over-types').GetAreaSidesResult}
   */
  const getAreaSidesResult = {
    sideX: 5,
    sideY: 4
  }

  const getAreaToFlyOverFactory = () => new AreaToFlyOverFactory({
    getAreaSides: sinon.fake.returns(getAreaSidesResult)
  });

  it('should create a valid Area to fly over with valid input dimensions', () => {
    const areaToFlyOver = getAreaToFlyOverFactory().create("   ");

    strictEqual(areaToFlyOver instanceof AreaToFlyOver, true)
    strictEqual(areaToFlyOver.sideX, getAreaSidesResult.sideX);
    strictEqual(areaToFlyOver.sideY, getAreaSidesResult.sideY);
  });

  describe('should validate that the input dimensions', () => {
    it('is an string', () => {
      throws(() => getAreaToFlyOverFactory().create(55), new Error('inputDimensions should be an string.'));
    });

    it('has a minimum of 3 characters - side A, space, side B -', () => {
      throws(() => getAreaToFlyOverFactory().create('55'), new Error('inputDimensions should be at least 3 characters length.'));
    });

    it('has an space to separate side A and side B', () => {
      throws(() => getAreaToFlyOverFactory().create('555'), new Error('inputDimensions should includes " ".'));
    });
  });
});
