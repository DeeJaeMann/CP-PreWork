/*
Triangle Loop
Eloquent JavaScript Chapter 2 Excercise 1
Write a loop that makes seven calls to console.log to output this triangle:
#
##
###
####
#####
######
#######
 */

// Initialize the Line output (string)
let strLine = "";
//console.log("start program");
// Loop for each line output
for(let intLineIndex = 0; intLineIndex < 7; intLineIndex++) {
    //console.log("start first loop");
    // Loop for each column.  To append a number of #'s equal to the line number
    for(let intColIndex = 0; intColIndex < intLineIndex + 1; intColIndex++) {
        //console.log("start sub log");
        strLine += "#";
    }
    console.log(strLine);
    strLine = "";
}