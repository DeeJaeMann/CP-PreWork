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
  // Beginning of child functions
  function PickRecipient(strAssignee, arrRecipientList, strMyFamily, boolSameFamily = false) {
    // Remove the assignee from the recipient list
    let boolFound = false;
    let intIndex = 0;
    let strSpouse = "";
    let intRandomIndex = 0;
    let strRecipientResult = "";
    let regexFamilyPattern = new RegExp(strMyFamily);
    
    let arrModifiedList = arrRecipientList

    // Remove the entries we need to from the list
    while(!boolFound) {
      if(arrModifiedList[intIndex] === strAssignee) {
        arrModifiedList.splice(intIndex, 1);
        // Check if we need to remove the spouse from the list
        if(!boolSameFamily) {
          for(let intRecipientIndex = 0; intRecipientIndex < arrModifiedList.length; intRecipientIndex++) {
            if(regexFamilyPattern.test(arrModifiedList[intRecipientIndex])) {
              strSpouse = arrModifiedList[intRecipientIndex];
              arrModifiedList.splice(intRecipientIndex, 1);
            }
          }
        }
        boolFound = true;
      }
      intIndex += 1;
    }

    // Check if we have enough elements of the array to pick from, if so assign the random element
    // if not, our result is already set to ""
    if(arrModifiedList.length > 0) {
      // Generate a random number based on the new list size
      intRandomIndex = Math.floor(Math.random() * arrModifiedList.length);
      strRecipientResult = arrModifiedList[intRandomIndex];
    }

    // Test the modified list
    //console.log(strAssignee);
    //console.log(arrModifiedList);
    //console.log(intRandomIndex);
    //console.log(arrModifiedList[intRandomIndex]);

    // Replace the entries after we're done assigning
    arrModifiedList.push(strAssignee);
    if(!boolSameFamily) {
      arrModifiedList.push(strSpouse);
    }
    return strRecipientResult;
  }
  // End of child functions

  // Formated string result
  let strResult = "";
  // Object to contain the pairs
  let objPairs = {};

  // We must have more than 1 person in the list
  if(arrInput.length <= 1) {
    return "There must be at least 2 people!"
  }


  //Populate the object keys
  for(let strElement of arrInput) {
    objPairs[strElement] = 1;
  }
  // Check that the object was populated
  //console.log(objPairs);

  for(let strElementAssign in objPairs) {
    // Get the family
    // The RegEx matches both Mr. and Mrs. and the space after and replaces with nothing
    let strFamily = strElementAssign.replace(/Mrs?\. /, "");
    let strThisRecipient = PickRecipient(strElementAssign, arrInput, strFamily);

    // Check if we have a result
    if(strThisRecipient === "") {
      // We do not, so we need to tell the PickRecipient function to use the same family
      strThisRecipient = PickRecipient(strElementAssign, arrInput, strFamily, true);
    }
    
    // Assign the recipient to the assignee
    objPairs[strElementAssign] = strThisRecipient;
    // Remove the recipient from the array
    let boolFoundRecipient = false;
    let intFoundRecipientIndex = 0;
    while(!boolFoundRecipient) {
      if(arrInput[intFoundRecipientIndex] === strThisRecipient) {
        console.log("Found " + arrInput[intFoundRecipientIndex] + " at: " + intFoundRecipientIndex);
        arrInput.splice(intFoundRecipientIndex, 1);
        boolFoundRecipient = true;
      }
      intFoundRecipientIndex += 1;
    }
    
  }


  // Format the string
  for(let strElement in objPairs) {
    strResult += "" + strElement + " -> " + objPairs[strElement] + "\n";
  }
  return strResult;
}

let arrFirstInput = ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar', 'Mrs. Anwar', 'Mr. Conway', 'Mr. Cross'];
console.log(SecretSanta(arrFirstInput));
let arrSecondInput = ['Mr. Wall', 'Mrs. Wall', 'Mr. Anwar'];
console.log(SecretSanta(arrSecondInput));