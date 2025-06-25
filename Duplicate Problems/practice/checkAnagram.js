
// 1. Anagram Checker
// Problem: Given two strings, return true if one is an anagram of the other.
// Input: "listen", "silent"
// Output: true



const checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    var freq1 = {};
    var freq2 = {};

    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1
    }

    for (let char of str1) {
        if (freq1[char] !== freq2[char]) {
            return false
        }
    }
    return true
}


console.log(checkAnagram("listen", "silent"))