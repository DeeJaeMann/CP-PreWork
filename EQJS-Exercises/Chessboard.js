/*
Eloquent Javascript Chapter 2 Exercise 3
Chessboard
8x8 grid
newlines to separate lines
each position of grid is either whitespace or #
characters form chessboard
output should look like this:
  # # # #
 # # # # 
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
 Once program works:

  Define binding size = 8
  change program so it works for any size, outputting a grid of given width and height
 */

let intHeight = 8;
let intLength = 8;
let strLine = "";

for(let intLineIndex = 0; intLineIndex < intHeight; intLineIndex++) {
    for(let intColIndex = 0; intColIndex < intLength; intColIndex++ ) {
        if((intLineIndex + 1) % 2 == 0) {
            // Even Number Line
            if((intColIndex + 1) % 2 == 0) {
                // Even Column
                strLine += " ";
            } else {
                strLine += "#";
            }
        } else {
            if((intColIndex + 1) % 2 == 0) {
                strLine += "#";
            } else {
                strLine += " ";
            }
        }
    }
    strLine += "\n";
}

console.log(strLine);