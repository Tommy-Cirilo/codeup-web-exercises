"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color name as input.
 * This function should return a message that related to that color.
 * Only worry about the colors defined below, if the color passed is not one of the ones defined below,
 * return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*let analyzeColor = prompt("please choose a color of the rainbow");

function ac(analyzeColor) {
   if ("red" , "orange", "yellow", "green", "blue", "indigo", "violet"){
    return ("yes, " + analyzeColor + " is a color of the rainbow" );
} else{
    return ("no, " + analyzeColor + " is not a color of the rainbow");
}
}
 console.log(ac("red"));*/


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/*let analyzeColor = randomColor;


switch (analyzeColor) {
    case "red":
        alert(analyzeColor + " is the color of power");
        break;
    case "orange":
        alert(analyzeColor + " is the color of fast food hunger");
        break;
    case "yellow":
        alert(analyzeColor + " is the color of happiness");
        break;
    case "green":
        alert(analyzeColor + " is the color of life");
        break;
    case "blue":
        alert(analyzeColor + " is the color of patience");
        break;
    case "indigo":
        alert(analyzeColor + " is the color of virtue");
        break;
    case "violet":
        alert(analyzeColor + " is the color of aggression");
        break;

    default:
        alert(analyzeColor + " is not a color of the rainbow, please try again");
        console.log(analyzeColor + " is not a color of the rainbow, please try again");

}*/



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
/*let analyzeColor = randomColor;

switch (analyzeColor) {
    case "red":
        alert(analyzeColor + " is the color of power");
        break;
    case "orange":
        alert(analyzeColor + " is the color of fast food hunger");
        break;
    case "yellow":
        alert(analyzeColor + " is the color of happiness");
        break;
    case "green":
        alert(analyzeColor + " is the color of life");
        break;
    case "blue":
        alert(analyzeColor + " is the color of patience");
        break;
    case "indigo":
        alert(analyzeColor + " is the color of virtue");
        break;
    case "violet":
        alert(analyzeColor + " is the color of aggression");
        break;

    default:
        alert(analyzeColor + " is not a color of the rainbow, please try again");
        console.log(analyzeColor + " is not a color of the rainbow, please try again");

}*/


 // ** TODO:
 // * Prompt the user for a color when the page loads, and pass the input from the
 // * user to your `analyzeColor` function. Alert the return value from your
 // * function to show it to the user.
 // */

let analyzeColor = prompt("Please enter a color of the rainbow");

switch (analyzeColor) {
    case "red":
        alert(analyzeColor + " is the color of power");
        break;
    case "orange":
        alert(analyzeColor + " is the color of fast food hunger");
        break;
    case "yellow":
        alert(analyzeColor + " is the color of happiness");
        break;
    case "green":
        alert(analyzeColor + " is the color of life");
        break;
    case "blue":
        alert(analyzeColor + " is the color of patience");
        break;
    case "indigo":
        alert(analyzeColor + " is the color of virtue");
        break;
    case "violet":
        alert(analyzeColor + " is the color of aggression");
        break;

    default:
        alert(analyzeColor + " is not a color of the rainbow, please try again");
        console.log(analyzeColor + " is not a color of the rainbow, please try again");

}



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

let customerNumber = parseFloat(prompt("What is your lucky number? 0-5"));
let totalAmount = parseFloat(prompt("please enter your total amount"));
let discount0 = 0;
    let discount1 = .10;
    let discount2 = .25;
    let discount3 = .35;
    let discount4 = .50;
    let discount5 = 1;



    switch (customerNumber) {
        case 0:
            alert("your discounted price is $" + (totalAmount + discount0 ));
            break;

        case 1:
            alert("your discounted price is $" + (totalAmount * discount1));
            break;

        case 2:
            alert("your discounted price is $" + (totalAmount * discount2));
            break;

        case 3:
            alert("your discounted price is $" + (totalAmount * discount3));
            break;

        case 4:
            alert("your discounted price is $" + (totalAmount * discount4));
            break;

        case 5:
            alert("your discounted price is $" + (totalAmount * discount5));
            break;

        default:
            alert("please select the correct Number");

    }




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
/*let totalbill = parseFloat(prompt("Please enter the amount of your total bill"));


 function calculateTotal (totalbill) {
     switch (luckyNumber) {
         case 0:
             alert("Your lucky number is: " + luckyNumber + "")

     }
 }*/





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let confirmNumberInput = confirm ("would you like to enter a number");
if (confirmNumberInput === true) {
    let confirmNumberInput =+ prompt("enter a number");
    confirmNumberInput % 2 === 0 ? alert("you entered a even number") : alert("you entered a odd  number");
    confirmNumberInput >= 0 ? alert("entered a positive") : alert("you entered a negative");
    alert("the number you entered plus 100 is equal" + (confirmNumberInput + 100));
} else {
    alert("you chose not to participate");
}






//question, how to wrap a switch board into a function, and then call the function.

