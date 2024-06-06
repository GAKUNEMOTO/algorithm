// Leetcode:  #28

// ナイーブ文字列検索アルゴリズム
function strStr(haystack: string, needle: string): number {
    // needle が空文字列の場合、問題の定義に従って 0 を返します。
    if(needle.length === 0) return 0;
  
    // haystack と needle の長さをそれぞれ hLength と nLength に格納します。
    const hLength = haystack.length;
    const nLength = needle.length;
  
    // haystack のインデックス i を 0 から hLength - nLength までループします。
    // この範囲内でしか needle が一致する可能性はないためです。

    // hLength - nLength までしかループしない理由は、i がこの範囲を超えると、
    // haystack に needle を収めるだけの十分な文字数が残っていないからです。

  for (let i = 0; i <= hLength - nLength; i++) {
          let j = 0;

        //   内側の while ループは、haystack の現在の位置から始まる部分文字列が needle と一致するかどうかをチェックします。
          while (j < nLength && haystack[i + j] === needle[j]) {
              j++;
          }
        //   j が nLength に達した場合、現在の i が needle の開始位置です。そのため、i を返します。
          if (j === nLength) {
              return i; 
          }
      }
  
      return -1; 
  }

//   エッジケースの処理: needle が空の場合、すぐに 0 を返します。
// ループ: haystack の各位置から始まる部分文字列が needle と一致するかを確認します。
// 一致チェック: while ループで部分文字列を文字ごとにチェックします。
// 一致が見つかった場合: 開始位置 i を返します。
// 一致が見つからなかった場合: ループ終了後、-1 を返します。