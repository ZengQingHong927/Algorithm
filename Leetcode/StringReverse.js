// 字符串反轉

function strReverse1 (str) {
        return str.split ('').reverse ().join('');
}

function strReverse2 (str) {
        let     ans     = '';
        for (let i = str.length-1 ; i >= 0 ; i--) {
                ans += str[i];
        }

        return ans;
}

function strReverse3 (str) {

        str     = Array.from (str);
        
        for (let i = 0 ; i < Math.ceil (str.length/2) ; i++) {
                let     temp            = str[i];
                str[i]                  = str[str.length-1-i];
                str[str.length-1-i]     = temp;
        }

        return str.join ('');
}


// console.log (strReverse3 ('abcdef'))