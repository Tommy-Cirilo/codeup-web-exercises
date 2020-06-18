console.log("Hello from external Javascript.");

alert("welcome to my webpage!");

let color = prompt("What is your favorite color?");

alert(color + ", that is my favorite color too!");


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleM = prompt("How many days did you rent the little mermaid for?");
let brotherB = prompt("How many days did you rent brother Bear for?");
let hercules = prompt("How many days did you rent Hercules for?");
littleM = Number(littleM);
brotherB = Number(brotherB);
hercules = Number(hercules);
// var littleM = 3;
// var brotherB = 5;
// var hercules = 1;
var totalCost = (littleM + brotherB + hercules) * 3;
alert("your total cost is: " + totalCost);
// console.log("Your total cost is: $" + totalCost);
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.




//next exercise

let googlePay = prompt("what was your pay at google?")
let googleHours = prompt("How many hours did you work at google for?")
let amazonPay = prompt("what was your pay at amazon?")
let amazonHours = prompt("How many hours did you work at amazon for?")
let facebookPay = prompt("what was your pay at facebook?")
let facebookHours = prompt("How many hours did you work at facebook for?")
// var googlePay = 400;
// var amazonPay = 380;
// var facebookPay = 350;
// var googleHours = 6;
// var amazonHours = 4;
// var facebookHours = 10;
googlePay = Number(googlePay);
googleHours = Number(googleHours);
amazonPay = Number(amazonPay);
amazonHours = Number(amazonHours);
facebookPay = Number(facebookPay);
facebookHours = Number(facebookHours);
var totalGooglePay = googlePay * googleHours;
var totalAmazonPay = amazonPay * amazonHours;
var totalFacebookPay = facebookPay * facebookHours;
var totalPay = totalGooglePay + totalAmazonPay + totalFacebookPay;
alert("your total pay of google is: " + totalGooglePay + "your total pay of amazon is: " + totalAmazonPay + "your total pay of facebook is: " + totalFacebookPay );


// console.log(totalGooglePay);
// console.log(totalAmazonPay);
// console.log(totalFacebookPay);
// console.log("Your total pay is: $" + (totalGooglePay + totalAmazonPay + totalFacebookPay));
// console.log(`Your total pay is: ${totalPay}`);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let isClassOpen = confirm("is there room in the class?");
let isScheduleOpen = confirm("does this class work with your schedule?");

alert("you may register: " + (isClassOpen && isScheduleOpen));


// var enrolled;
// var notFull = true;
// var notConflict = false;
// console.log(enrolled);
// enrolled = notFull && notConflict;
// console.log(enrolled);


// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.


// var moreThan2 = true;
// var notExpired = true;
// var premiumMem = false;
// // var offerApplied = (moreThan2 && notExpired) || (premiumMem && notExpired);
// var offerApplied = (moreThan2 || premiumMem) && notExpired;
// // console.log(offerApplied);
// var username = 'codeup';
// var password = 'notastrongpassword';
// var passAtLeastFive = password.length >= 5;
// var passNotIncludeUN = password.indexOf(username) === -1;
// var usernameAtLeastTwenty = username.length <= 20;
// var noLeadingTrailingWS = (username === username.trim()) && (password === password.trim());
// console.log(passAtLeastFive);
// console.log(passNotIncludeUN);
// console.log(usernameAtLeastTwenty);
// console.log(noLeadingTrailingWS);

let numberItemsPurchased = parseInt(prompt("how many items did you purchase?"));

let isOfferExpired = confirm("Press Ok if the offer is not expired");

let isPremiumMember = confirm("press ok if you are a premium member");

isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember);

alert("offer applied: " + (isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember)));

