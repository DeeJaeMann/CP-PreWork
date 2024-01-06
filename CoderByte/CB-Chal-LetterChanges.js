function LetterChanges(str) { 

    // code goes here 
    let strResult = "";
    // Regular expression to match all upper and lower case letters
    let regexPattern = /[A-Za-z]/;
    let strLetter = "";
    // iterate through the string 
    for(intIndex = 0; intIndex < str.length; intIndex++){
      if(regexPattern.test(str[intIndex])) { 
        // The character is a letter
        // The regex.test method returns true if a match is found,
        // false if not.
        if(str[intIndex] == "z" || str[intIndex] == "Z") {
          // If we have a Z, the next character code will be a {,
          // lets force it back to an a
          strLetter = "a";
        } else {
          // For all other characters we will increment the character
          // code to get the next letter
          // This works much faster than a select statement to go
          // through the letters
          strLetter = String.fromCharCode(str.charCodeAt(intIndex)+1);
        }  
        //console.log(String.fromCharCode(str.charCodeAt(intIndex)+1));
        //console.log(str.charCodeAt(intIndex));
        switch(strLetter) {
          // If we have a vowel then we'll capitalize it
          case "a" :
          case "e" :
          case "i" :
          case "o" :
          case "u" :
            strLetter = strLetter.toUpperCase();    
        }
        strResult += strLetter;
      } else {
        // The character is not a letter, append it to the string
        strResult += str[intIndex];
      }
    }
  
    return strResult; 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges("hello*3"));