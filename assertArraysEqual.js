function assertArraysEqual(arr1, arr2) {
  let positiveMessage = `🤩 Assertion Passed! The arrays are equal! 🤩`;
  let negativeMessage = `😨 Assertion Failed! The arrays are different... 😨`;

  if (eqArrays(arr1, arr2) === true) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }

};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);