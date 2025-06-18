// Question: Check If Two Strings Are Anagrams

//Write a function that checks if two given strings are anagrams of each other.


const isanagram = (strOne, strTwo) => {
    if (strOne.length !== strTwo.length) {
        return false
    }

    // loop for find how many letter are comming how many time for both str1 & str2

    const string1 = {};
    const string2 = {};

    for (str of strOne) {
        string1[str] = (string1[str] || 0) + 1;
    }
    for (str2 of strTwo) {
        string2[str2] = (string2[str2] || 0) + 1;
    }

    for (strVal in string1) {
        if (string1[strVal] !== string2[strVal]) {
            return false
        } else {
            return true
        }
    }


}

console.log(isanagram("Triangle", "Integral"))