const assertArraysEqual = function(arr1, arr2) {
  let positiveMessage = `🤩 Assertion Passed! The arrays are equal! 🤩`;
  let negativeMessage = `😨 Assertion Failed! The arrays are different... 😨`;

  if (eqArrays(arr1, arr2)) {
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

const middle = function(arr) {
  let middleArr = [];
  if (arr.length < 3) {
    return middleArr;
  } else if (arr.length % 2 !== 0) {
    middleArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    middleArr.push(arr[Math.floor((arr.length / 2) -1)]);
    middleArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return middleArr;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
