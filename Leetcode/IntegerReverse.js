// 數字反轉

function integerReverse (integer) {
        let     min     = Math.pow (-2, 31);
        let     max     = Math.pow (2, 31)+1;
        let     sign    = Math.sign (integer);
        let     ans     = 0;

        integer = Math.abs (integer);

        while (integer > 0) {
                let     reminder        = integer % 10;
        
                integer = (integer-reminder) / 10;
                ans     = ans*10 + reminder
        }

        if (ans > max)  return 'Exceed max integer';
        if (ans < min)  return 'Exceed min integer';

        return ans*sign;
}

var ans = integerReverse (525546544848478748774674684);
