var     tool            = require ('../MergeSort/tool');


/**
 * Quick Sort
 */



var     partion         = function (arr, lo, hi)
{
        let     i       = lo;
        let     j       = hi + 1;

        // 分區並找出基準點位置
        while (true) {
                while (tool.less (arr[++i], arr[lo])) {
                        if (i == hi) {
                                break;
                        }
                }

                while (tool.less (arr[lo], arr[--j])) {
                        if (j == lo) {
                                break;
                        }
                }

                if (i >= j) {
                        break;
                }

                tool.swap (i, j, arr);
        }

        tool.swap (lo, j, arr);
        
        return j;
}

var     quickSort       = function (arr)
{
        sort (arr, 0, arr.length - 1);
};

var     sort            = function (arr, lo, hi)
{
        if (hi <= lo)   return; // hi, lo交錯代表沒有數組要排序

        let     j       =       partion (arr, lo, hi);
        sort (arr, lo, j-1);    // 小於 pivot 的數組做排序
        sort (arr, j+1, hi);    // 大於 pivot 的數組做排序
};

module.exports = {
    quickSort,
}