"use strict";

console.log("Hello from External JavaScript")

alert("Welcome to my Website!");

var confirmMe = confirm('Can you please confirm this confirm command?');
console.log("Confirmed: " + confirmMe);

var userFavoriteColor= prompt('What is your favorite color?');
console.log("User response: " + userFavoriteColor);

if (userFavoriteColor == 'blue'){
    alert("Great, Blue is my favorite color too!");
    console.log("User Congratulated on having blue as a favorite color.");
} else {
    alert("Too bad, " + userFavoriteColor + " is cool, but isn't my favorite.");
    console.log("User shamed for poor choice of: " +userFavoriteColor);
}

// Exercise 3 - Data Types Reformatted for JS below
// Rental Exercise
var rentalRate = 3;
alert("The daily rental rate per movie is " + rentalRate);
console.log("Rental rate displayed: " + rentalRate);
var hercules = prompt("How many days would you like to rent Hercules?")
hercules = Number(hercules);
console.log("Hercules rental days: "  + hercules);
var littleMermaid = prompt ("How many days would you like to rent the Little Mermaid?")
littleMermaid = Number(littleMermaid);
console.log("Little Mermaid rental days: "  + littleMermaid);
var brotherBear = prompt("How many days would you like to rent Brother Bear?")
brotherBear = Number(brotherBear);
console.log("Brother Bear rental days: "  + brotherBear);

var totalRental = (hercules+littleMermaid+brotherBear) * rentalRate;
alert("Your Rental total is " + totalRental + " dollars.");
console.log("User sent total: " + totalRental);

// Pay Exercise
var confirmHours = confirm("Please confirm that you worked 6 hours for Google, 10 hours for Facebook, and 4 hours for Amazon this week. ")
console.log("Hours confirmed: " + confirmHours);

var totalPay = (400*6)+(350*10)+(380*4)
if (confirmHours == true) {
    alert("Great, your total pay for the week is: " + totalPay);
    console.log("User sent total: " + totalPay);
} else {
    alert("We may have an issue, please contact Human Resources.");
    console.log("User alerted to issue.");
}

// Student Enrollment Exercise

var courseHasRoom = confirm("Confirm if the course has room.");
console.log("Course Has Room: "+courseHasRoom);
var isStudentAvailable = confirm("Confirm if you are available at 8:00 AM to 9:00 AM?");
console.log("Student Available: " + isStudentAvailable);
var canEnroll = Boolean(courseHasRoom && isStudentAvailable);
console.log("You can enroll: " + canEnroll);
if(canEnroll == true){
    alert("You are able to enroll in this course.");
    console.log("User alerted able to enroll.");
} else {
    alert("You cannot enroll in this course.");
    console.log("User alerted unable to enroll.");
}

// Store - Coupon Code Check

var itemTotal = 2;
var redemptionDate = 181;
var expiryDate = 342;
alert("You have " + itemTotal + " items in your cart.");
console.log("User alerted to item total: " + itemTotal);
var premiumMember = confirm("Confirm if you are a Premium Member.");
console.log("User is Premium: " + premiumMember);
var redemptionValid = Boolean((redemptionDate<expiryDate) && ((itemTotal>=2)||(premiumMember=true)));
console.log(redemptionValid);

if(redemptionValid == true) {
    alert("You may checkout with the active coupon code.");
    console.log("User alerted that Coupon is valid");
} else {
    alert("You may not checkout with the coupon code applied.");
    console.log("User alerted that coupon is NOT valid.");
}


