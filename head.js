const assertEqual = function(actual, expected) {
  let positiveMessage = `✔✔ Assertion Passed: ${actual} === ${expected} ✔✔`;
  let negativeMessage = `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;

  if (actual === expected) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }
};

const head = function(array) {
  const value = array[0];

  if (array.length === 0) {
    return undefined;
  }
  return value;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([90]), 90);
