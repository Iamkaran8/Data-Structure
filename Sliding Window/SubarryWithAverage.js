const subarrayWithAverage = (arr, threshold, k) => {
    let windowSum = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
        windowSum = windowSum + arr[i]
    }
    if ((windowSum / k) >= threshold) {
        count += 1
    }

    for (let i = k; i < arr.length; i++) {


        windowSum = windowSum - arr[i - k] + arr[i];
        if ((windowSum / k) >= threshold) {
            count += 1
        }

    }

    return count
}


console.log(subarrayWithAverage([2, 1, 3, 4, 1, 5], 3, 3))
console.log(subarrayWithAverage([5, 6, 7, 8, 9], 5, 2))
console.log(subarrayWithAverage([1, 2, 3], 2, 3))
console.log(subarrayWithAverage([-1, 0, 1, 2], 0, 2))
