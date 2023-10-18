const assertArraysEqual = function(arr1, arr2) {
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

const without = function(src, rmv) {
  let newArr = [];
  for (let i = 0; i < src.length; i++) {
    if (!rmv.includes(src[i])) {
      newArr.push(src[i]);
    }
  }
  console.log("Source Array is:", src);
  console.log("Items to Remove Array is:", rmv);
  console.log("New Array is:", newArr);   
  return newArr;
}



// const without = function(src, rmv) {
//   let newArr = src.filter(item => rmv.includes(item) === false);
//   // console.log("Source Array is:", src);
//   // console.log("Items to Remove Array is:", rmv);
//   // console.log("New Array is:", newArr);  
//   return newArr;
// };

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);