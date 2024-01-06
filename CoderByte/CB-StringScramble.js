function StringScramble(str1,str2) { 

    // code goes here  
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
              //charStr1Letter = "Found";
              arrStr1Letters[arrStr1Letters.indexOf(charStr1Letter)] = "found";
              break;
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
  
  }
     
  // keep this function call here CoderByte Piece
  //console.log(StringScramble(readline()));

  
 console.log(StringScramble("coodrebtqqkye", "coderbyte")); 
 console.log(StringScramble("heloooolwrdlla", "helloworld"));
 console.log(StringScramble("win33er","winner"));
  /* 
  1. For input 

"coodrebtqqkye"
 and 
"coderbyte"
 the output was incorrect. The correct output is 
true
2. For input 

"heloooolwrdlla"
 and 
"helloworld"
 the output was incorrect. The correct output is 
true
3. For input 

"win33er"
 and 
"winner"
 the output was incorrect. The correct output is 
false
4. For input 

"coamamaaqq"
 and 
"comma"
 the output was incorrect. The correct output is 
true
5. For input 

"lettrrkakaeaaaqq"
 and 
"letter"
 the output was incorrect. The correct output is 
true
6. For input 

"yelowrqwedlk"
 and 
"yellowred"
 the output was incorrect. The correct output is 
true
*/