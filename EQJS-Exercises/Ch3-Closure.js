/*
    Attempt at understanding closure functions
    Closure functions take less steps to execute.
 */

function multiplier(intFactor) {
    return intNumber => intNumber * intFactor;
}

let twice = multiplier(2);
console.log(twice(5));