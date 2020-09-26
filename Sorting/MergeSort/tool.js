var     _                       = require('lodash');

var     genRandomNumber         = function (amount)
{
        var     numberList      = [];

        while (numberList.length < amount) {
                numberList.push (_.random (999));
        }

        return numberList;
};

var     less            = function (a, b)
{
        return a - b < 0;
};
    
var     swap            = function (i, j, arr)
{
        let     temp    = arr[i];
        arr[i]  = arr[j];
        arr[j]  = temp;
};

module.exports = {
        genRandomNumber,
        less,
        swap,
}