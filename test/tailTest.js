const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

describe('#tail', () => {
  it("makes sure the original array was not altered by the tail function", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
    assert.strictEqual(words.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  
  it("returns [3, 4, 5, 6] for [2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([2, 3, 4, 5, 6]), [3, 4, 5, 6]);
  });

  it("returns an empty array ([]) for [458]", () => {
    assert.deepEqual(tail([458]), []);
  });

  it("returns an empty array ([]) for []", () => {
    assert.deepEqual(tail([]), []);
  });

});

