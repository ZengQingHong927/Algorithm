
/*
 * Recurceive merge sorting
 */

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

module.exports = {
        mergerSort,
};