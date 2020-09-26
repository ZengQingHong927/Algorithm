
var     tool                            = require ('../Merge-Sort/tool');


var     insertionSort           = function (arr)
{
        if (!arr instanceof Array)     return 'sorting data must be array';
        let         len     = arr.length;

        for (let i = 0 ; i <= len ; i++) {
                for (let j = i ; j > 0 ; j--) {
                        if (tool.less (arr[j], arr[j-1])) {
                                tool.swap (j, j-1 , arr);
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