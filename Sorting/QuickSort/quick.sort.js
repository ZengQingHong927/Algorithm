var   { LESS_THAN }                     = require ('../../util/index');
var   { defaultCompareFn }              = require ('../../util/index');
var   { swap }                          = require ('../../util/index');
var   { genRandomNumber }               = require ('../../util/index');

/**
 * Quick Sort
 */

function partion (arr, lo, hi) {
    let i = lo;
    let j = hi + 1;

    // 分區並找出基準點位置
    while (true) {
        while (defaultCompareFn (arr[++i], arr[lo]) === LESS_THAN) {
            if (i == hi) {
                break;
            }
        }
        while (defaultCompareFn (arr[lo], arr[--j]) === LESS_THAN) {
            if (j == lo) {
                break;
            }
        }

        if (i >= j) {
            break;
        }

        swap (arr, i, j);
    }

    swap (arr, lo, j);
    return j;
}

function quickSort (arr) {
    sort (arr, 0, arr.length - 1);
}

function sort (arr, lo, hi) {
        if (hi <= lo)       return;     // hi, lo交錯代表沒有數組要排序

        let j = partion (arr, lo, hi);
        sort (arr, lo, j-1);    // 小於 pivot 的數組做排序
        sort (arr, j+1, hi);    // 大於 pivot 的數組做排序
}


module.exports = {
    quickSort,
};