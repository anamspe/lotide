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
    if (letter !== ' ') {
      if (count[letter]) {
      count[letter] += 1; 
    } else {
      count[letter] = 1;
    }
   }
  }
  return count;
};

let result = countLetters("hello");
assertEqual(result["h"], 1);
assertEqual(result["e"], 1);
assertEqual(result["l"], 2);
assertEqual(result["o"], 1);