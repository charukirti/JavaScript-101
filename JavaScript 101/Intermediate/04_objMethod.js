// 👉 Object Methods: When the value is a function, the property becomes method. To describe behaviour of an object method is used.

// Example 👇

const user = {
    firstName : "Charukirti",
    lastName : "Chougule",
};

user.greet = function() {
    console.log('Hello!');
}

user.greet()


// JavaScript allows us to define methods of an object using the object literal syntax as shown below 👇

const myObj = {
    userName : 'kang',
    title : function() {
        console.log("Multiversal War");
    }
};

const getData = myObj.title()

console.log(getData)