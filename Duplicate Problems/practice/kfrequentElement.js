//  Top K Frequent Elements
// Problem: Return the top k frequent elements from an array.
// Input: nums = [1,1,1,2,2,3], k = 2 → [1,2]
// Hint: Use a frequency map, then sort.



const frequentElement = (arr, k) => {
    const freq = {};
    for (var i = 0; i < arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;

    }
    const obj = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, k).map((data) => data[1])

    return obj
}


console.log(frequentElement([3, 3, 3, 3, 3, 1, 1, 1, 2, 2, 3], 2))