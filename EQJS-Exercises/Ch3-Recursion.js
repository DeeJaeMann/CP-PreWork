/*
    Chapter 3 Recursion
    Attempt to understand recursion
 */

function power(intBase, intExponent) {
    if(intExponent == 0) {
        return 1;
    } else {
        return intBase * power(intBase, intExponent - 1);
    }
}

console.log(power(2,3));