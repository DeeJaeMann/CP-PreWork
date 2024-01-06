function FibonacciChecker(num) { 

    // code goes here
  
    // Fn = Fn-1 + Fn-2
    // 0, 1, 1, 2, 3, 5...
  
  
    function FibonacciSequence(intNum, intPrevious = 0, intCurrent = 1) {
      //console.log("Num: " + intNum);
      //console.log("Previous: " + intPrevious);
      //console.log("Current: " + intCurrent);
      intResult = intPrevious + intCurrent;
      //console.log("Result: " + intResult)
      if(intResult > intNum || intResult < 0) {
        return 0;
      } else {
        if(intResult == intNum) {
          return 1;
        } else {
          intPrevious = intCurrent;
          intCurrent = intResult;
          return FibonacciSequence(num, intPrevious, intCurrent);
        }
      }
    }
  
    if(FibonacciSequence(num)) { return "yes"; } else { return "false"; } 
  
  }

  console.log(FibonacciChecker(8));