// メモ化
function fibonacciMemo(n: number, memo: {[key: number]: number} = {}): number {
    // ベースケース
    if(n <= 0){
        return 0;
    } else if( n === 1){
        return 1;
    }


    // メモというオブジェクトを使って、すでに計算した結果を保存
    if(memo[n] === undefined){
        
        // 再帰的に計算しながら、メモに結果を保存して、計算を効率化する。
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    }

    return memo[n];
}

const m = 10;
console.log(`Fibonacci(${m}) = ${fibonacciMemo(m)}`);