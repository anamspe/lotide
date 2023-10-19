const assertEqual = function(actual, expected) {
  let positiveMessage = `✔✔ Assertion Passed: ${actual} === ${expected} ✔✔`;
  let negativeMessage = `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;

  if (actual === expected) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }
};

const countLetters = function(string) {
  let count = {}

  for (letter of string) {
    if (letter !== ' ' && count[letter]) {
      count[letter] += 1; 
    } else if (letter !== ' ' && !count[letter]) {
      count[letter] = 1;
    }
  }

  console.log(count);
};

countLetters("the streets are made of square blocks");