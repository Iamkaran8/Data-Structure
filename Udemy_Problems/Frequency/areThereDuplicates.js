

const areThereDuplicates = (...arr) => {
    let freq = {};
    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1
    }
    for (val of arr) {
        if (freq[val] > 1) {
            return true
        }
    }

    return false
}



console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 