function reverseNestedObj (inputValue) {
        let     arr             = [];
        let     object_ro       = {};

        function flatten (obj) {
        
                for (let key in obj) {
                        
                        arr.push (key);

                        if (typeof obj[key] !== 'object') {
                                arr.push (obj[key]);
                        }
                        else {
                                flatten (obj[key]);
                        }
                }
        }

        flatten (inputValue);
        arr.reverse ();
        arr.reduce (function (o, s, idx, arr) {
        
                if (idx === arr.length-2) {
                        o[s]    = arr[idx+1];
                        arr.splice (idx);
                        return o[s];
                }
                else {
                        return o[s]     = {};
                }
                
        }, object_ro);

        return object_ro;

}

module.exports = {
        reverseNestedObj,
}