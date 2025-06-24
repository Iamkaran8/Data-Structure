const uniqueValue = (arr) => {
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            var i = i + 1;
            arr[i] = arr[j]
        }

    }
    return i + 1
}




console.log(uniqueValue([0]))