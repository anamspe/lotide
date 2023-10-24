const assert = require('chai').assert;
const countLetters = require('../countLetters');

const str = "hello"
const result = countLetters(str);

describe('#countLetters', () => {
  it('returns { h: 1, e: 1, l: 2, o: 1} for the string "hello"', () => {
    assert.deepEqual(countLetters("hello"), result);
  });
});

