// 🧩 4. Reverse an Array
// Input:
// arr = [1, 2, 3, 4, 5]
// Output:
// [5, 4, 3, 2, 1]


// const reverseArray = (arr) => {
//     console.log("Normal Approach")
//     const newArr = []

//     for (var j = arr.length - 1; j >= 0; j--) {
//         newArr.push(arr[j])
//     }
//     console.log(newArr)
// }


// reverseArray([1, 2, 3, 4, 5])




const reverseArray = (arr) => {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr
}


console.log(reverseArray([1, 2, 3, 4, 5, 6]))

