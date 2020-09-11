
function fib (n) {
    if (n === 0)    return 0;
    
    let memoArray = new Array (n+1).fill(0);
    return fibHelper (memoArray, n);
}

function fibHelper (memoArray, n) {
    if (n === 1 || n === 2)     return 1;

    if (!memoArray[n]) {
        memoArray[n] = fibHelper (memoArray, n-1) + fibHelper (memoArray, n-2);
    }

    return memoArray[n];
}


console.log (memoArray)