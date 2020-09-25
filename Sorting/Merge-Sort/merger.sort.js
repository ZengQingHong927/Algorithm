/*
 * Recurceive merge sorting
 */

var     tool                    = require ('../tool');

var     mergerSort              = function (arr)
{
        var     len     = arr.length;
    
        // termination of condition
        if (len < 2) {
                return arr
        }
        // sperate an array into two partition
        let     middle  = Math.floor (len/2);
        let     left    = arr.splice (0, middle);
        let     right   = arr;

        return merge (mergerSort (left), mergerSort (right));
};

var     merge                   = function (left, right)
{
        let     result  = [];

        // comparision and sorting
        while (left.length && right.length) {
                if (left[0] <= right[0]) {
                        result.push (left.shift ());
                }
                else {
                        result.push (right.shift ());
                }
        }

        while (left.length) result.push (left.shift ());

        while (right.length) result.push (right.shift ());

        return result;
};

const arr = tool.genRandomNumber (100);
const start = Date.now();
const result = mergerSort(arr);
const duration = Date.now() - start;
console.log('Consuming time: ', duration);
console.log('Sorting array: ', result);