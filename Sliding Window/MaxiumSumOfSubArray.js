

// 📘 Description:
// Given an array of integers nums and an integer k, return the maximum sum of a subarray of size k.
// Input:  nums = [2, 1, 5,     , 3, 2], k = 3  
// Output: 9  


const MaxiumSum = (nums, k) => {
    //First Window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }
    let maxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i]
        if (windowSum > maxSum) {
            maxSum = windowSum
        }
    }

    return maxSum

}

// console.log(MaxiumSum([-3, 4, 0, -2, 6, -1], 2))
console.log(MaxiumSum([2, 1, 5, 1, 3, 2], 3)) // Output: 9 ✅
console.log(MaxiumSum([5, 5, 5, 5], 2)) // Output: 10 ✅
console.log(MaxiumSum([-1, -2, -3, -4], 2))
console.log(MaxiumSum([-3, 4, 0, -2, 6, -1], 2)); // Output: 6