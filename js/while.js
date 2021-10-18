"use strict";
console.log("START: While Loops")
var x = 2;
while(x < 65537) {
    console.log(x);
    x *= 2;
}
console.log("START: Do-While Loop")
var allCones = Math.floor(Math.random() * 50) + 50;
do{
    var conesWanted = Math.floor(Math.random() * 5) + 1;
    if(allCones >= conesWanted){
        console.log(conesWanted + " cones sold!");
        allCones -= conesWanted;
        continue;
    } else if(allCones !>= conesWanted){
        console.log("I cannot sell you " + conesWanted + ", I only have " + allCones)
    }
} while (allCones > 0)
