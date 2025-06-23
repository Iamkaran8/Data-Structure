// Count Unique Values (sorted array)
// Input: [1, 1, 2, 3, 3, 4, 5]
// Output: 5



const uniqueValue = (arr) => {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    return Object.keys(freq).length
}

console.log(uniqueValue([1, 1, 2, 3, 3, 4, 5, 6, 4, 21,]))