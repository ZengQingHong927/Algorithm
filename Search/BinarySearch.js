var   { defaultCompareFn }              = require ('../util');
var   { LESS_THAN }                     = require ('../util');
var   { BIGGER_THAN }                   = require ('../util');
var   { DOES_NOT_EXIST }                = require ('../util');
var   { swap }                          = require ('../util');

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

var     BinarySearch            = function (arr, value, compareFn)
{

};

export BinarySearch;