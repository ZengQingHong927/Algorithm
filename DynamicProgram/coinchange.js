
function coinChange (coins, amount) {

    // dp長度聲明amount+1, 包含 amount = 0的解

    let dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;

    for (let i = 0 ; i < dp.length ; i++) {
            for (let coin of coins) {
                    if (i - coin < 0)   continue;

                    // dp[i]初始化 amount+1 一個不可能的值
                    // 比如輸入[1,2,5], amount = 11
                    // 選擇1: dp[11] = 一個1 + 剩餘需要湊出的dp[11 - 1]的最佳解
                    // 選擇2: dp[11] = 一個2 + 剩餘需要湊出的dp[11 - 2]的最佳解
                    // 選擇5: dp[11] = 一個5 + 剩餘需要湊出的dp[11 - 5]的最佳解
                    // 然後在這三種情況裡找最小的值

                    dp[i] = Math.min (dp[i], dp[i-coin] + 1);
            }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount];
}


var numOfCoins = coinChange ([1,2,5], 77);
console.log (numOfCoins);