(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person = {
        firstName: "tommy",
        lastName: "cirilo"
        /*sayHello: function () {
            return "Hello from " +
        }*/
    };


    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };

    person.sayHello();
    // console.log(person.sayHello());





    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discount = .12;




    shoppers.forEach(function(customer) {
        console.log("hello " + customer.name + " your total is: ");
        if (customer.amount > 200){
            console.log(customer.amount - (customer.amount * discount));
        } else {
            console.log(customer.amount);
        }

    });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [ {

        title: "The Raven",
        author:{
            firstname: 'Edgar',
            lastname: "Allen Poe"
        }
    },
        {
            title: "The cask of Amontillado",
            author:{
                firstname: 'Henry',
                lastname: "Poe"
            }
        },
        {
            title: "The Murder in the Rue Morgue",
            author:{
                firstname: 'Rosalie',
                lastname: "Poe"
            }
        },
        {
            title: "The Fall of the House of Usher",
            author:{
                firstname: 'Elizabeth',
                lastname: "Poe"
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstname);
    console.log(books[0].author.lastname);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function (book) {
        console.log("Book # " + books.indexOf(book));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstname + " " +  book.author.lastname);
    });






    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    const createbook = function (title, authorfirstname, authorlastname) {
        let book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorfirstname;
        book.author.lastname = authorlastname;
        return book;
        // return {title,author:{authorlastname, authorfirstname}};
    }




    const showbookinfo = function(book, index){
        console.log("Book # " + books.indexOf(book));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstname + " " +  book.author.lastname);
    };





        let books2 = [];
        books2.push(createbook("Salmon of doubt", "douglas", "adams"));


   /* function createbook(title, author) {
        return title + " " + author;
    }

createbook("The raven", "Edgar");

function showbookinfo(bo) {

}*/

})();
