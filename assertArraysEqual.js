const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let positiveMessage = `🤩 Assertion Passed! ${arr1} === ${arr2} 🤩`;
  let negativeMessage = `😨 Assertion Failed! ${arr1} !== ${arr2} 😨`;

  if (eqArrays(arr1, arr2)) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }
};

module.exports = assertArraysEqual;
