import halve from '../src/index.ts';
import { expect } from 'chai';

describe('Example', function() {
  it("should halve an array of values", function() {
    const input = [2, 3, 4];
    const result = halve(input);
    expect(result).to.deep.equal([1, 1.5, 2]);
  });
});
