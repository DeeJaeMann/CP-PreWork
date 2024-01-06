
function FindWords(strSentence, strWord) {
    let regexPattern = new RegExp(strWord, "igd");

    /*
    if(regexPattern.test(strSentence)) {
        strSentence.match(regexPattern);
    }
    return "Not found.";
    */
   //return regexPattern.test(strSentence);
   //return strSentence.search(regexPattern);
   return regexPattern.exec(strSentence);
}

let strFirstSentence = "A little dog barks at the door!";
let strFirstWord = "Pizza"
console.log(FindWords(strFirstSentence, strFirstWord));
let strSecondWord = "dog";
console.log(FindWords(strFirstSentence, strSecondWord));
let strSecondSentence = "Dogs, dog, doggie, dog!";
console.log(FindWords(strSecondSentence, strSecondWord));
