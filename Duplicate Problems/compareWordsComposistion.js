// Compare Word Composition
// Input: ("aabcc", "ccaba")
// Output: true



const wordComposition = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false
    }
    const freq1 = {};
    const freq2 = {};

    for (let i = 0; i < str1.length; i++) {
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }

    for (let char in freq1) {
        console.log(char)
        if (freq1[char] !== freq2[char]) {
            return false
        }
    }

    return true
}


console.log(wordComposition("aabcc", "ccaba"))