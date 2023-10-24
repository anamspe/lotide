const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      // If letter is already in the results, push index to the array:
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
      // If letter is not in the results yet, create array with its index:
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);