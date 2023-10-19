
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const positiveMessage = `😎 Assertion Passed! ${inspect(actual)} === ${inspect(expected)} 😎`;
  const negativeMessage = `😭 Assertion Failed! ${inspect(actual)} !== ${inspect(expected)} 😭`;

  if (eqObjects(actual, expected)) {
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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    let v1 = object1[key];
    let v2 = object2[key];
    if (Array.isArray(v1) && Array.isArray(v2)) {
      if (!eqArrays(v1, v2)) {
        return false;
      }
    } else {
      if (v1 !== v2) {
        return false;
      }
    }
  }
  return true;
};


assertObjectsEqual(
  { a: 1, b: 2, c: 8},
  { c: 8, a: 1, b: 2}
);
assertObjectsEqual(
  {game: 'Valorant', agentYes: 'Sage', agentNo: 'Neon'},
  {game: 'Fortnite', agentYes: 'Peely', agentNo: 'Caws'}
);
assertObjectsEqual(
  {singer: 'Ed Sheeran', songs: ['Perfect', 'Dive', 'Lego House', 'Sing!']},
  {songs: ['Perfect', 'Dive', 'Lego House', 'Sing!'], singer: 'Ed Sheeran'}
);