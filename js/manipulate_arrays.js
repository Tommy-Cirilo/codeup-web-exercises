let weekdays = ["monday" , "tuesday" , "wednesday", "thursday" , "friday"];



console.log("the days array length is: " + weekdays.length);


weekdays.unshift("sunday");
weekdays.push ("saturday");
console.log("The weekdays array data: ");

weekdays.forEach(function (day) {
    console.log('\t', day);
})




let array = [1,2,3,4,5];

console.log(array);

let removeditem = array.pop();

console.log("removed last item: " + removeditem);

let removeitem = array.shift();

console.log("removed first item" + removeitem);

console.log(array);


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

console.log(colors[5]);



let fruits = ["banana", "orange", "apple", "mango"];

let slicedfruit = fruits.slice(1, 3);


console.log(slicedfruit);




console.log(fruits.reverse());


console.log(colors.sort());


console.log(fruits.sort());

console.log(fruits.reverse());

