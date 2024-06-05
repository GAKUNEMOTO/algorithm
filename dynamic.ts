function fibonacciDP(n: number): number {
    // ベースケース

    // 引数nが０以下の場合は０を返し、１の場合は、１を返す。
    if(n <= 0){
        return 0;
    } else if(n === 1){
        return 1;
    }

    // fibという配列を用意して、フィボナッチ数列の結果を格納する

    // サイズが n + 1 の配列fibを作成し、すべての要素を０で初期化する
    const fib: number[] = new Array(n + 1).fill(0);

    // フィボナッチ数列の第一項が一であることを設定します。　これにより、ベースケースが配列に反映されます。
    fib[1] = 1;

    //fib配列を使って、小さい値から順番に計算し、最終的に　fib「n]を返す。 
    for(let i = 2; i <= n; i++){
        fib[i] = fib[ i - 1] + fib[i - 2];
    }
    return fib[n];
}

const n = 10;
console.log(`Fibonacci(${n}) = ${fibonacciDP(n)}`);
