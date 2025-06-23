// Find Most Frequent Character
// Input: "applebanana"
// Output: "a"

const mostFrequent = (str) => {
    const freq = {};
    let mostCount = 0;
    let mostChar = '';
    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1;

        if (freq[str[i]] > mostCount) {
            mostCount = freq[str[i]]
            mostChar = str[i]
        }
    }

    return mostChar

}


console.log(mostFrequent("apppppplebanana"))