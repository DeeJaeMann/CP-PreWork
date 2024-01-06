/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Input: "Hello World"
Output: "olleH dlroW"

Input: "A quick brown fox jumps over the lazy dog"
Output: "A kciuq nworb xof spmuj revo eht yzal god"
*/

function ReverseOrder(strSource) {
    let arrString = strSource.split(" ");
    
    let arrResult = [];

    for(let intIndex = 0; intIndex < arrString.length; intIndex++) {
        let arrRawResult = [];
        for(let strElement of arrString[intIndex])  {
            arrRawResult.unshift(strElement);
        }
        arrResult.push(arrRawResult.join(""));
        //console.log(arrRawResult);
        //console.log(arrResult);
    }
    return arrResult.join(" ");
}

let strFirst = "A quick brown fox jumps over the lazy dog";
console.log(ReverseOrder(strFirst));