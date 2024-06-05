// 整数の配列と探す整数を受け取る
function binarySearch(arr: number[], target: number): number {
    //初期変数の設定
    
    // leftとrightは、それぞれの配列の左端と右端のインデックスをあらわす。
    let left = 0;
    let right = arr.length - 1;


    // leftがright以下になるまで処理をループする
    while(left <= right){

        // 　配列の中央のインデックスを計算する
        const mid = Math.floor((left + right) / 2);

        // 　中央の要素とターゲットの要素を比較。
        if(arr[mid] === target) {
            return mid;
        //中央の要素より大きい場合、探索半紙を右半分に絞る 
        } else if(arr[mid] < target){
            left = mid + 1;
        // 中央の要素より小さい場合、探索範囲を左半分に絞る
        } else {
            right = mid + 1;
        }
    }
    // 見つからなかったら　−１　を返す。
    return  - 1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found in the array`);
}