import { strictEqual } from "assert";
import { getSumResult } from "../src/sample.js";

describe('getSumResult', () => {
  it('should return 2', () => {
    strictEqual(getSumResult(), 2);
  });
});
