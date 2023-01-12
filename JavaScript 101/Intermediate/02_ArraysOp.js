const colors = ['Red', 'Violet', 'Green'];

//⭐ Push() :- Push method is used to add an element at the end of an array

colors.push('Yellow');
colors.push('Pink');
colors.push('Blue');

console.log(colors);

//⭐ pop() :- pop method is used to remove an element from the end of an array

colors.pop(); //blue
colors.pop(); //pink

console.log(colors); // pink and blue will get removed from an array

//⭐ unshift() :- unshift method is used to add an element in an array at the beginning

colors.unshift('Violet');
colors.unshift('Brown');

console.log(colors);

//⭐ shift() :- shift method is used to remove an element from the beginning of an array

colors.shift();
colors.shift();

console.log(colors); // brown will get removed from an array

//⭐ indexOf() :- indexOf method is used to return a index of an array element

console.log(colors.indexOf('Yellow')); //3

//⭐ includes() :- includes method is used to check that particular element is present in an array or not

console.log(colors.includes('Red')); //true

