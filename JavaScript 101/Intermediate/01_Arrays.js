// JavaScript Arrays

// ⭐ Array is an ordered list of values. Each value is called as an element specified by an index.
// ⭐ JavaScript arrays can hold mixed type of values
// ⭐ and JavaScript array size is dynamic and it can changes.

// 💡 There are two ways to create arrays one is to create using Array constructor and other is to create using [square braces].

// 👉 Creating arrays using Array constructor

const myArr = new Array(); // this an empty array.

const numbers = new Array(12, 13, 14, 15); 
console.log(numbers);

// 👉 Creating Array with square brackets [].

const names = ['John', 'Jack', 'Amit', 'Carl'];
console.log(names);

// 💡 Accessing JavaScript Array elements.

// ⭐ Arrays are zero based indexes. first element of an array starts at 0 indexes. second at 1 and so on...
// ⭐ To access array element we need to specify index of an element in square brackets []

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow', 'Hawkaye'];
console.log(avengers[0]); // Captain America
console.log(avengers[1]); // Iron Man
console.log(avengers[2]); // Thor
console.log(avengers[3]); // Hulk
console.log(avengers[4]); // Black Widow
console.log(avengers[5]); // Hawkaye

// 💡 to change value of an element, we have to assign value to the element like this 👇

const colors = ['Red', 'Orange', 'Pink', 'Yellow', 'Blue'];
colors[4] = 'Violet'; // adds Violet at the place of Blue. 
console.log(colors); 

const toArray = (a, b) => [a, b];
console.log(toArray(10, 12));

const  getFirstElement = ([a, b]) => a;
console.log(getFirstElement([11, 13]));

function setFirstElement([a, b], c){
   let arr = [a, b];
   arr[0] = c;
   return arr;
}
console.log(setFirstElement([15, 16], 5));
