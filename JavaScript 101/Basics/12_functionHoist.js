myName("Charukirti") // function can be used before declaring this is because Hoisting

function myName(name) {
    console.log("My name is", name);   // JavaScript moves function declaration to the top of the code before executing
}

// function expression

// console.log( myFunc())
let myFunc = function(){
    return 'Function Expresssion';
}

console.log(myFunc());


// arrow function

// console.log(arrFuc());
let arrFuc = () => 'Arrow Function.';
console.log(arrFuc());