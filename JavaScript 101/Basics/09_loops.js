// ! For loop

// syntax :

// for(initialization; condition; increment/decrement) {
//statement
// }

//* initialization : initializes / or declares variables. executes only once.

//* condition : if condition true then the statement is executed, otherwise loop terminates itself.

//* increment/decrement : increments or decrements the initial value if the condition is true.

// Example :

// for (let i = 1; i <= 10; i++) {
//   console.log(i); /* It will print the numbers from 1 to 10 */
// }

// ! while loop
// syntax :

// while (condition) {
// statement
// }

// ** whle the condtion becomes true then the statement executes

// Example :

// let i = 0;
// while (i < 5) {
// console.log(i);
// i++; /* if the condition is true then the value increments */
// }

// ! do-while loop

// ** first executes the statement one time then checks the condition  

// syntax :

// do {
//statement
// } while(condition);

// Example :

// let i = 0;
// do {
// console.log(i);
// i++;
// } while(i < 5)

// let i = 0;
// while (++i < 5) console.log( i );


//! Exercise :

// ** for loop

// let i;
// for (i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i); /* prints the even numbers between 1 to 10 */
//     }
// }

console.log("-----------------------------------------------------------");

// for (i = 1; i < 100; i++) {
//     if(i % 2 == 0) {
//         console.log(i); /* prints the even numbers between 1 to 100 */
//     }
// }

console.log("--------------------------------------------------------------");

// for (i = 1; i < 100; i++) {
//     if(i % 2 != 0) {
//         console.log(i); /* prints the even numbers between 1 to 10 */
//     }
// }

console.log("-------------------------------------------------------------------");

let i;
let range = 10;
let number = 2;
let result;

for (i = 1; i <= range; i++) {
    result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}