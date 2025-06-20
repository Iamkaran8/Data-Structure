// Problem: Is Subset

// Given two arrays arr1 and arr2, write a function to check whether all elements of arr2 are present in arr1.
// Assume no duplicates and elements are integers.

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [2, 6]

const isSubset = (arr1, arr2) => {
    const newVal = []
    for (let val of arr2) {
        for (let val2 of arr1) {
            if (val === val2) {
                newVal.push(val2)
            }
        }
    }
    if (newVal.length === arr2.length) {
        return true
    } else {
        return false
    }


}

console.log(isSubset(arr1, arr2))