
/*Create a function named showMultiplicationTable that accepts a number and
console.logs the multiplication table
for that number (just multiply by the numbers 1 through 10)*/

let num = 0;

let showMultiplicationTable = function (num){
    for (let i=1; i<=10; i++){
        console.log(num + " x " + i + " = " + (i * num));
    }
}

showMultiplicationTable(5);
/*while (num <= 10) {
    num ++;
    console.log("7 x " + num + " is " + (7 * num));
}*/
console.log("finished first problem");

//alternate instructor solution
/*
let multiply = function(a, b) {
    let answer = 0;
    for (let i = 0; i < b; i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(4, 5));*/


/*Use a for loop and the code from the previous lessons to
generate 10 random numbers between 20 and 200 and
output to the console whether each number is odd or even. For example:*/

let even = " is even";
let isOdd = " is odd";

for (let i=0; i <10 ; i++) {
    //for iteration purposes
    // console.log(i);
    let num = Math.floor(Math.random() * 181 ) + 20;
    if (num %2===0) {
        console.log("the number " + num + even);
    } else{
        console.log("the number " + num + isOdd);
    }
}
console.log("finished second problem");


/*Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999*/


for (let i=1; i<=9; i++) {
    let str = "";
    for(let j=1; j<=i; j++){
        str += i;
    }
    console.log(str);
}

console.log("Third problem just about done");


/*Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5*/

for (let i=100; i>=5; i-=5){
    console.log(i);
}
console.log("fourth problem is done");