
// 🧩 5. Move Zeroes to End
// Input:
// arr = [0, 1, 0, 3, 12]

// [0, 1, 0, 3, 12]

// [12, 1, 0, 3, 0]


// Output:
// [1, 3, 12, 0, 0]



const moveZeroEnd = (arr) => {
    var nonZeroIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]
            nonZeroIndex++
        }
    }

    console.log(arr)
}

console.log(moveZeroEnd([0, 1, 0, 3, 12]))