const assertEqual = function(actual, expected) {
  let positiveMessage = `✔✔ Assertion Passed: ${actual} === ${expected} ✔✔`;
  let negativeMessage = `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;

  if (actual === expected) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // console.log(keys1, keys2);

  //Comparing both array lengths to check if objects have same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  //loop in one of the objects to find keys
  for (let key of keys1) {
    let v1 = object1[key];
    let v2 = object2[key];
    // Check if keys in each object consist of Arrays
    // If they're arrays, call eqArrays to compare them
    if(Array.isArray(v1) && Array.isArray(v2)) {
      eqArrays(v1, v2);
      // in case they're equal, return true, else return false
      if (eqArrays(v1, v2)) {
        return true;
      } return false;
    } else {
      if (v1 !== v2) {
        return false;
      }
    }
    return true;
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);