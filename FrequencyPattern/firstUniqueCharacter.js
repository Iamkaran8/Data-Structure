// First Unique Character in a String
// Problem Statement:
// Given a string s, find the index of the first non-repeating character.
// If it doesn't exist, return -1

const str = "loveleetcode";

const firstUniqueChar = (str) => {
    const unique = {}

    for (let i = 0; i < str.length; i++) {
        unique[str[i]] = (unique[str[i]] || 0) + 1
    }
    console.log(unique)
    for (let key in unique) {
        if (unique[key] === 1) {
            return key
        }
    }
}

console.log(firstUniqueChar(str))