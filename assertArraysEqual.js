const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let positiveMessage = `🤩 Assertion Passed! The arrays are equal! 🤩`;
  let negativeMessage = `😨 Assertion Failed! The arrays are different... 😨`;

  if (eqArrays(arr1, arr2)) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }
};

module.exports = assertArraysEqual;
