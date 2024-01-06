function PalindromeTwo(str) { 

    // code goes here  
    let arrStr = []
    let arrStrBackward = [];
    let intIndex = 0;
    // RegEx to match letter characters
    let regexPattern = /[A-Za-z]/
  
    // Populate the arrays, stripping all non-letter characters
    for(let charLetter of str) {
      // Test to see if we are matching a letter character
      if(regexPattern.test(charLetter)) {
        // We're adding this letter in reverse order to the array
        // Convert to lowercase
        arrStrBackward.unshift(charLetter.toLowerCase());
        // We're adding this letter in order to the array
        // Convert to lowercase
        arrStr.push(charLetter.toLowerCase());
      }
    }
  
    // iterate through the array to check if both arrays match
    for(let charLetter of arrStr)
    {
      if(charLetter != arrStrBackward[intIndex])
      {
        return false;
      }
      intIndex++;
    }
  
    //console.log(arrStr);
    //console.log(arrStrBackward);
  
    return true; 
  
  }
     
  // keep this function call here CoderByte Piece
  //console.log(PalindromeTwo(readline()));