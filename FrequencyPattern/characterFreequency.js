// Character Frequency Count
// Problem Statement:
// Write a function that takes a string and returns an object (or map) showing how many times each character appears in the string.
// You may ignore spaces and special characters, and treat uppercase and lowercase as the same.



const str = "Programming";

const charFreequency = (str) => {
    const char = {}
    for (let i = 0; i < str.length; i++) {
        char[str[i]] ? char[str[i]] +=1 : char[str[i]] = 1;
    }
    console.log(char)
}

charFreequency(str)
