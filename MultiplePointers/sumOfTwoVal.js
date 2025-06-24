//Sum Of Two Values 

// This is Traditional Way 
const sumOfTwoVal = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === 10) {
                console.log(arr[i], arr[j])
            }
        }
    }

    console.log("---------------Traditional Way Is Done---------------")
}


console.log(sumOfTwoVal([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]))




// This is Effecient Way

const Effecient = (arr, target) => {
    console.log("---------------Efficient Way---------------")
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return arr[left], arr[right]

        };
        if (sum < target) left++;
        else right++
    }
    console.log("No Pair FOund")
}


console.log(Effecient([1, 2, 3, 4, 5, 6, 7, 8,], 10))




