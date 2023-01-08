// * Functions : functions are the set of code which is used to execute perticular task for the multiple times.

// * Functions are executed once they invoked("Called").

// * Declaring functions :
/*
 * Functions are declared using 'function' keyword.
 * then there is function name
 * after that there is a parenthesis '()' which contains parameters ('sometimes it's empty').
 * then there is a function body inside curly brackets '{}'
 * Function can be called by there name
 */

//* Returning a value :
/*
            in javascript value can be returned using "return" keyword
        */

//! Syntax of functions

/* 
    function functionName(parameters) {
        function body;
    }
*/

// function myFunc(){
//     console.log("Hello World!");
// }

// myFunc()

// * Inner and Outer variable

//* Global variable

let userName = "Charukirti"; //global variable

function printUser() {
    userName = "lalit";
    console.log(userName);
}
console.log(userName); //remains same before function call
printUser()
console.log(userName); //changes after function call

//* inner variable or local variable

function outerVar() {
    let age = 12;
    console.log(age);
}

// outerVar()
// console.log(age);

//! Function with Parameters

function signUp(user , mail){
    let userName = user;
    let userMail = mail;
    console.log(`The user name is ${userName} and user email is ${userMail}`);
}

signUp("Charukirti", "charukirticc2609@gmail.com");

//! function calling another function
function func(uname,umail) {
if(uname == "Charukirti", umail == "charukirticc2609@gmail.com") {
console.log("Successfully logged in.");
} else {
console.log("Enter correct details.");
}

}



func("charukirt","charukirticc2609@gmail.com")

//! return value

function checkAge(age) {
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}

let age = 19;

if (checkAge(age)) {
    console.log("Permission granted");
} else {
    console.log("Permission denied");
}

//! Function Expression

let expression = function() {
    console.log("Hello Function Expression");
}

expression()

console.log(expression);

let userRole = function (userName, userRole) {
  switch (userRole) {
    case "admin":
      return `${userName} is an admin with all access`;
      break;
    case "moderator":
      return `${userName} is a moderator can review the content`;
      break;
    case "creator":
      return `${userName} is a creator can create & share the content `;
      break;
    case "audience":
      return `${userName} is audience can watch & react on the content`;
      break;
    default:
      return `${userName} there is no information about the user`;
  }
};

console.log(userRole("Charukirti","admin"));
console.log(userRole("Charukirti","creator"));


//* Arrow functions

let mainFunc = () => "Charukirti";
console.log(mainFunc());

// Arrow function with parameter
let printNum = (a, b) => a + b; // it uses implicit return
console.log(printNum(12, 10));

let equals = function(a, b) {
    if(a === b) {
        return 'Equal';
    } else {
        return 'Unequal';
    }
}

console.log(equals(1, 1))
console.log(equals(1, 2))

function repdigit(n) {
    let once = n % 10;
    let tens = Math.floor(n / 10);

    if(once === tens) {
        return 'Repdigit!';
    } else {
        return 'No Repdigit!'
    }
}

console.log(repdigit(22));
console.log(repdigit(23));

function addWithSurcharge(a, b) {
    if(a <= 10 && b <= 10) {
        return '1';
    } else if(a >= 10 && b >= 10) {
        return '2';
    }
}

console.log(addWithSurcharge(12,24))
