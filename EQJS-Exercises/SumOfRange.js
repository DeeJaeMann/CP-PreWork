/* 
    Eloquent Javascript
    Chapter 4 Exercise 1
    The Sum of a Range
    Part 1:
    Write a range function that takes two arguments, start and end, and returns 
    an array containing all the numbers from start up to and including end.
    Part 2:
    Write a sum function that takes an array of numbers and returns the sum
    of these numbers.
    Bonus:  Modify the range function to take an optional third argument that 
    indicates the 'step' value use when building the array.  If no step is
    given increment by one
 */

/** 
 *  Generates the range of numbers starting at the first argument and ending
 *  at the second.  If the second argument is lower than the first it will
 *  return a blank array.
 *  @param {int} intStart - Beginning of the range
 *  @param {int} intEnd - End of the range
 *  @param {int} intStep - (Positive) Increment Step (Negative) Decrement Step
 *  @returns {array} Array containing the range of numbers
 */
function range(intStart, intEnd, intStep = 1) {
    let arrResult = []
    // First check if intEnd is less than intStart
    if(intEnd < intStart) {
        // Return a blank array
        return arrResult;
    }
    // Iterate through the range and add them to the array
    if(intStep > 0) {
        // Step positive
        while(intStart <= intEnd) {
            arrResult.push(intStart);
            if((intStart + intStep) > intEnd) {
                break;
            } else {
                intStart += intStep;
            }
        }
    } else {
        // Step negative
        while(intEnd >= intStart) {
            arrResult.push(intEnd);
            if((intEnd + intStep) < intStart) {
                break;
            } else {
                intEnd += intStep;
            }
        }
    }

    return arrResult;
}

/**
 * Calculates the sum of the numbers from a given array
 * @param {array} arrAddends Array of numbers
 * @returns {int} The sum of the array of numbers
 */
function sum(arrAddends) {
    let intSum = 0;
    for(let number of arrAddends) {
        intSum += number;
    }
    return intSum;
}

// Tests
console.log(range(2,6,3));
console.log(range(2,5,-1));
console.log(sum(range(2,8)));
