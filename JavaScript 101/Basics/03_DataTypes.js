/* ** Every value in a JavaScript has different Data Types.

There are 8 Basic data types.

We can put any type of data in the Variable either it can be a string or number at a moment

Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

*/

// ** Numbers

/* It represents both integer and floating point numbers */

// ** Examples :-
let number = 11;
number = 12.5;
console.log(number);

// ** Strings

/* It is surrounded by quotes it may be single '', Double "" or Backtiks ``.

Single and Double Quote are simple quotes, There is no difference in between them

Backticks are extended functionality quote, They allow us to embed variables and expressions into a string by wrapping them in ${…}, 

*/

// ** Examples :-

let userName = "Charukirti";
let userEmail = "charukirticc2609@gmail.com";
console.log(`User name is ${userName}.`+ " " + ` of user is ${userEmail}`);

// ** Boolean

/* Boolean has two types "True" and other is "False". */

// let logedIn = true;
// console.log(logedIn);

// ** Typeof
/* The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to typeof x returns a string with the type name: */

typeof undefined 
// console.log(undefined);


/* -------------------------- Exercise --------------------------- */

const userId = 2223;
let firstName = "Charukirti";
let lastName  = "Chougule";
let stateName = "Maharashtra";
let email = "charukirti@gmail.com";
let password = "123@kefj$y";
let confirmPassword = "123@kefj$y";
let isLoggedInFromGoogle = true;

console.log(`
User with unique ID : ${userId}
User's first name : ${firstName}
User's last name : ${lastName}
User's state name : ${stateName}
User's email : ${email}
User's log status : ${isLoggedInFromGoogle}
`);