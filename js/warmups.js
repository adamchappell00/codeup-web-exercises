"use strict";
console.log(Date());

//Leave Line 1-3 Above, Put Current Exercise Below!
var bBallPlayers = [
    {
        name: "Hakeem Olajuwon",
        height: 213
    }, {
        name: "Muggsy Bogues",
        height: 160
    }, {
        name: "Chris Paul",
        height: 183
    }, {
        name: "Bol Bol",
        height: 218
    }, {
        name: "Moochie Norris",
        height: 185
    }, {
        name: "Manu Ginobili",
        height: 198
    }
];
function giveMeShortest(arr){
    var shortestHeight;
    var shortestObj;
    arr.forEach(function(person){
        if(person.height < shortestHeight || typeof shortestHeight === 'undefined'){
            shortestHeight = person.height;
            shortestObj = person;
        }
    });
    return shortestObj;
}
console.log(giveMeShortest(bBallPlayers));
/* Previous Exerises Here
--Tues November 9--

--Weds November 3--
var products = [
{
    name: 'Playstation 5',
    price: 599.99
}, {
    name: 'Logitech Wireless Mouse',
    price: 23.99
}, {
    name: 'Macbook Pro',
    price: 1099.99
}, {
    name: 'GoPro HERO10',
    price: 399.99
}, {
    name: '12" & 6" Metal Ruler Set',
    price: 5.99
}]
function sortByName(arr){
    arr.sort(function(input1, input2){
    var name1 = input1.name.toLowerCase();
    var name2 = input2.name.toLowerCase();
    if(name1 < name2){
        return -1;
    }
    if (name1 > name2) {
        return 1;
    }
    return 0;
    });
    return arr;
}
console.log(sortByName(products));

--Tues November 2--


    var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];
function getHighestQuantityObject(obj){
    var local =
        { name: "", quantity: 0}
    ;
    obj.forEach(function(input){
        if(input.quantity > local.quantity){
            local = input;
        }
    })
    return local;
}
console.log(getHighestQuantityObject(groceries));  //returns {name: “yams”, quantity: 50};


--Weds October 27--

Warmup
Var circle = {
	radius: 36
}
console.log(Math.round(Math.PI*circle.radius**2));

Find the area of the circle, and round it to the nearest whole number using the Math object.

Write a function named 'filterJunkFood' that takes in an array of foods and returns an array with only fruit and vegetable strings. Use the array above to test your output.
ar foods = ['cookies', 'carrots', 'cake', 'brownies', 'bananas', 'apples', 'celery', 'pumpkin pie']
var junk = ['cookies', 'cake', 'brownies', 'pumpkin pie']
function filterJunkFood(arr){
    var notJunk = [];
    arr.forEach(function(food){
         if(junk.includes(food) === false) {
             notJunk.push(food);
         }
    })
    return notJunk;
}
console.log(filterJunkFood(foods));

--Tues October 26--
Create a function that accepts an array as an argument, and that returns an array of objects that have a nationality property of “Canadian”.
function isCanadian(array){
    var canadians = [];
    array.forEach(function(person){
        if(person.nationality=== "Canadian"){
            canadians.push(person);
        }
    })
    return canadians;
}
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];
console.log(isCanadian(wrestlers));

--Mon October 25--
var myPokemon = {
    name: "Ponyta",
    type: "Fire",
    gender: "Male",
    abilities: ["Run Away", "Flash Fire"],
    weaknesses: ["Ground", "Water", "Rock"],
    statistics: {
        health: 10,
        speed: 20,
        attack: 15,
        defense: 12
    }
}
console.log(myPokemon);
--Thurs October 21--
function moveToEnd(array){
    var moveMe = array.shift();
    array.push(moveMe);
    return array;
}

console.log(moveToEnd([1,2,3,4,5]));
console.log(moveToEnd(["Monday", "Tuesday", "Wednesday", "Thursday","Friday"]));
console.log(moveToEnd(['roll', 'rock', 'and']));

--Weds October 20--
function secondToLast(array){
    console.log(array[array.length -2]);
}
secondToLast([1,2,3,4,5,6,7,8]);
secondToLast(['Apples','Bananas','Carrots','Tacos']);
secondToLast([false, false, true, false]);
secondToLast(['Yes']);

--Tues October 19--
Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.
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