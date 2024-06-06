// leetcode: # 66
// plusOne


function plusOne(digits: number[]): number[] {
    // 配列の末尾から開始し、先頭に向かってループを進めます。
    // これにより、繰り上がりが発生した場合の処理が簡単になります。
    for (let i = digits.length - 1; i >= 0; i--) {
        
        // 現在の桁が 9 未満の場合、その桁に 1 を加えて結果を返します。
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        // 現在の桁が 9 の場合、その桁を 0 に設定し、次の桁に進みます。
        digits[i] = 0;
    }

    // すべての桁が 9 の場合、新しい桁を追加し、先頭の桁に 1 を設定します。
    digits.unshift(1);

    // 結果を返します。
    return digits;
}