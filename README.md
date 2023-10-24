# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ana_franco/lotide`

**Require it:**

`const _ = require('@ana_franco/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: function that tests if two elements are equal
* `assertEqual`: test checks if elements are "equal" 
* `assertArraysEqual`: function that takes two arrays as arguments and compares them, returning true if their lengths are equal, elements, and order of elements are the same
* `eqObjects`: function that takes two objects as arguments and compares them, returns true if both objects have identical keys with identical values
* `assertObjectsEqual`: test checks if objects are equal
* `head`: function that returns the first value of a given array
* `tail`: function that returns a new array with the end values of a given array (all elements, but the first)
* `middle`: function that returns the middle value(s) of an array (one value if there's an odd number of values and two values if there's an even number of values if the array)
* `countLetters`: function that takes a string as argument and returns an object with the amount of times each value appeared on that string, ignoring spaces
* `countOnly`: function that takes two arguments: 'allItems' and 'itemsToCount'. allItems is an array of strings that will be looked through. itemsToCount is an object specifying what to count.
* `findKey`: function that takes an object and a callback as arguments. The function will return the first key for which the callback returns a truthy value. 
* `findKeyByValue`: function that takes an object and a value as arguments. The function will return the first key which contains the given value.
* `letterPositions`: function that returns an object with all the indices in the string where each character is found.
* `takeUntil`: function that takes an array and a callback as arguments. The function will return a slice of the aray with elements taken from the beginning. It will keep going until the callback returns a truthy value.
* `without`: function that takes a source array and a itemsToRemove array as arguments. The function will return a new array with only those elements from source that are not present in the itemsToRemove array.