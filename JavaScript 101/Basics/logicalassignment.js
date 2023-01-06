// logical OR assignment operator (||=)

// It is introduced in ES2021.
// It accepts two operand
// if the left operand is falsy then it assigns right operand to the left operand

// x ||= y
// here it assings value of y to x only if the value value of x is falsy

let result = NaN; 
result ||= "You failed!";
console.log(result);
/*here result = NaN so it's falsy. so result is falsy then string you failed is assigned to x */

result = "Poor"; // here result = Poor and its truthy. so operator dosen't assigns good  to result.
result ||= "Good.";
// console.log(result);

let userName;
userName = "ccc"
userName ||= "Pls enter your name.";
// console.log(userName);


//! Logical AND assignment operator

// logical AND assignment operator only assigns y to the x if the x is truthy.
// x &&= y

let person = {
    firstName: 'Jane',
    lastName:'Doe',
};

person.lastName &&= 'Smith';

console.log(person);

let firstName = true;
// console.log(firstName);
firstName &&= "Charu";
// console.log(firstName);
// firstName &&= "charles";

firstName &&(firstName = true);
console.log(firstName);


// The nullish coalescing assignment operator

// The nullish coalescing assignment operator only assigns y to x if x is null or undefined

let user ;
user ??= 'John Doe';
console.log(user);