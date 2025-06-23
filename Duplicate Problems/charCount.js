// 1. Character Frequency Count
// Input: "mississippi"
// Output:
// {
// m: 1,
// i: 4,
// s: 4,
// p: 2
// }


const charCount = (str) => {
    const char = {};
    for (let i = 0; i < str.length; i++) {
        char[str[i]] = (char[str[i]] || 0) + 1;
    }
    console.log(char)
}



console.log(charCount("mississippi"))