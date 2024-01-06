/* 
    CoderByte Challenge
    DistinctList
    DistinctList(arr)
    Input: array
    Output: int

    Take array of #s and determine duplicate entries
    ie: [1,2,2,2,3] -> 2 Two duplicates of one #
    [0,-2,-2,5,5,5] -> 3
    [100,2,101,4] -> 0
*/

function DistinctList(arrInput) {
    let intResult = 0;
    let objCompare = {};

    // Populate an object(hastable) with the elements of the array
    for(let intThisElement of arrInput) {
        // Check if the key already exists in the object
        if(objCompare.hasOwnProperty(intThisElement)) {
            // The key exists, increment by 1
            // This represents increasing the duplicate count by 1
            objCompare[intThisElement] += 1;
        } else {
            // The key does not exist, add it with a starting value of 0
            objCompare[intThisElement] = 0;
        }
    }

    // Iterate through the object(hashtable) and add all of the duplicates
    for(let strThisKey in objCompare) {
        intResult += objCompare[strThisKey];
    }

    //return objCompare;
    return intResult;
}

let arrFirstTest = [1,2,3];
console.log(DistinctList(arrFirstTest));
let arrSecondTest = [1,2,2,3,3,3];
console.log(DistinctList(arrSecondTest));
let arrThirdTest = [-1,-1,3,2,5,5,5];
console.log(DistinctList(arrThirdTest));
let arrFourthTest = [1,2,2,2,3];
console.log(DistinctList(arrFourthTest));
let arrFifthTest = [0,-2,-2,5,5,5];
console.log(DistinctList(arrFifthTest));
let arrSixthTest = [100,2,101,4];
console.log(DistinctList(arrSixthTest));