// 📘 Description:
// Given an array of integers nums, return the pivot index of this array.

// The pivot index is the index where the sum of all elements to the left of the index is equal to the sum of all elements to the right of the index.

// If no such index exists, return -1.

// If there are multiple pivot indexes, return the left-most one.

// Input:  [1, 7, 3, 6, 5, 6]
// Output: 3


const PivotIndex = (arr) => {

    //prefixSum
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }

    //Right Sum
    let rightSum = [];
    rightSum[arr.length - 1] = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + arr[i]
    }
    console.log(rightSum)
}


console.log(PivotIndex([1, 7, 3, 6, 5, 6]))