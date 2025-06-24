// 🧩 2. Remove Duplicates from Sorted Array
// Input:
// arr = [1, 1, 2, 2, 3, 3, 4]

// Output:
// [1, 2, 3, 4]


const removeDuplicate = (arr) => {
    arr.sort()
    var i = 0;

    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0, i + 1)
}


console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 6, 1, 3, 4, 5, 6, 7, 1, 2, 2, 3, 3, 4]))