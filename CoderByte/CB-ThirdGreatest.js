/*
    Third Greatest
    Input: Array of strings
    Output: String - Third largest word in array
    - At least 3 strings, only letters
*/

function ThirdGreatest(strArr) {
    // Sub-functions
    function PickLargest() {
        /**
         * Iterates through the arrStrArrLengths array and returns the index of the
         * largest number in the array
         */
        let intGreatestLength = 0;
        let intGreatestIndex = 0;
        for(let intIndex of arrStrArrLengths) {
            if(intIndex > intGreatestLength) {
                intGreatestLength = intIndex;
                intGreatestIndex = arrStrArrLengths.indexOf(intIndex);
            }
        }
        return intGreatestIndex;
    }

    function StripLargest() {
        /**
         * Assigns the element at intThisGreatestIndex to strThisGreatest and removes it from 
         * the array.  Also removes the same index from the arrStrArrLengths array
         * This returns strThisGreatest which is only used in the final parent return call
         * there is no need to waste memory on storing the other two greatest strings
         */
        let strThisGreatest = strArr.splice(intThisGreatestIndex, 1);
        arrStrArrLengths.splice(intThisGreatestIndex, 1);
        return strThisGreatest;
    } 
    // End of sub functions

    // Main function variable declaration
    let arrStrArrLengths = []
    let intThisGreatestIndex = 0;

    // Iterate through the array of strings and store their lengths in arrStrArrLengths
    // these elements are in the same order as the strings in strArr
    for(let intIndex of strArr) {
        arrStrArrLengths.push(intIndex.length);
    }

    // Determine and remove the First Largest length and string
    intThisGreatestIndex = PickLargest();
    StripLargest();

    // Determine and remove the Second Largest length and string
    intThisGreatestIndex = PickLargest();
    StripLargest();

    // Determine and remove the Third largest length and return the string
    intThisGreatestIndex = PickLargest();
    return StripLargest().toString();

}

let arrTestOne = ["happy", "sad", "indifferent"];
console.log(ThirdGreatest(arrTestOne));
let arrTestTwo = ["brush", "lightbulb", "kitten", "spiders"];
console.log(ThirdGreatest(arrTestTwo));
let arrTestThree = ["three", "fives", "one", "sevens"];
console.log(ThirdGreatest(arrTestThree));