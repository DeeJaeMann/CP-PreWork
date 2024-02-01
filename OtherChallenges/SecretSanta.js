#!/usr/bin/env node
/*
From Perl Weekly Challenge 247
 Secret Santa

 Secret Santa is a Christmas tradition in which members of a group
 are randomly assigned a person to whom they give a gift

 You are given a list of names.  Write a script that tries to team
 persons from different families

 The givers are randomly chosen but don't share family names with
 the receivers

 Ex 1:
   input: ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar', 'Mrs. Anwar', 'Mr. Conway', 'Mr. Cross']
   output: Mr. Conway -> Mr. Wall
           Mr. Anwar -> Mrs. Wall
           Mrs. Wall -> Mr. Anwar
           Mr. Cross -> Mrs. Anwar
           Mr. Wall -> Mr. Conway
           Mrs. Anwar -> Mr. Cross

One gift is given to a family member.

 Ex 2:
Input: ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar']
Output:
 
    Mr. Anwar -> Mr. Wall
    Mr. Wall -> Mrs. Wall
    Mrs. Wall -> Mr. Anwar

*/

function SecretSanta(arrInput) {

  // Begin Child functions

  function GetRecipients(strAssignee, boolSameFamily = false) {
    // This function populates an array based on who our asignee is and whether we can pick from
    // the same family or not
    // This will return an empty array if we're not allowed to select the same family and can't
    // find anybody else to add

    // Array to track our current list of elgible recipients
    let arrGetRecipientList = []
    // RegEx to match family name (omitting the Mr./Mrs.)
    let regexFamilyPattern = new RegExp(strAssignee.replace(/Mrs?. /, ""));

    // Check through the elements in our object tracking whether we've been selected or not
    for(let strElement in objSelected) {
      if(!boolSameFamily) {
        if((!regexFamilyPattern.test(strElement))&& (strElement !== strAssignee) && (objSelected[strElement] === "No")) {
          arrGetRecipientList.push(strElement);
        }
      } else if((strElement !== strAssignee)&&(objSelected[strElement] === "No")) {
        arrGetRecipientList.push(strElement);
      } 
    }
    return arrGetRecipientList;
  }

  // End Child Functions

  // Main object to track the Secret Santa Pairs
  let objPairs = {};
  // Object to register whether the person has been selected or not
  let objSelected = {};
  // Formatted string
  let strResult = "";

  // If our array is less than 2 people there is no further processing needed
  if(arrInput.length <= 1) {
    return "There must be at least 2 people!";
  }

  // Populate the Object with initial values
  for(let strElement of arrInput) {
    objPairs[strElement] = "None";
    objSelected[strElement] = "No";
  }

  // A quick check to ensure the names were unique
  if(Object.keys(objPairs).length <= 1) {
    return "There must be at least 2 unique names!";
  }

// Loop through the keys of the pairs tracking object to assign available people
  for(let strAssigneeElement in objPairs) {
    // An array to track the available recipients
    let arrModifiedRecipients = GetRecipients(strAssigneeElement);
    // Check if we have any results, if not generate the array allowing the same family
    if(arrModifiedRecipients.length == 0) {
      arrModifiedRecipients = GetRecipients(strAssigneeElement, true);
    }
    // Generate a random number from the available selections in our modified array
    let intRandomIndex = Math.floor(Math.random() * arrModifiedRecipients.length);
    // Assign our key to our recipient
    objPairs[strAssigneeElement] = arrModifiedRecipients[intRandomIndex];
    // Assign our recipient to selected
    objSelected[arrModifiedRecipients[intRandomIndex]] = "Yes";

  }

  for(let strElement in objPairs) {
    strResult += "" + strElement + " -> " + objPairs[strElement] + "\n";
  }

  // return the formatted string
  return strResult;
}

let arrFirstInput = ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar', 'Mrs. Anwar', 'Mr. Conway', 'Mr. Cross'];
console.log(SecretSanta(arrFirstInput));
let arrSecondInput = ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar'];
console.log(SecretSanta(arrSecondInput));
let arrThirdInput = ['Mr. Wall'];
console.log(SecretSanta(arrThirdInput));
let arrFourthInput = ['Mr. Wall', 'Mr. Wall'];
console.log(SecretSanta(arrFourthInput));