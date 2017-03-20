import { expect } from "chai";
import halve from "../src/index";

describe("Example", () => {
  it("should halve an array of values", () => {
    const input = [2, 3, 4];
    const result = halve(input);
    expect(result).to.deep.equal([1, 1.5, 2]);
  });
});
