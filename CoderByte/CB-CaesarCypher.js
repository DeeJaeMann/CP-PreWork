/*  CoderByte Challenge
    Caesar Cipher
    Input: string, int
    Output: string

    Shift each letter in string by N places in alphabet.
    Punctuation, Spaces, Capitalization remain intact

    ie. "Caesar Ciper", 2 -> Ecguct Ekrjgt
        "abc", 0 -> abc
        "Hello", 4 -> Lipps
 */

function CaesarCipher(str, num) {
    // Character code constants
    const UPPER_A_CODE = 65;
    const UPPER_Z_CODE = 90;
    const LOWER_A_CODE = 97;
    const LOWER_Z_CODE = 122;

    let intThisCharCode = 0;
    let intOverLimit = 0;
    let arrString = [];

    let regexLetterPattern = /[A-Za-z]/; 

    for(let intIndex = 0; intIndex < str.length; intIndex++) {
        // Check if we have a letter
        // .test returns true if the pattern matches, false if it does not
        if(regexLetterPattern.test(str[intIndex])) {
            // We have a letter

            // Get the character code of this letter
            intThisCharCode = str.charCodeAt(intIndex);

            if((intThisCharCode >= LOWER_A_CODE) && (intThisCharCode <= LOWER_Z_CODE)) {
                // We have a lowercase letter
                // Our range is 97 - 122
                if((intThisCharCode + num) > LOWER_Z_CODE) {
                    // Adding our int will pass 'z' so we'll need to loop back to 'a'
                    intOverLimit = (intThisCharCode + num) - LOWER_Z_CODE;
                    // Add the character value of 'a' + our intOverLimit 
                    arrString.push(String.fromCharCode((LOWER_A_CODE + intOverLimit)-1));
                } else {
                    // Our lowercase letter will not pass 'z' just add the num
                    arrString.push(String.fromCharCode(intThisCharCode + num));
                }
            } else {
                // We have an uppercase letter
                // Our range is 65 - 90
                if((intThisCharCode + num) > UPPER_Z_CODE) {
                    // Adding our int will pass 'Z' so we'll need to loop back to 'A'
                    intOverLimit = (intThisCharCode + num) - UPPER_Z_CODE;
                    // Add the character value of 'A' + our intOverLimit
                    arrString.push(String.fromCharCode((UPPER_A_CODE + intOverLimit)-1));
                } else {
                    // Our uppercase letter will not pass 'Z' just add the num
                    arrString.push(String.fromCharCode(intThisCharCode + num));
                }
            }
        } else {
            // We do not have a letter, add the element with no processing
            arrString.push(str[intIndex]);
        }
    }

    return arrString.join("");
}

console.log(CaesarCipher("coderBYTE", 2));

/*
I didn't test this well enough the first time through.  The above code has been modified
with comments of what I forgot to check the first go-through

1. For input "coderBYTE" and 2 the output was incorrect. The correct output is eqfgtDAVG

2. For input "no change" and 0 the output was incorrect. The correct output is no change

3. For input "some change" and 1 the output was incorrect. The correct output is tpnf dibohf

4. For input "what" and 2 the output was incorrect. The correct output is yjcv

5. For input "dogs" and 8 the output was incorrect. The correct output is lwoa

6. For input "byte" and 13 the output was incorrect. The correct output is olgr

7. For input "byte-dash" and 0 the output was incorrect. The correct output is byte-dash

8. For input "aPPlication" and 2 the output was incorrect. The correct output is cRRnkecvkqp
 */