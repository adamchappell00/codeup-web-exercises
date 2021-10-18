"use strict";
console.log(Date());

//Leave Line 1-3 Above, Put Current Exercise Below!

for( var x = 1; x <= 100; x++){
    if((x % 3 ==0)&&(x % 5 == 0)){
        console.log("FizzBuzz");
        continue;
    } else if(x % 3 == 0){
        console.log("Fizz");
        continue;
    } else if(x % 5 == 0){
        console.log("Buzz");
        continue;
    }
    console.log(x);
}



/* Previous Exerises Here

--Tues October 19--
Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.

--Mon October 18--
Questions:
- When writing code to test our tests in TDD it’s important to put yourself in the mindset of a (junior/senior) web developer. This will help you in ensuring that our tests are fully comprehensive.
JUNIOR---Gotta Plan for when you don't know or don't have coffee!

When writing code with tests provided to me, it’s important for me to write code:
A. With minimal effectiveness so as to green all the tests.
B. With full functionality so as to ensure my function works as intended
C. Both
C!!!! If you only write for tests you aren't necesarrily fulfilling the purpose, and if you aren't passing the tests,
QA might hate you on release!!!!

--Fri October 15--
function typeCheck(input){
    if (typeof input === 'string'){
        return "Haha, it's a string of string!"
    } else {
        return typeof input;
    }
}
// Instructors are not kind with our brains on the following 4 tests
// console.log(typeCheck(‘’));
// console.log(typeCheck(isNaN()));
// console.log(typeCheck(!false * 3));
// console.log(typeCheck(4 + ‘4’));
var test1 = '';
var test2 = isNaN();
var test3 = !false * 3;
var test4 = 4 + '4';

console.log(typeCheck(test1));
console.log(typeCheck(test2));
console.log(typeCheck(test3));
console.log(typeCheck(test4));

--Thurs October 14--
var hadBreakfast = Boolean(Math.round(Math.random()));
var hadBreakfastMessage = hadBreakfast ? "I had an amazing breakfast today" : " I am hungry :(";
console.log(hadBreakfast);
console.log(hadBreakfastMessage);

--Weds October 13--
function gimmeSeven(){
    return 7;
}
console.log(gimmeSeven());
 */