"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
// var isAdmin = false;
// if (isAdmin) {
//     //show the navbar code will be inside this if statement
// }
//completed


//TODO Together: Send a 20% off coupon if its users birthday
// var birthday = true;
// if(birthday) {
//     //send 20% off coupon
// }

//completed

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
// if (isRainy) {
//     alert("its rainign");
// }
//complete


//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 300;
// var currentBalance = 200;
//
// if(itemCost > currentBalance) {
//     alert("Item cost is greater than current balance. earn more money")
// }
//complete


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 10;
// if (numberOfLives === 0) {
//     alert("SOrry, game over");
// }
//complete


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "rainy"
// if(weather === "snowing") {
//     alert ("it's snowing!");
// }

//completed

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 5;
// if (numberInput >10){
//     alert("true");
// }

//completed


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

// function isGameOver(numOfLives) {
//     console.log("current lives: " + numOfLives);
//     if(numOfLives ===0) {
//         alert("Sorry game over")
//     }
// }





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = false;
//
// if (isAdmin){
//     //show specific navbar
//
//
// }  else {
//     //show different navbar
// }


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
//
// if(isRainy){
//     alert("it's raining")
// }else {
//     alert ("have a nice day")
// }




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
//
// if (numberOfLives ===0) {
//     alert("sorry game over")
//
// } else {
//     alert("next level")
// }




//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("its snowing")
// } else {
//     alert("check back later for more details")
// }




//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
//
// if (numberInput > 10) {
//     alert("true")
// } else {
//     alert("number is less than 10")
// }




//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.







//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
//
// var confirmOver13 = function (age) {
//     if(age >= 13){
//         alert("you may proceed")
//     } else {
//         alert("too young kid")
//     }
// }

// confirmOver13(age: 13);

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("its snowing")
// } else if (weather === "its raining") {
//     alert("its raining")
// } else {
//     alert("have a nice day")
// }


//TODO Together: refactor the above statement as a function

// var weather = "snowing";
// function checkweather(weather) {
//     if (weather === "snowing") {
//         alert("its snowing")
//     } else if (weather === "its raining") {
//         alert("its raining")
//     } else {
//         alert("have a nice day")
//     }
// }
//
// checkweather("its raining");

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var checkTrafficLight = function(color) {
//     if(color === "green") {
//         alert("safe to go")
//     } else if(color === "yellow") {
//         alert("slow down with caution")
//     } else if(color === "red") {
//         alert("HALT!")
//     } else {
//         alert("please enter a proper traffic light color red, yellow, or green")
//     }
//
// }
//
// checkTrafficLight("yellow");






// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are.
// If they are eligible, check age.
// If they are 15 they are eligible for a learners permit,
// if they are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not eligble for a license.


// var age = 10;
// var havePermit = true;
// //this satisfies conditino 1
// if (age < 15) {
//     alert("you are not eligible for a learners permit")
// }else {
//     //this condition satisfies condition 3
//     if (age >= 16 && havePermit) {
//
//         alert("you are eligible for a learners permit")
//     } else if (age >= 16 && !havePermit) {
//         alert("you are not eligible for a license")
//     } else {
//         alert("you are eligible for a learners permit")
//     }
// }







// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary
//
// var message;
// var success = true;
// var name = "tommy";


/*if (success) {
    message = "Operation was successful.";
} else if (name === "tommy"){
    message = "hello, " + name;

} else{
    message = "Oops, something went wrong.";
}

console.log(message);*/

//WRITE YOUR TERNARY STATEMENT HERE!
// message = (success) ? "value if true" : "value if false";







//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

/*if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
console.log(weatherMessage);*/

//WRITE YOUR TERNARY STATEMENT HERE!
// weatherMessage = (weather === "sunny") ? "its sunny" : "Have a nice day";
//
//
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:
// switch statement syntax
/*var num = 1;
switch (num) {
    case 0:
        console.log("you turned on the lights")
        //actual code
        break;
    case 1:
        console.log("you turned off the lights")
        //actual code
        break;
    case 2:
        console.log("you turned off the lights")
        //actual code
        break;
    case 3:
        console.log("you turned off the lights")
        //actual code
        break;
    default:
        console.log("default case")
        //default or 'else' case
}*/


/*
var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);*/

/*if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham") {
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}*/


/*switch (pizzaPreference) {
    case "pineapple and hot sauce":
        alert("what a coincidence, thats my favorite")
        break;
    case "cheese":
        alert("just plain cheese? okay ...")
        break;
    case "ham":
        alert("ham is easy to spell and awesome")
        break;
        default(pizzaPreference + "isnt my favorite, but lets order some");
}*/







//TODO: Write a switch statement that evaluates weather as the condition.
// Check for "rainy", "sunny", "snow", and a default case.

/*let weather = prompt("whats the weather like today?");


switch (weather) {
    case "sunny":
        alert("its bright outside")
        break;
    case "rainy":
        alert("its wet outside")
        break;
    case "snow":
        alert("its cold outside")
        break;

    default:
        alert("since its " + weather + "today, we could watch from inside");


}*/



//TODO: Rewrite the intersection function from earlier as a switch statement.


/*var trafficColor = prompt("please enter a traffic light color");

switch (trafficColor) {
    case "green":
        alert("safe to proceed");
        break;
    case "yellow":
        alert("proceed with caution");
        break;
    case "red":
        alert("halt!");
        break;
    default:
        alert("please pick a traffic light color");
}*/






// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

