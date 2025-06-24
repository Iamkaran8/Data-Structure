// 🧩 3. Check Palindrome
// Input:
// str = "racecar"

// Output:
// true

const checkPalindrome = (str) => {
    var left = 0;
    var right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--
        }
        else {
            return false
        }
    }
    return true

}




console.log(checkPalindrome("racecar"))
