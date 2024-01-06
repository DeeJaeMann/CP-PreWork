/* 
    Eloquent Javascript Chapter 4 Exercise 2
    Reversing an Array
    Part 1:
    Write a function reverseArray which takes an array as an argument and produces
    a new array that has the same elements in reverse order
    Part 2:
    Write a function reverseArrayInPlace that modifies the array given as an 
    argument by reversing its elements
    Neither may use the .reverse method
 */

function reverseArray(arrSource = []) {
    let arrResult = [];
    for(let item of arrSource) {
        arrResult.unshift(item);
    }
    return arrResult;
}

function reverseArrayInPlace() {
    let intTemp = 0;
    let intMiddle = Math.floor(arrMyArray.length / 2);
    if((arrMyArray.length)%2 == 0) {
        // Array has even amount of places
        for(let intIndex = intMiddle; intIndex > 0; intIndex--) {
            intTemp = arrMyArray[intMiddle - intIndex];
            arrMyArray[intMiddle - intIndex] = arrMyArray[intMiddle + (intIndex - 1)];
            arrMyArray[intMiddle + (intIndex - 1)] = intTemp;
        }
    } else {
        // Array has odd amound of places
        for(let intIndex = intMiddle; intIndex >= 0; intIndex--) {
            intTemp = arrMyArray[intMiddle - intIndex];
            arrMyArray[intMiddle - intIndex] = arrMyArray[intMiddle + intIndex];
            arrMyArray[intMiddle + intIndex] = intTemp;
        }
    }
}

let arrMyArray = [1,2,3,4,5,6,7,8,9]
console.log(reverseArray(arrMyArray));
reverseArrayInPlace();
console.log(arrMyArray);