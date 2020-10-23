/**
 * Given an array and an integer K, find the maximum for each and every contiguous subarray of size k.
 * 
 * Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
 * Output: 3 3 4 5 5 5 6
 * 
 */

 function FindMaximum (arr = [], k) {
        let     max     = 0;

        for (let i = 0 ; i <= arr.length - k; i++) {
                max     = arr[i];
                for (let j = 1 ; j < k ; j++) {
                        if (arr[i+j] > max) {
                                max = arr[i+j];
                        }
                }
                console.log (max);
        }
 }

function main () {
        let    arr = [1, 3, 3, 4, 5, 6, 1, 8, 7, 10];
        FindMaximum (arr, 4);
}

main ();