#!/usr/bin/node
function AlphabetSoup(str) { 

    // code goes here
  
    // Initialize the return string as empty
    let strResult = "";
    // Left and right limits for alphabetical
    let strCharacters = "az";
    // Convert them to numbers
    let intFirstCharCode = strCharacters.charCodeAt(0);
    let intLastCharCode = strCharacters.charCodeAt(1);
    // Initialize our current letter to a
    let intThisCharCode = intFirstCharCode;
    // array to store the character values from the string entered
    let arrTemp = [];
  
    //console.log(intThisCharCode);
  
    // Iterate through the string and store the character valuse into
    // an array
    for(intIndex = 0; intIndex < str.length; intIndex++) {
      arrTemp.push(str.charCodeAt(intIndex));
    }
    //console.log(arrTemp);
    //console.log(intThisCharCode + " : " + intLastCharCode);
  
    // Starting at the character code of "a", iterate through the alphabet
    while(intThisCharCode < (intLastCharCode + 1)) {
      // iterate through the array to search for characters
      for(intIndex = 0; intIndex < arrTemp.length + 1; intIndex++) {
        //console.log(intIndex + " : " + arrTemp[intIndex] + " : " + intThisCharCode);
        
        // if the character at this index matches the letter we're searching for
        // append it to the string 
        if(arrTemp[intIndex] == intThisCharCode) {
          //console.log("Found: " + String.fromCharCode(intThisCharCode));
          strResult += String.fromCharCode(arrTemp[intIndex]);
        }
      }
      // Next letter
      intThisCharCode++;
    }
  
    return strResult; 
  
  }

  console.log(AlphabetSoup("coderbyte"));