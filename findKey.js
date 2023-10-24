const assertEqual = function(actual, expected) {
  let positiveMessage = `✔✔ Assertion Passed: ${actual} === ${expected} ✔✔`;
  let negativeMessage = `🛑 Assertion Failed: ${actual} !== ${expected} 🛑`;

  if (actual === expected) {
    console.log(positiveMessage);
  } else {
    console.log(negativeMessage);
  }
};

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    } 
  }
};

module.exports = findKey;

assertEqual(findKey ({
  "The Rusty Spoon": { desserts: 4 },
  "Cafe Mocha": { desserts: 2 },
  "Spice Fusion": { desserts: 3 },
  "Sushi Samba": { desserts: 4 },
  "Pasta Palace": { desserts: 3 },
  "Burger Barn": { desserts: 2 }
}, x => x.desserts === 3), "Spice Fusion")


assertEqual(findKey({
  "New York": { theatres: 12 },
  "Los Angeles": { theatres: 17 },
  "Chicago": { theatres: 8 },
  "Houston": { theatres: 7 },
  "Philadelphia": { theatres: 8 }
}, x => x.theatres === 8), "Chicago")

