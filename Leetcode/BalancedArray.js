// 平衡數組
// https://medium.com/@sgee03/js-balanced-index-6846041220d6


const balancedIndex = (array) => {
        let     total   = array.reduce ((a,b) => a + b);
        let     sumLeft = 0;
        
        for (let i = 0; i < array.length; i++) {
                total   = total - array[i];
                //compares the sum to the left of current index against total
                if (sumLeft === total) {
                // if the sums match, the current index will be returned
                        return i;
                }

                sumLeft += array[i];
        }

        return -1;
};

// var     ans = balancedIndex([1, 2, 5, 3]); 
// console.log (ans)