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

const takeUntil = function(array, callback) {
  let newArr = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      newArr.push(item);
    }
  }
  return newArr;  
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

console.log(takeUntil([24, 26, 27, 29, 32], x => x > 28))

assertArraysEqual(takeUntil([1, 2, 3, 4, 5, 6, 7, 8, 9], x => x > 6), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(takeUntil([24, 26, 27, 29, 32], x => x > 28), [24, 26, 27])
