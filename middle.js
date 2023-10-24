const middle = function(arr) {
  let middleArr = [];
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 !== 0) {
    middleArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    middleArr.push(arr[Math.floor((arr.length / 2) -1)]);
    middleArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return middleArr;
}

module.exports = middle;


