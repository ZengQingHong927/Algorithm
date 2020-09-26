
var   { swap }                  = require ('../../util/index');
var   { LESS_THAN }             = require ('../../util/index');
var   { defaultCompareFn }      = require ('../../util/index');

var     insertionSort           = function (arr)
{
        if (!arr instanceof Array)     return 'sorting data must be array';
        let         len     = arr.length;

        for (let i = 0 ; i <= len ; i++) {
                for (let j = i ; j > 0 ; j--) {
                        if (defaultCompareFn (arr[j], arr[j-1]) === LESS_THAN) {
                                swap (arr, j, j-1);
                        }
                        else {
                                break;
                        }
                }
        }
        return arr;

};

module.exports = {
        insertionSort,
};