const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result.length, words.length - 1); // ensure the length of tail is one less than the length of the original array
assertEqual(result[0], words[1]); //ensure the first element of the returned array is the second element of the original array


const empty = [];
assertEqual(tail(empty).length, 0);
assertEqual(tail([458]).length, 0);