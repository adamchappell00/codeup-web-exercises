(function(){
    "use strict";

    /**
     * TODO: COMPLETE
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Jay','David','Carl','Steve'];
    /**
     * TODO: COMPLETE
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO: COMPLETE
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log("----Manual index logs----")
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO: COMPLETE
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
console.log("----For Loop----");
for(var i = 0; i < (names.length); i++){
    console.log(names[i]);
}
    /**
     * TODO: COMPLETE
     * Refactor your above code to use a `forEach` loop
     */
console.log("----forEach iteration----");
names.forEach(function(name){
    console.log(name + " is one cool person.");
});
    /**
     * TODO: COMPLETE
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
console.log("----Functions Test----");
function first(input){
    return input[0];
}
console.log("First: "+ first([1, 2, 3, 4, 5]));
function second(input){
        return input[1];
    }
console.log("Second: "+ second([1, 2, 3, 4, 5]));
function third(input){
        return input[2];
    }
console.log("Third: "+ third([1, 2, 3, 4, 5]));
})();
