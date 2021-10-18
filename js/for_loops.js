"use strict";
console.log("START: For Loops")

function showMultiplicationTable(num){
    for (var x = 1; x <=10; x++){
        console.log(num + ' x ' + x + ' = ' + (num*x));
    }
}
showMultiplicationTable(7);

for( var i = 1; i <= 10; i++) {
    var numberO = Math.floor(Math.random() * (180)) + 20;
    if( numberO % 2 === 0){
        console.log(numberO + ' is even.');
    } else {
        console.log(numberO + ' is odd.');
    }
}
for( var i = 1; i < 10; i++){
    var stringI = i.toString();
    var stringIt = stringI;
    for( var x = 1; x < i; x++){
        stringIt += stringI;
    }
    console.log(stringIt);
}
for( var n = 20; n > 0; n--){
    console.log(n*5);
}

