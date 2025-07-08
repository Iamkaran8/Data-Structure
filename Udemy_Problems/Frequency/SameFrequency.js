const sameFrequency = (num1, num2) => {
    let str1 = num1.toString()
    let str2 = num2.toString()

    const freq1 = {};
    const freq2 = {};

    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for (let i of str1) {
        if (freq1[i] !== freq2[i]) {
            return false
        }
    }
    return true


}



console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385))// true
console.log(sameFrequency(22, 222))// false