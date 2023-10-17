// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let positiveMessage = `✔✔ Assertion Passed: ${actual} === ${expected} ✔✔`;
  let negativeMessage = `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;

  if (actual === expected) {
    console.log(positiveMessage);
  } else if (actual !== expected) {
    console.log(negativeMessage);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
