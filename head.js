const assertEqual = require('./assertEqual');

const head = function(array) {
  const value = array[0];

  if (array.length === 0) {
    return undefined;
  }
  return value;
};

module.exports = head;