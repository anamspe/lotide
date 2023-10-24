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

// const words = ['peanut', 'lettuce', 'ketchup', 'brick', 'premium', 'royalty', 'cucumber'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;

assertArraysEqual(map(['almond', 'beautiful', 'cruise'], word => word[0]), ['a', 'b', 'c']);
assertArraysEqual(map(['joy', 'fun', 'happy'], word => word[0]), ['j', 'f', 'a']);
assertArraysEqual(map(['camel', 'fox', 'dinosaur'], word => word[0]), ['c', 'f', 'd']);