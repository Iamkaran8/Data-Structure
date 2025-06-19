// First Unique Character in a String
// Problem Statement:
// Given a string s, find the index of the first non-repeating character.
// If it doesn't exist, return -1

const str = "loveloe";

const firstUniqueChar = (str) => {
    const unique = {}

    for (let i = 0; i < str.length; i++) {
        unique[str[i]] = (unique[str[i]] || 0) + 1
    }

    for (let i of str) {
        if (unique[i] === 1) {
            return i
        }
    }
    return "No Unique Values"
}

console.log(firstUniqueChar(str))