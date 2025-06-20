// 🔹 Same Frequency
// Write a function that takes two numbers. Return true if they have the same frequency of digits


const sameFrequency = (num1, num2) => {
    if (num1.length !== num2.length) {
        return false
    }

    const freq1 = {}
    const freq2 = {}

    for (val of num1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    for (val2 of num2) {
        freq2[val2] = (freq2[val2] || 0) + 1;
    }

    for (let num of num1) {
        if (freq1[num] !== freq2[num]) {
            return false
        }
    }
    return true
}



console.log(sameFrequency("11182", "28111"))
console.log(sameFrequency("34", "14"))