// ! Some Basic terms about Operators //

// ** Unary : - An operator Unary if it has single operand
// ** Binary :- An operator Binary if it has double operand

// ! Operation in maths

/*

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **. (Square)

*/

let a = 10;
let b = 2;

let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let Remainder = a % b;
let expo = a ** 3;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div );
// console.log(Remainder);
// console.log(expo);
console.log(add,sub,mult,div,Remainder,expo);


// ** String Concatination

// ! We can concate string using '+' operator

let string = "Hello !," + "Charukirti.";
// console.log(string);

// ! if any operand is a string, then other is also converted into string

let x = 8 , y = '7';
console.log(x + y);
console.log(y + x);
 
// ** More complex

// console.log(3 + 7 + '2');
// console.log("2" + 2 - "2" + "2");

// ! Assignments "="

// Returns the value

let c = 2;
let d = 8;

let e = 4 * (d = c + 5); //28
// console.log(e);

let g = 12 + 3;
g += 5;
console.log(g);


// ! Increment and decrement

// ** "++" increment increase the variable by 1

let population = 7999999;
population++;
console.log(population);

// ** "--" decrement decreses the variable by 1
population--;
// console.log(population);

// ** Postfix and Prefix

// let earth = population++;  //postfix :- here it increments, but puts orignal value to the new variable

// console.log(earth);

// earth = ++population;
// console.log(earth);

// ! logical operator

/* There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). */


// console.log(null || 2 || undefined);
// console.log(console.log(1) || 2 || console.log(3));
// console.log(1 && null && 2);