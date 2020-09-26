var     _                       = require('lodash');

var     genRandomNumber         = function (amount, max=999, min=1)
{
        var     numberList      = [];

        while (numberList.length < amount) {
                // numberList.push (_.random (999));
                numberList.push (Math.floor (Math.random ()*(max-min+1) + min));
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