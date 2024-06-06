function isPangram(string:string): boolean{
    // cacheの作成
    let cache: { [key: string]: boolean} = {}

    // 文字列を小文字に変換
    string = string.toLowerCase();

    // 文字列を一文字ずつチェックし、アルファベットの場合は、cacheにtrueを設定する。
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(/^[a-z]$/.test(char)){
            cache[char] = true;
        }
    }

    // cacheの長さが26であれば、trueを返す。それ以外はfalseを返す。
    return Object.keys(cache).length === 26;
}
