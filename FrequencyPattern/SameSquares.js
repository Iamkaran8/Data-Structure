//Check if One Array Contains the Squares of Another (with frequency)
//sameSquares([1, 2, 3], [1, 4, 9]) // true

const sameSquares = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
        if ((arr1[i] * arr1[i]) !== arr2[i]) {
            return false
        }
    }
    return true


}


console.log(sameSquares([1, 2, 3, 4], [1, 4, 9, 16])) // true