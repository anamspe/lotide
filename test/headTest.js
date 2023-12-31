const head = require('../head');
const assert = require('chai').assert;

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1 );
  });
  
  it("returns '90' for ['90']", () => {
    assert.strictEqual(head(['90']), '90');
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
});