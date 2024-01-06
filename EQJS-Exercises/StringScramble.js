function StringScramble(str1,str2) { 

    // code goes here  
    /* This is supposed to take str1 as an initial parameter and check if the letters can be rearranged to
    create str2
    */
    //let strResult = "false";
    let intMatches = 0;
    let intLengthStr1 = str1.length;
    let intLengthStr2 = str2.length;
    let arrStr1Letters = [];
  
    
    // This can be done easier using a regEx.
    // Note: Figure that out later
    // First check if str1 is shorter than str2
    if(intLengthStr1 >= intLengthStr2) {
      // Str1 is longer or the same as str2
      // check if they are the same string
      if(str1 == str2) {
        // They are the same string, no further processing needed
        return "true";
      } else {
        // The strings are different
        // Populate an array with the letters of str1
        // Using an array so that the letters can be removed to prevent matching
        // the same letter twice
        for(let charLetter of str1) {
          arrStr1Letters.push(charLetter);
        }
        // Test to output the array
        //console.log(arrStr1Letters);
  
        // Iterate through the characters of the string
        for(let charStr2Letter of str2) {
          // Iterate through the elements of the array (letters of str1)
          for(let charStr1Letter of arrStr1Letters) {
            // Check if this letter matches the array element
            if(charStr2Letter == charStr1Letter) {
              // We have a match
              // Increment the matches counter
              intMatches++;
              // Change the array element to "Found"
              // This will prevent matching the same letter multiple times
              charStr1Letter = "Found";
            }
          }
        }
        // Check if our match count is the same as our length of str2
        if(intMatches == intLengthStr2)
          {
            // Its the same, we are tue
            return "true";
          } else {
            // It is not the same, we are false
            return "false";
          }
      }
    } else {
      // Str1 is shorter than str2, it can not be rearranged
      return "false";
    }
  
  
    //return strResult; 
  
  }
     
  // keep this function call here 
  console.log(StringScramble());