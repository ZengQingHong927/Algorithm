/*
 * Recurceive merge sorting
 */

const _ = require('lodash');

const mergerSort = (arr) => {
    const len = arr.length;
    
    // termination of condition
    if (len < 2) {
      return arr
    }
    // sperate an array into two partition
    let middle = Math.floor(len / 2);
    const left = arr.splice(0,middle);
    const right = arr;

    return merge(mergerSort(left),mergerSort(right));
  }

const merge = (left,right) => {
  const result = [];

  // comparision and sorting
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}

const genRandomNumber = (amount) => {
  var numberList = [];
  while (numberList.length < amount) {
    numberList.push(_.random(999));
  }
  return numberList;
}
const arr = genRandomNumber(10);
const start = Date.now();
const result = mergerSort(arr);
const duration = Date.now() - start;
console.log('Consuming time: ', duration);
console.log('Sorting array: ', result);