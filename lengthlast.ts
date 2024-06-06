// leetcode: 58. Length of Last Word
function lengthOfLastWord(s: string): number {
    let cutFist = s.trim();

    let divide = cutFist.split(" ");

    let lastWord = divide[divide.length - 1];

    return lastWord.length;

};