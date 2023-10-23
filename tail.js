const assertEqual = require('./assertEqual');

const tail = function(array) {
  const value = array.slice(1);

  return value;
};

module.exports = tail;