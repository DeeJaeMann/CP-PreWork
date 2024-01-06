/*
    Eloquent JavaScript Chapter 2 Exercise 2
    FizzBuzz
    Print all the numbers from 1 to 100
    Exceptions:
        Numbers divisible by 3, print "Fizz" instead
        Numbers divisible by 5 (and not 3), print "Buzz" instead
        Numbers divisible by 3 and 5 print "FizzBuzz" and still print "Fizz" or "Buzz"
 */

// Initialize Line string
let strLine = "";

// Iterate from 1 to 100 (0 to 99)
for(let intIndex = 0; intIndex < 99; intIndex++) {
    // Check if divisible by 3 and 5
    // Remember to add 1 to the index as we start at 0
    // Remember to add 1 before performing modulus operation
    if((((intIndex + 1) % 3) == 0) && (((intIndex + 1) % 5) == 0)) {
        // Add "FizzBuzz" to the string
        strLine = "FizzBuzz ";
    } // end if(((intIndex + 1 % 3) == 0) && ((intindex + 1 % 5) == 0))
    // Check if divisible by 3
    if(((intIndex + 1) % 3) == 0) {
        // Add "Fizz" to the string
        strLine += "Fizz";
    } // end if((intIndex + 1 % 3) == 0)
    // Check if divisible by 5
    else if(((intIndex + 1) % 5) == 0) {
        strLine += "Buzz";
    } // end if((intIndex + 1 % 5) == 0)
    else {
        // Add the number to the line
        // Force it to string just in case
        strLine = intIndex + 1;
    }
    // Output the line
    console.log(strLine);
    strLine = "";
}