/*
    Eloquent Javascript Chapter 3 Exercise 2
    Recursion
    Define a recursive function isEven cooresponding to these rules:
     Determine whether positive whole number is even
        Zero is even
        One is odd
        Any other number N, its evenness is the same as N - 2
 */

function isEven(intNumber) {
    // Catch negative numbers and convert them
    if(intNumber < 0) { intNumber *= -1 }
    // Implement rules
    if(intNumber == 0) { return true; }
    else if(intNumber == 1) { return false; }
    else {
        return isEven(intNumber - 2);
    }
}

console.log(isEven(50)); // -> True
console.log(isEven(75)); // -> False
console.log(isEven(-1)); // -> False
console.log(isEven(-10)); // -> True
