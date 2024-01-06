#!/usr/bin/node
/* 
    Eloquent Javascript Chapter 3 Exercise 3
    Bean Counting
    Part 1:
    Write a function countBs that takes a string as its only argument and returns a number that
    indicates how many uppercase "B" characters there are in the string
    Part 2:
    Write a function countChar that behaves like countBs, except it takes a second argument that indicates
    the character that is to be counted.  Rewrite countBs to use the countChar function
 */

function countChar(strInput, strChar) {
    let intCount = 0;
    for(let intIndex = 0; intIndex < strInput.length - 1; intIndex++){
        if(strInput[intIndex] == strChar) { intCount++; }
    }
    return intCount;
}

function countBs(strInput) {
    /*
    let intCount = 0;
    for(let intIndex = 0; intIndex < strInput.length - 1; intIndex++){
        if(strInput[intIndex] == "B") { intCount++; }
    }
    return intCount;
    */
   return countChar(strInput, "B");
}

console.log(countBs("Two Bs are in this sentence B.")); // -> 2
console.log(countBs("BBBBsssfe")); // -> 4
console.log(countBs("None of the letters are in this one")); // -> 0
