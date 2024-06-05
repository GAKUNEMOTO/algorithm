function commonChars(words: string[]): string[] {
   
    const charCount: { [key: string]: number } = {};

    
    for (const char of words[0]) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 1; i < words.length; i++) {
        const currentWordCount: { [key: string]: number } = {};
        for (const char of words[i]) {
            currentWordCount[char] = (currentWordCount[char] || 0) + 1;
        }
        for (const char in charCount) {
            if (currentWordCount[char]) {
                charCount[char] = Math.min(charCount[char], currentWordCount[char]);
            } else {
                delete charCount[char];
            }
        }
    }

    const resultArray: string[] = [];
    for (const char in charCount) {
        for (let i = 0; i < charCount[char]; i++) {
            resultArray.push(char);
        }
    }

    return resultArray;
}

// function commonChars(words: string[]): string[] {
//     if (words.length === 1) {
//         return words[0].split('');
//     }

//     let result: string[] = [];
//     let chars = new Set(words[0]);

//     // Check each character in the set
//     chars.forEach(char => {
//         let frequency = Infinity;
//         // Find the minimum frequency of this character in all words
//         words.forEach(word => {
//             let count = word.split('').filter(c => c === char).length;
//             frequency = Math.min(frequency, count);
//         });
//         // Add the character to the result the number of times it appears in all words
//         for (let i = 0; i < frequency; i++) {
//             result.push(char);
//         }
//     });

//     return result;
// }