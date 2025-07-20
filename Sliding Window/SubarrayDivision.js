const SubarrayDivision = (arr, m, s) => {
    let sumWindow = 0;
    let count = 0;
    //first Window
    for (let i = 0; i < m; i++) {
        sumWindow += arr[i];
        if(sumWindow === s){
            count+=1
        }
    }


    for (let i=m; i < arr.length; i++) {
        sumWindow = sumWindow - arr[i - m] + arr[i];
        if(sumWindow === s){
            count+=1
        }
    }

    return count
}


console.log(SubarrayDivision([1, 2, 1, 3, 2], 2, 3))