/*
    Eloquent Javascript Chapter 3 Exercise 1
    Minimum
    Write a function min that takes two arguements and returns their minimum
 */

function min(intFirst, intSecond) {
    if(intFirst < intSecond) { return intFirst; }
    else { return intSecond; }
}

console.log(min(2,4)); // -> 2
console.log(min(10,5)); // -> 5
console.log(min(7,8)); // -> 7
