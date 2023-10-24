const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('returns an empty array ([]) for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns an empty array ([]) for [2, 3]', () => {
    assert.deepEqual(middle([2, 3]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['little'] for ['home', 'little', 'sweet']", () => {
    assert.deepEqual(middle(['home', 'little', 'sweet']), ['little']);
  });

});

// assertArraysEqual(middle([1]), 'No middle value');
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);