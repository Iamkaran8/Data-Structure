// Find the Most Frequent Element in an Array
// Return the element that appears the most times in the array.

const mostFrequent = (arr) => {
    const Frequent = {};
    var maxCount = 0;
    var mostRecent = null;

    for (let val of arr) {
        Frequent[val] = (Frequent[val] || 0) + 1;

        if (Frequent[val] > maxCount) {
            maxCount = Frequent[val];
            mostRecent = val;
        }

    }

    return mostRecent;
}

console.log(mostFrequent([1, 2, 2, 2, 2, 2, 3, 1, 1, 4]))