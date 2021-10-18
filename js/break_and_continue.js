"use strict";
console.log("START: Break and Continue")

do {
    var userNum = prompt('Please enter an odd number between 1 and 50.');
    var userNumValid = false;
    if((userNum <=50) && (userNum >=1) && (userNum % 2 !== 0)){
        userNumValid = true;
        break;
    }
    console.log(userNum + " was entered.");
    alert("The number entered did not meet the criteria given.");
} while (userNumValid === false)
console.log("The number to skip is " + userNum);
for( var b = 1; b < 50; b++){
    if((b % 2 === 0)||(b == userNum)){
        continue;
    }
    console.log(b + " is an odd number.");
}





