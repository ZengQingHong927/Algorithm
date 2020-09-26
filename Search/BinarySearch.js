var   { defaultCompareFn }              = require ('../util');
var   { LESS_THAN }                     = require ('../util');
var   { BIGGER_THAN }                   = require ('../util');
var   { DOES_NOT_EXIST }                = require ('../util');
var   { quickSort }                     = require ('../Sorting/QuickSort/quick.sort');


/**
 * 
 * @param {array} arr 
 * @param {number} value 
 * @param {number} idxLow 
 * @param {number} idxHigh 
 * @param {Function} compareFn 
 */
var     BinarySesarchRecursive          = function (arr, value, idxLow, idxHigh, compareFn = defaultCompareFn)
{
        if (idxLow <= idxHigh) {
                let     idxMid          = Math.floor ((idxLow+idxHigh)/2);
                let     base            = arr[idxMid];

                if (compareFn (base, value) === LESS_THAN) {
                        return BinarySesarchRecursive (arr, value, idxMid+1, idxHigh, compareFn);
                }
                else if (compareFn (base, value) === BIGGER_THAN) {
                        return BinarySesarchRecursive (arr, value, idxLow, idxMid-1, compareFn);
                }
                else {
                        return idxMid;
                }
        }

        return DOES_NOT_EXIST;
};

/**
 * 
 * @param {array} arr 
 * @param {number} value 
 * @param {Function} compareFn 
 */
var     BinarySearch            = function (arr, value, compareFn)
{
        quickSort (arr);

        let     idxLow          = 0;
        let     idxHigh         = arr.length - 1;

        return BinarySesarchRecursive (arr, value, idxLow, idxHigh, compareFn);
};

module.exports = {
        BinarySearch,
};
