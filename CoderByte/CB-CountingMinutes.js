function CountingMinutes(str) { 

    // code goes here  
    let boolStartAM = true; // True for AM, False for PM
    // Split the input string on the -
    let arrParseStr = str.split(/\-/);
    // Split the hours from the : (array form so take the first element)
    let intStartHour = parseInt(arrParseStr[0].split(/\:/)[0]);
    // Match the 2 digits from the parsed string (everything after the :)
    // RegEX.match returns the matched string (in array form so we take the first element)
    let intStartMin = parseInt(arrParseStr[0].split(/\:/)[1].match(/\d{2}/)[0]);
    let boolEndAM = true; // True for AM, False for PM
    // Split the hours from the : (array form so take the first element)
    let intEndHour = parseInt(arrParseStr[1].split(/\:/)[0]);
    // Match the 2 digits from the parsed string (everything after the :)
    // Regex.match returns the matched string (in array form so we take the first element)
    let intEndMin = parseInt(arrParseStr[1].split(/\:/)[1].match(/\d{2}/)[0]);
  
    let intHourDifference = 0;
    let intMinDifference = 0;
    // RegEX pattern to match only 1 a, case insensitive
    let regexAM = /a{1}/i;
    
    // RegEX.Test returns true for false, so just test if we found an a
    boolStartAM = regexAM.test(arrParseStr[0]);
    boolEndAM = regexAM.test(arrParseStr[1]);
  
    //console.log(boolEndAM);
  
    // Hours logic, we're going to convert to 24 hour time for both Start and End
    if((boolStartAM == false) && (intStartHour < 12)) { 
      intStartHour += 12;
    } else if(boolStartAM && (intStartHour == 12)) {
       intStartHour = 24;
    }
  
    if((boolEndAM == false) && (intEndHour < 12)) {
      intEndHour += 12;
    } else if(boolEndAM && (intEndHour == 12)) {
      intEndHour = 24;
    }
  
    // Initial hours difference
    intHourDifference = intEndHour - intStartHour;
    // Lets check if we're the same hour of the next day
    if(((intEndMin < intStartMin) && (intStartHour == intEndHour))) {
      intHourDifference += 24;
    } 
  
    // Initial minutes difference
    intMinDifference = intEndMin - intStartMin;
    // Lets check if the difference is negative
    if(intMinDifference < 0) { 
      // For a negative difference we'll adjust the hour
      // add 60 minutes to the negative which will give us the correct minutes
      intMinDifference += 60; 
      // subtract an hour from our hours difference to accomodate
      intHourDifference -= 1;
      }
  
    // Don't forget to multiply the hours by 60 (60 minutes in an hour)
  
    return ((intHourDifference * 60) + intMinDifference);
  
  }
  
  console.log(CountingMinutes("1:00pm-11:00am"));

  // keep this function call here (Coderbyte piece)
  //console.log(CountingMinutes(readline()));

  /*
  Missed some things:

1. For input 

"1:00pm-11:00am"
 the output was incorrect. The correct output is 
1320
2. For input 

"2:03pm-1:39pm"
 the output was incorrect. The correct output is 
1416
3. For input 

"2:08pm-2:00am"
 the output was incorrect. The correct output is 
712
4. For input 

"3:00pm-4:45am"
 the output was incorrect. The correct output is 
825
 */