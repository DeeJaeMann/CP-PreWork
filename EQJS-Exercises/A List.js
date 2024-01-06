/*
    Eloquent Javascript Chapter 4 Exercise 3
    A List
    Write a function arrayToList that builds up a list structure when given [1,2,3]
    as argument.
    Write a listToArray function that produces an array from a list
    Add a helper function prepend which takes an element and a list and creates a new 
    list that adds the element to the front of the input list
    and nth which takes a list and a number and returns the element at the given
    position in the list (with 0 referencing the first element) or undefined if there
    is no such element
    Write a recursive version of nth
 */


/**
 * Creates a list structure when given an array as argument
 * @param {array} arrSource - Array to be converted to a list
 * @returns List object from array
 */
function arrayToList(arrSource) {
    // define the return object
    let objList = null;

    // Iterates backward over the array to populate the list object
    for(let intIndex = arrSource.length - 1; intIndex >= 0; intIndex--) {
        objList = {value: arrSource[intIndex], rest: objList}
    }

    return objList;
}

/**
 * Produces an array from a list
 * @param {object} objSource - Object to be converted to a list
 * @returns Array from object
 */
function listToArray(objSource) {
    let arrResult = [];

    for(let node = objSource; node; node=node.rest) {
        arrResult.push(node.value);
    }

    return arrResult;
}

/**
 * Takes an element and a list and creates a new list that adds the
 * element to the front of the input list
 * @param {string} strElement - Element to be added to a list
 * @param {object} objSource - Source object
 * @returns Object with strElement at the front 
 */
function prepend(strElement, objSource) {
    let objResult = {};

    return objResult;
}

/**
 * Takes a number and a list object and returns the element in the position
 * of the number given
 * @param {number} intNumber - Number of element to be referenced
 * @param {object} objSource - List object to be searched
 * @returns Element at the number position.  undefined if element does not exist
 */
function nth(intNumber, objSource) {
    let strElement = undefined;

    return strElement;
}

/**
 * (Recursive Version) Takes a number and a list object and returns the element in the position
 * of the number given
 * @param {number} intNumber - Number of element to be referenced
 * @param {object} objSource - List object to be searched
 * @returns Element at the number position.  undefined if element does not exist
 */
function recursiveNTH(intNumber, objSource) {
    let strElement = undefined;

    return strElement;
}

let arrMyArray = [1,2,3];
console.log(arrayToList(arrMyArray));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));