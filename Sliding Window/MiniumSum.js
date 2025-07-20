const MiniumSum = (arr, k) => {
    let firstWindow = 0;

    for (let i = 0; i < k; i++) {
        firstWindow = firstWindow + arr[i]
    }
    let minSum = 0;
    for (let i = k; i < arr.length; i++) {
        firstWindow = firstWindow - arr[k - i] + arr[i];
        if (minSum < firstWindow) {
            minSum = firstWindow
        }
    }

    return minSum

}


console.log(MiniumSum([10, 4, 2, 5, 6, 3], 2))