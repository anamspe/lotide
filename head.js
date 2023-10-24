const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }

  const value = array[0];
  return value;
};

module.exports = head;